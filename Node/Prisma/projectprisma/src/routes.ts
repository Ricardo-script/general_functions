import { Router } from "express";
import { CreateCategoryController } from "./controllers/CreateCategoryController";
import { CreateCategoryProductController } from "./controllers/CreateCategoryProductCategory";
import { CreateProductController } from "./controllers/CreateProductController";

const router = Router();

const createProduct = new CreateProductController();
const createCategory = new CreateCategoryController();
const createCategoryProduct = new CreateCategoryProductController();

router.post('/product', createProduct.handle); // passar o metodo handle criada em no controller
router.post('/category', createCategory.handle);
router.post('/categoryProduct', createCategoryProduct.handle);
router.get('/list', createProduct.getList);


export { router };

