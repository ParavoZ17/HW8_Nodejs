import Book from "../db/model/Book.js";

export const getBooks = () => {
  return Book.findAll();
};

export const addBook = (payload) => {
  return Book.create(payload);
};

export const getBookById = (id) => Book.findByPk(id);

export const updateBookById = async (id, payload) => {
  const book = await getBookById(id);
  if (!book) return null;

  return book.update(payload);
};

export const deleteBookById = async (id) => {
  const book = await getBookById(id);
  if (!book) return null;

  await book.destroy();
  return book;
};
