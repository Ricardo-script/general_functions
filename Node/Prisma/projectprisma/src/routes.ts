import { Router } from "express";
import { CreateCategoryController } from "./controllers/CreateCategoryController";
import { CreateCategoryProductController } from "./controllers/CreateCategoryProductCategory";
import { CreateProductController } from "./controllers/CreateProductController";
import CreateUserController from "./controllers/CreateUserController";
import { auth } from "./auth";
import { isAuthenticated } from "./routes/middleware/isAuthenticated";
import multer from "multer";
import { multerConfig } from "./config/multer";

const router = Router();

const createProduct = new CreateProductController();
const createCategory = new CreateCategoryController();
const createCategoryProduct = new CreateCategoryProductController();

router.post('/product', createProduct.handle); // passar o metodo handle criada em no controller
router.post('/category', createCategory.handle);
router.post('/categoryProduct', createCategoryProduct.handle);
router.get('/list', isAuthenticated, createProduct.getList);

router.post('/auth', auth);
router.post('/newuser', multer(multerConfig).single('file'), CreateUserController.create); // multer recebe como parametro as suas configurações, que esta em config/multer.ts
// single é para upload de um unico arquivo, recebe como parametro o nome do campo client ('file') que ira conter o arquivo

router.delete('/deleteUser/:id', CreateUserController.deleteUser);


export { router };

