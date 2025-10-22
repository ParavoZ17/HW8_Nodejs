import { Router } from "express";
import {
  getBooksController,
  deleteBookByIdController,
  updateBookByIdController,
  addBookController,
} from "../controllers/books.controller.js";

const booksRouter = Router();

booksRouter.get("/", getBooksController);

booksRouter.post("/", addBookController);

booksRouter.put("/:id", updateBookByIdController);

booksRouter.delete("/:id", deleteBookByIdController);

export default booksRouter;
