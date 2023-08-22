# Library Project - Odin Project

Live demo [here](https://nzxzn.github.io/library/)

Welcome to my Library Project as part of The Odin Project's curriculum. In this project, I'm creating a virtual library where I can manage and display a collection of books. Here's how I tackled the assignment:

## Table of Contents

- [Project Overview](#project-overview)
- [Getting Started](#getting-started)
- [Storing Book Objects](#storing-book-objects)
- [Displaying Books](#displaying-books)
- [Adding New Books](#adding-new-books)
- [Removing Books](#removing-books)
- [Changing Read Status](#changing-read-status)

## Project Overview

The goal of this project is to create a virtual library system that allows users to add, display, remove, and update the read status of books. The project follows the guidelines provided by The Odin Project's assignment.

## Getting Started

Before diving into the main codebase, I set up the project by creating skeleton HTML, CSS, and JavaScript files. This provided a clean starting point for my development.

## Storing Book Objects

To organize my books, I created an array called `myLibrary`, and each book object is created using a constructor function named `Book()`. The `addBookToLibrary()` function is responsible for adding new books to the library.

## Displaying Books

I implemented a function that iterates through the `myLibrary` array and dynamically displays each book on the page. The presentation is designed using "card" elements to provide a visually appealing layout.

## Adding New Books

The user can add new books by clicking the "NEW BOOK" button. This action triggers a form to input book details. To handle the form submission, I utilized `event.preventDefault()` to prevent unwanted behavior and implemented proper data validation.

## Removing Books

Each displayed book card features a "Remove" button, allowing users to easily delete books from the library. The association between DOM elements and book objects is established using data attributes for accurate removal.

## Changing Read Status

A "Read" button is incorporated into each book card to toggle the read status. This functionality is facilitated by a function that modifies the `Book` prototype instance.

## Conclusion

The Library Project has been a fantastic learning experience. It provided practical insights into DOM manipulation, event handling, and object-oriented programming in JavaScript. I'm pleased with the functionality and user experience I've achieved.

Feel free to explore the code and see how the project comes together. Happy coding!
