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

    async getList(request: Request, response: Response) {
        const list = await prismaClient.product.findMany();
        return response.json(list);
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
