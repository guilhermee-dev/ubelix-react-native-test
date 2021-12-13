import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";
import { Alert } from "react-native";
import { BookData } from "../utils/BookData";
import { BookCategorySelected } from "../utils/BookCategorySelected";
import { api } from "../services/api";

interface BooksContextData {
  booksData: BookData;
  booksFiltered: BooksFilteredData[] | undefined;
  handleSearchBooks: (filter: string) => void;
  getBooks: (list_encoded_name: string) => void;
  booksByCategory: BookCategorySelected;
}

interface BooksFilteredData {
  amazon_product_url: string;
  author: string;
  book_image: string;
  description: string;
  title: string;
}

interface BooksProviderProps {
  children: ReactNode;
}

const BooksContext = createContext<BooksContextData>({} as BooksContextData);

function BooksProvider({ children }: BooksProviderProps) {
  const [booksData, setBooksData] = useState<BookData>({} as BookData);
  const [booksFiltered, setBooksFiltered] = useState<BooksFilteredData[]>();
  const [booksByCategory, setBooksByCategory] = useState<BookCategorySelected>(
    {} as BookCategorySelected
  );

  function handleSearchBooks(filter: string) {
    let booksTemp: BooksFilteredData[] = [];

    booksData.results.lists.map((item) =>
      item.books.map((book) =>
        book.title.toUpperCase().includes(filter.toUpperCase())
          ? booksTemp.push(book)
          : true
      )
    );

    setBooksFiltered(booksTemp);
  }

  async function getBooks(list_name_encoded: string) {
    try {
      const url = `https://api.nytimes.com/svc/books/v3/lists/current/${list_name_encoded}.json?api-key=vi0bsV0yOCA9qYnmAaOUJV4dO0BNhUGR`;
      const response = await api.get(url);
      setBooksByCategory(response.data);
    } catch (error) {
      Alert.alert("Opa", "Não foi possivel carregar os livros dessa categoria");
    }
  }

  useEffect(() => {
    async function getBooks() {
      try {
        const response = await api.get(
          "/svc/books/v3/lists/overview.json?api-key=vi0bsV0yOCA9qYnmAaOUJV4dO0BNhUGR"
        );
        setBooksData(response.data);
      } catch (error) {
        Alert.alert(
          "Opa",
          "Não foi possivel carregar os livros, tente novamente mais tarde!"
        );
      }
      return;
    }
    getBooks();
  }, []);

  return (
    <BooksContext.Provider
      value={{
        booksData,
        booksFiltered,
        handleSearchBooks,
        getBooks,
        booksByCategory,
      }}
    >
      {children}
    </BooksContext.Provider>
  );
}

function useBooks() {
  const context = useContext(BooksContext);
  return context;
}

export { BooksProvider, useBooks };
