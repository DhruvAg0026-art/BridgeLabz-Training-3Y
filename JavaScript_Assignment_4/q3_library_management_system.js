"use strict";

class Book {
  constructor(title, author, isbn, isIssued = false) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.isIssued = isIssued;
  }

  issueBook() {
    if (this.isIssued) {
      return false;
    }
    this.isIssued = true;
    return true;
  }

  returnBook() {
    if (!this.isIssued) {
      return false;
    }
    this.isIssued = false;
    return true;
  }
}

const books = [
  new Book("The Hobbit", "J. R. R. Tolkien", "978-0547928227"),
  new Book("Pride and Prejudice", "Jane Austen", "978-0141439518"),
  new Book("Dune", "Frank Herbert", "978-0441172719", true)
];

function issueBookByIsbn(isbn) {
  const book = books.find((item) => item.isbn === isbn);
  if (!book) return `No book found for ISBN ${isbn}.`;
  return book.issueBook()
    ? `Issued "${book.title}" successfully.`
    : `"${book.title}" is already issued.`;
}

console.log("=== Available Books ===");
for (const book of books.filter((item) => !item.isIssued)) {
  console.log(`${book.title} by ${book.author} (ISBN: ${book.isbn})`);
}

console.log("\n=== Issue Book ===");
console.log(issueBookByIsbn("978-0547928227"));
