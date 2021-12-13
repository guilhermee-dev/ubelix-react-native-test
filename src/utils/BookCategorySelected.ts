export interface BookCategorySelected {
  results: {
    list_name: string;
    list_name_encoded: string;
    books: {
      title: string;
      author: string;
      description: string;
      book_image: string;
      amazon_product_url: string;
    }[];
  };
}
