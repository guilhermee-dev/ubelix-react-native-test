export interface BookData {
  results: {
    lists: {
      list_name_encoded: string;
      display_name: string;
      amazon_product_url: string;
      books: {
        amazon_product_url: string;
        author: string;
        book_image: string;
        description: string;
        title: string;
      }[];
    }[];
  };
}
