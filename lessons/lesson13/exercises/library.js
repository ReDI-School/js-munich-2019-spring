let library = {
  books: [],
  capacity: 5,

  addBook: function(book) {
    if (this.books.length >= this.capacity) {
      alert("The library is full!");
    } else {
      this.books.push(book);
    }
  },
};

// Test it:
library.addBook("First book");
library.addBook("Second book");
library.addBook("Third book");
library.addBook("Fourth book");
library.addBook("Fifth book");
library.addBook("Sixth book");
alert(library.books);
