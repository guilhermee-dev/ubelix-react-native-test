import React, { ReactNode } from "react";
import { BooksProvider } from "./useBooks";

interface BooksDataProvider {
  children: ReactNode;
}

function AppBooksProvider({ children }: BooksDataProvider) {
  return <BooksProvider>{children}</BooksProvider>;
}

export { AppBooksProvider };
