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