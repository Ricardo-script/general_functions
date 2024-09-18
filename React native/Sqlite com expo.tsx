/*
	Expo Routes:

	- Criar para src, apagar tudo de dentro de app
	- Ao criar a pasta src deve mudar o caminho da pasta dentro de tsconfig.json e na propriedade compilerOptions

	"paths": {
		"@/_": ["./src/_"]
	}

	- criar um arquivo chamado '\_layout.tsx' dentro de app que sera o ponto de entrada da aplicação
*/



/* 
	- Instalar sqlite:
		
		npx expo install expo-sqlite
		
	- Dentro de src: 
	- Criar uma pasta chamada database
	- dentro de database crie um arquivo chamado initializeDatabase.ts que será a estrutura do banco de dados
*/

//src/database/initializeDatabase.ts: 

// criando tabela de produtos:

import { type SQLiteDatabase } from "expo-sqlite";

export async function initializeDatabase(database: SQLiteDatabase) {
    await database.execAsync(`
        CREATE TABLE IF NOT EXISTS products (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            quantity INTEGER NOT NULL
        );
    `);
}


//-------------------------------------------------------------------------------------------------------------------------------

// Definindo ponto de entrada da aplicação:

// crie dentro da pasta app, o _layout.tsx

// databaseName será o nome do banco
// onInit inicia a tabela (produtos) no banco de dados

import { initializeDatabase } from "@/database/initializeDatabase";
import { Slot } from "expo-router";
import { SQLiteProvider } from "expo-sqlite";

export default function Layout() {
  return (
    <SQLiteProvider databaseName="MyDatabase.db" onInit={initializeDatabase}>
      <Slot />
    </SQLiteProvider>
  );
}

//---------------------------------------------------------------------------------------------------------------------------------

// criar componente Input em src/components:
//src/components/Input.tsx

import { TextInput, TextInputProps } from "react-native";

export function Input({ ...rest }: TextInputProps) {
    return (
        <TextInput
            style={{
                height: 54,
                borderWidth: 1,
                borderColor: "#999",
                borderRadius: 7,
                paddingHorizontal: 16,
            }}
            {...rest}
        />
    );
}

//----------------------------------------------------------------------------------------------------------------------------------


// criar dentro da pasta database o arquivo useProductDatabase que ira centralizar as operações do banco de dados (CRUD):

import { useSQLiteContext } from "expo-sqlite";

export type ProductDatabase = {
    id: number;
    name: string;
    quantity: number;
};

export function useProductDatabase() {

    const database = useSQLiteContext();


    async function create(data: Omit<ProductDatabase, "id">) {
        const statement = await database.prepareAsync(
            "INSERT INTO products (name, quantity) VALUES ($name, $quantity)"
        );

        try {
            const result = await statement.executeAsync({
                $name: data.name,
                $quantity: data.quantity,
            });

            const insertedRowId = result.lastInsertRowId.toLocaleString(); // pegando o id que criou

            return { insertedRowId };
        } catch (error) {
            throw error;
        } finally {
            await statement.finalizeAsync();
        }
    }

    async function update(data: ProductDatabase) {
        const statement = await database.prepareAsync(
            "UPDATE products SET name = $name, quantity = $quantity WHERE id = $id"
        );

        try {
            await statement.executeAsync({
                $id: data.id,
                $name: data.name,
                $quantity: data.quantity,
            });
        } catch (error) {
            throw error;
        } finally {
            await statement.finalizeAsync();
        }
    }

    async function searchByName(name: string) {
        try {
            const query = "SELECT * FROM products WHERE name LIKE ?";
            const response = await database.getAllAsync<ProductDatabase>(
                query,
                `%${name}%`
            );
            return response;
        } catch (error) {}
    }

    async function remove(id: number) {
        try {
            await database.execAsync("DELETE FROM products WHERE id = " + id);
        } catch (error) {}
    }

    return { create, update, searchByName, remove };
}

//----------------------------------------------------------------------------------------------------------------------------------------------

// Page index, chamada das funções src/app/index.tsx:

import { useState, useEffect } from "react";
import { View, Button, Alert, FlatList } from "react-native";
import { Input } from "@/components/Input";
import {
    ProductDatabase,
    useProductDatabase,
} from "@/database/useProductDatabase";
import { Product } from "@/components/Product";

export default function Home(): JSX.Element {
    const [id, setId] = useState("");
    const [search, setSearch] = useState("");
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState("");
    const [products, setProducts] = useState<ProductDatabase[]>([]);

    const productDatabase = useProductDatabase();

    async function createNew() {
        try {
            if (isNaN(Number(quantity))) {
                return Alert.alert(
                    "Quantidade",
                    "A Quantidade precisa ser um número!"
                );
            }

            const response = await productDatabase.create({
                name,
                quantity: Number(quantity),
            });

            Alert.alert(
                "Produto cadastrado com o ID: " + response.insertedRowId
            );
        } catch (error) {
            console.log(error);
        }
    }

    async function list() {
        try {
            const response = await productDatabase.searchByName(search);
            response && setProducts(response);
        } catch (error) {
            console.log(error);
        }
    }

    async function updateNew() {
        try {
            if (isNaN(Number(quantity))) {
                return Alert.alert(
                    "Quantidade",
                    "A Quantidade precisa ser um número!"
                );
            }

            const response = await productDatabase.update({
                id: Number(id),
                name,
                quantity: Number(quantity),
            });

            Alert.alert("Produto atualizado!");
        } catch (error) {
            console.log(error);
        }
    }

    function details(item: ProductDatabase) {
        setName(item.name);
        setQuantity(String(item.quantity));
        setId(String(item.id));
    }

    async function handleSave() {
        if (id) {
            updateNew();
        } else {
            createNew();
        }

        setId("");
        setName("");
        setQuantity("");

        await list();
    }

    async function removeItem(id: number) {
        try {
            await productDatabase.remove(id);
            list();
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        list();
    }, [search]);

    return (
        <View
            style={{ flex: 1, justifyContent: "center", padding: 32, gap: 16 }}
        >
            <Input placeholder="Nome" onChangeText={setName} value={name} />
            <Input
                placeholder="Quantidade"
                onChangeText={setQuantity}
                value={quantity}
            />
            <Button title="Salvar" onPress={handleSave} />

            <Input placeholder="Pesquisar" onChangeText={setSearch} />

            <FlatList
                data={products}
                keyExtractor={(item) => String(item.id)}
                renderItem={({ item }) => (
                    <Product
                        data={item}
                        onPress={() => details(item)}
                        onDelete={() => removeItem(item.id)}
                    />
                )}
                contentContainerStyle={{ gap: 16 }}
            />
        </View>
    );
}

//----------------------------------------------------------------------------------------------------------------------------------------------------

//componente Product
//src/app/components/Product:

import {
    Pressable,
    PressableProps,
    Text,
    TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

type Props = PressableProps & {
    data: {
        name: string;
        quantity: number;
    };

    onDelete: () => void;
};

export function Product({ data, onDelete, ...rest }: Props) {
    return (
        <Pressable
            style={{
                backgroundColor: "#CECECE",
                padding: 24,
                borderRadius: 5,
                flexDirection: "row",
            }}
            {...rest}
        >
            <Text style={{ flex: 1 }}>
                {data.quantity} - {data.name}
            </Text>
            <TouchableOpacity onPress={onDelete}>
                <MaterialIcons name="delete" size={24} color="red" />
            </TouchableOpacity>
        </Pressable>
    );
}

//-------------------------------------------------------------------------------------------------------------------------------------------------------
