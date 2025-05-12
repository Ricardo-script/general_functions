//tipos utilitários

type User = {
    id: number
    name: string
    age?:number
    email?: string
    isAdmin: boolean
}

//Partial: cria um novo tipo em que todas as propriedades de "User" se tornam opcionais
type PartialUser = Partial<User>
/* resultado:
    type PartialUser = {
        id?: number | undefined;
        name?: string | undefined;
        age?: number | undefined;
        email?: string | undefined;
        isAdmin?: boolean | undefined;
    }
*/

//Pick: cria um novo tipo contendo apenas a propriedade "name" do tipo "User"
type PickUser = Pick<User, "name">;
/* resultado:
    type PickUser = {
        name: string;
    }
*/

//Required: cria um novo tipo em que todas as propriedades de "User" se tornam obrigatórias
type RequiredUser = Required<User>;
/* resultado:
    type RequiredUser = {
        id: number;
        name: string;
        age: number;
        email: string;
        isAdmin: boolean;
    }
*/

//Omit: cria um novo tipo com todas as propriedades de "User", exeto "age"
type OmitUser = Omit<User, 'age'>;
/* resultado:
    type OmitUser = {
        name: string;
        email?: string | undefined;
        id: number;
        isAdmin: boolean;
    }
*/
