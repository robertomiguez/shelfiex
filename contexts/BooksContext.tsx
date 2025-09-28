import { createContext, useState } from 'react';
import { tablesDB } from '../lib/appwrite';
import { useUser } from '../hooks/useUser';
import { Permission, Role } from 'react-native-appwrite';
import { Book } from '../types/Book';

const DATABASE_ID = process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID;

interface BooksContextType {
  books: Book[];
  fetchBooks: () => Promise<Book[]>;
  fetchBooksById: (bookId: string) => Promise<Book>;
  addBook: (bookData: Omit<Book, 'id' | 'userId'>) => Promise<void>;
  removeBook: (bookId: string) => Promise<void>;
  updateBook: (
    bookId: string,
    bookData: Partial<Omit<Book, 'id' | 'userId'>>
  ) => Promise<Book>;
}

export const BooksContext = createContext<BooksContextType | undefined>(
  undefined
);

export const BooksProvider = ({ children }: { children: React.ReactNode }) => {
  const [books, setBooks] = useState([]);
  const { user } = useUser();

  async function fetchBooks() {
    const result = await tablesDB.listRows(DATABASE_ID!, 'books');
    const books: Book[] = result.rows.map((row: any) => ({
      id: row.id,
      title: row.title,
      author: row.author,
      userId: row.userId,
      description: row.description,
    }));
    return books;
  }

  async function fetchBooksById(bookId: string) {
    const result = await tablesDB.listRows(DATABASE_ID!, 'books', [
      `id=${bookId}`,
    ]);
    if (!result.rows || result.rows.length === 0) {
      throw new Error('Book not found');
    }
    const row = result.rows[0];
    const book: Book = {
      id: row.id,
      title: row.title,
      author: row.author,
      userId: row.userId,
      description: row.description,
    };
    return book;
  }

  async function addBook(bookData: any) {
    if (!user) {
      throw new Error('User is not authenticated');
    }
    const newBook = await tablesDB.createRow(
      DATABASE_ID!,
      'books',
      'unique()',
      { ...bookData, userId: user.$id },
      [
        Permission.read(Role.user(user.$id)),
        Permission.update(Role.user(user.$id)),
        Permission.delete(Role.user(user.$id)),
      ]
    );
  }

  async function removeBook(bookId: string) {
    await tablesDB.deleteRow(DATABASE_ID!, 'books', bookId);
  }

  async function updateBook(
    bookId: string,
    bookData: Partial<Omit<Book, 'id' | 'userId'>>
  ): Promise<Book> {
    const updatedRow = await tablesDB.updateRow(
      DATABASE_ID!,
      'books',
      bookId,
      bookData,
      [] // or provide permissions array as required
    );
    const row: any = updatedRow;
    const book: Book = {
      id: row.$id || row.id,
      title: row.title,
      author: row.author,
      userId: row.userId,
      description: row.description,
    };
    return book;
  }

  return (
    <BooksContext.Provider
      value={{
        books,
        fetchBooks,
        fetchBooksById,
        addBook,
        removeBook,
        updateBook,
      }}
    >
      {children}
    </BooksContext.Provider>
  );
};
