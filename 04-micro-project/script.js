class Library {
  constructor() {
    this.books = []; // all data shall be record here
  }

  addBooks(books) {
    //regular method
    this.books.push(...books);
  }

  listAllBooks() {
    this.books.forEach((book, index) => {
      console.log(`${index + 1}) ${book.name} by ${book.author}`);
    });
  }
}

class Book {
  constructor(name, isbn, price, author) {
    this.name = name;
    this.isbn = isbn;
    this.price = price;
    this.author = author;
    this.readStatus = false;
  }

  info() {
    console.log(
      `${this.name} is written by ${this.author} and you have ${
        this.readStatus ? "read it" : "not read this book"
      } and is available at amazon at the price range of ${this.price}.`
    );
  }

  changeReadStatus() {
    this.readStatus = !this.readStatus;
  }
}

let book1 = new Book(
  "The Intelligent Investor",
  1654651,
  420,
  "Benjamin Graham"
);
let book2 = new Book("Snowball", 12124241, 310, "Mary Buffett");
let book3 = new Book("Beating the Street", 875551, 350, "Peter Lynch");

let delhiLibrary = new Library();
delhiLibrary.addBooks([book1, book2, book3]);
