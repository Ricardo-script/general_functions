//Instalando a ORM prisma
//--------------------------------------------------------------------------------------------------------------------------------
// instalar como dependência de desenvolvimento (interface de linha de comando)

npm i prisma -D
//ou
yarn add prisma -D
// e o prisma cliente como dependencia de produção (sem o -D) - realiza a conexão com o DB

npm i @prisma/client
//ou
yarn add @prisma/client
//ou

// após rodar o comando no terminal

yarn prisma init
//ou
npx prisma init --datasource-provider SQLITE
/*
	O camando acima vai gerar alguns arquivos automaticamente
	- a pasta Prisma contendo um arquivo chamado schema.prima (é necessário ter a extensão para visualizar melhor o código)
	- o arquivo .ENV
	
	schema.prisma:
	generator client {
		provider = "prisma-client-js"
	}

	datasource db {
		provider = "sqlite"
		url      = env("DATABASE_URL")
	}
	
	.env:

	DATABASE_URL="file:./dev.db"
**/

//----------------------------------------------------------------------------------------------------------------------------------
// vscode config

// para que o prisma idente da forma que esta abaixo basta inserir a configuração no editor do vscode:
"[prisma]": {
	"editor.formatOnSave": true
},

//-----------------------------------------------------------------------------------------------------------------------------------
//inserir o tsconfig do prisma para usar o typescript conforme a documentação
{
  "compilerOptions": {
    "sourceMap": true,
    "outDir": "dist",
    "strict": true,
    "lib": ["esnext"],
    "esModuleInterop": true
  }
}

//--------------------------------------------------------------------------------------------------------------------------------------
//criando models

// @id - é a primary key
// @default(cuid()) - gera um id unico, a diferença de cuid e uuid é que cuid gera uma chave menor
// @unique - gera uma string unica
// @default - valor padrão - now() - gera um valor padrão com horario atual

/*
	generator client {
		provider = "prisma-client-js"
	}

	datasource db {
		provider = "sqlite"
		url      = env("DATABASE_URL")
	}

*/

model User {
	id         String   @id @default(uuid())
	email      String   @unique
	name       String?
	created_at DateTime @default(now())
	updated_at DateTime @updatedAt

	@@map("users")
}
// "?" no campo name tem um "?" depois do String, isso é porque se não tiver um tipo ele precisa ser "?" para receber qualquer tipo
//@@map("") - muda o nome que o prisma nomeia a tabela no banco de dados, no exemplo acima fica com letra minuscula e plural

// para rodar e criar:

npx prisma migrate dev
//ou
yarn prisma migrate dev


/* Após rodar o comando acima ele vai pedir um nome para sua migration ( versionamento de banco de dados ) 
	dar um nome do que foi realizado, por exemplo - initial
	então ele cria a pasta migration
*/

//------------------------------------------------------------------------------------------------------------------------------------
// para visualizar o banco de dados rodar:

npx prisma studio
//
yarn prisma studio

//------------------------------------------------------------------------------------------------------------------------------------
//Criando o prisma client

//Prima cliente é como se fosse a classe de conexão com o banco de dados

/*
	- Criar pasta database
	- Dentro da pasta criar um arquivo chamado prismaClient.ts
*/

//Inserir código

import { PrismaClient } from "@prisma/client";

const prismaClient = new PrismaClient();

export { prismaClient };

// ou const prisma = new PrismaClient();
//------------------------------------------------------------------------------------------------------------------------------------
// Controllers
/*
	- Criar dentro de src a pasta controllers
	- dentro da pasta controllers criar o arquivo por exemplo CreateProductController.ts
*/

//dentro do arquivo CreateProductController
//importar o prismaCliente, que é a classe de conexão para o banco:

import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class CreateProductController {
    async handle(request: Request, response: Response) {
        const { name, bar_code, price } = request.body;

        const product = await prismaClient.product.create({
            data: {
                bar_code,
                name,
                price
            }
        });

        return response.json(product);
    }
}

// o controller vai receber os campos que foram nomeados na model Product: name, bar_code, price
/* 
  - declarar uma constante que ira conter as informações requisitadas do banco, aqui no exemplo foi declarada como "product",
    chame o primaCliente, e ao colocar o "." ponto, ele ira mostrar todas as opções possivel, e inclusive o nome da model criada,
    no caso é o modelo "Product" ela ira aparecer com a letra minuscula automaticamente "product", e da onde ele pegou isso,
    quando se roda "yarn prisma migrate dev" ele cria dentro de node_modules, e dentro da pasta .prisma um arquivo index.js
  - depois de 'prismaClient.product' ao inserir mais um "." ponto dara acesso a todas as opções disponivel para o model produto
    e para adicionar um item no banco => create, e dentro da função como se trata de um create, então selecionar "data", abre e fecha
    chaves, ctrl + espaço e ele ira trazer todos os campos da model, se tiver "?" ele não é obrigatório, e nao tiver é obrigatório
*/

//-------------------------------------------------------------------------------------------------------------------------------------
// Routes
/*
	- Criar dentro de src o arquivo routes.ts
*/
// importar Router de express;
// importar os controllers criados
// criar as constantes que irão conter os controllers e instanciar como classes ex: const createProduct = new CreateProductController();

import { Router } from "express";
import { CreateProductController } from "./controllers/CreateProductController";

const router = Router();

const createProduct = new CreateProductController();

router.post('/product', createProduct.handle); // passar o metodo handle criada em no controller

export { router };
 

//--------------------------------------------------------------------------------------------------------------------------------------

//server.ts
import express from 'express';
import { router } from './routes';

const server = express();
server.use(express.json());
server.use(router);

server.listen(80, () => {
    console.log('Server running in port 80');
});

//--------------------------------------------------------------------------------------------------------------------------------------
// criando uma nova model

model Category {
    id String @id @default(uuid())
    name String

    @@map("categories")
}

//após isso gerar uma nova migration dessa nova model
// --- yarn prisma migrate dev
//e inserir o nome para a migrate


/*
	Após isso criar dentro de controllers CreateCategoryController e repetir o mesmo processo
*/
//--------------------------------------------------------------------------------------------------------------------------------------


//relacionar tabelas: - Many to many

//No exemplo contem duas models

model Product {
    id              String            @id @default(uuid())
    name            String
    bar_code        String            @unique
    price           Decimal
    created_at      DateTime          @default(now())
    ProductCategory ProductCategory[]

    @@map("products")
}

model Category {
    id              String            @id @default(uuid())
    name            String
    ProductCategory ProductCategory[]

    @@map("categories")
}

/*
criando uma model para fazer relação entre product e category 
essa model vai precisar ter duas colunas, uma para fazer o relacionamento com a categoria
e uma para fazer relacoonamento com o produto
para realizar a relação insirir um campo ex: product que irá conter o modelo ex: Product, 
inserir o field que deseja relacionar e depois qual a referencia dentro da tabela de products => @relation(fields:["id_product"], references: ["id"])
com isso tbm deve-se inserir na model Product a relacao: ProductCategory ProductCategory[]
*/
model ProductCategory {
    id          String   @id @default(uuid())
    id_product  String
    product     Product  @relation(fields: [id_product], references: [id])
    id_category String
    category    Category @relation(fields: [id_category], references: [id])

    @@map("products_categories")
}

// Logo após, criar uma model conforme as demais:

import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class CreateCategoryProductController {
    async handle(request: Request, response: Response) {
        const { id_product, id_category } = request.body;

        const productCategory = await prismaClient.productCategory.create({
            data: {
                id_product,
                id_category
            }
        });


        return response.json(productCategory);
    }
}

//e na routes:
router.post('/categoryProduct', createCategoryProduct.handle);

//--------------------------------------------------------------------------------------------------------------------------------------
//Outro exemplo:

model User {
    id         String   @id @default(uuid())
    email      String   @unique
    name       String?
    created_at DateTime @default(now())
    updated_at DateTime @updatedAt

    @@map("users")
}

model Movies {
	id String @id @default(uuid())
	title	String @unique
	duration Int
	realease_date DateTime

	@@map("movies")
} 

//como relaciona-las?

// para o exemplo, foi criado uma model com nome de MovieRent

model User {
    id         String      @id @default(uuid())
    email      String      @unique
    name       String?
    created_at DateTime    @default(now())
    updated_at DateTime    @updatedAt
    movie_rent MovieRent[] @relation("user")

    @@map("users")
}

model Movie {
    id            String      @id @default(uuid())
    title         String      @unique
    duration      Int
    realease_date DateTime
    movie_rent    MovieRent[] @relation("movie")

    @@map("movies")
}

// pegar o id do usuário userId e o id do filme movieId:
// esse campo não vai para o banco de dados só serve poara o prisma entender que há um relacionamento

model MovieRent {
    user    User   @relation("user", fields: [userId], references: [id])
    userId  String
    movie   Movie  @relation("movie", fields: [userId], references: [id])
    movieId String

    @@id([userId, movieId]) //não criar um novo campo de id, e sim fazer dessa forma
}

//----------------------------------------------------------------------------------------------------------------------

//Crud

export class CreateProductController {
	
	//post
    async handle(request: Request, response: Response) {
        const { name, bar_code, price } = request.body;

        const product = await prismaClient.product.create({
            data: {
                bar_code,
                name,
                price
            }
        });

        return response.json(product);
    }
	//get all
    async getList(request: Request, response: Response) {
        const list = await prismaClient.product.findMany();
        return response.json(list);
    }
}

//routes:

import { Router } from "express";
import { CreateProductController } from "./controllers/CreateProductController";

const router = Router();

const createProduct = new CreateProductController();

router.post('/product', createProduct.handle);
router.get('/list', createProduct.getList);


export { router };
//----------------------------------------------------------------------------------------------------------------------



