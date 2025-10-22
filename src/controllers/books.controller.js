import HttpError from "../utils/HttpError.js";

import {
  getBooks,
  addBook,
  updateBookById,
  deleteBookById,
} from "../services/books.service.js";

import validateBody from "../utils/validateBody.js";
import { bookFullSchema } from "../schemas/book.schema.js";

export const getBooksController = async (req, res) => {
  const result = await getBooks();
  res.json(result);
};

export const addBookController = async (req, res) => {
  validateBody(bookFullSchema, req.body);

  const result = await addBook(req.body); // Error("notNull Violation: contact.email cannot be null")
  res.status(201).json(result);
};

export const updateBookByIdController = async (req, res) => {
  const { id } = req.params;
  const result = await updateBookById(id, req.body);
  if (!result) throw HttpError(404, `Contact with id=${id} not found`);

  res.json(result);
};

export const deleteBookByIdController = async (req, res) => {
  const { id } = req.params;
  const result = await deleteBookById(id);
  if (!result) throw HttpError(404, `Contact with id=${id} not found`);

  res.json(result);
};
