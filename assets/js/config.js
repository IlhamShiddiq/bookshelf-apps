const COMPLETED_BOOKS_ID = 'completed-books';
const UNCOMPLETE_BOOKS_ID = 'uncomplete-books';
const SEARCH_FIELD_ID = 'search';
const TITLE_FIELD_ID = 'title';
const AUTHOR_FIELD_ID = 'author';
const YEAR_FIELD_ID = 'year';
const IS_FINISEHD_ID = 'is-finished';
const SUBMIT_BUTTON_ID = 'submit';
const EDIT_BUTTON_ID = 'edit';
const HIDDEN_INPUT = 'bookId';
const BOOKSHELF_KEY = 'bookshelf';
const BOOK_ID = "bookID";
let books = [];
const BTN_ATTRIBUTES = [
    {
        type: 'markCompleted',
        class: 'btn-mark-as-read',
        title: 'Mark as Read',
        icon: '<i class="fas fa-bookmark"></i>'
    },
    {
        type: 'markUncomplete',
        class: 'btn-mark-as-read',
        title: 'Mark as Read',
        icon: '<i class="far fa-bookmark"></i>'
    },
    {
        type: 'edit',
        class: 'btn-edit',
        title: 'Edit Book',
        icon: '<i class="fas fa-edit"></i>'
    },
    {
        type: 'delete',
        class: 'btn-delete',
        title: 'Delete Book',
        icon: '<i class="fas fa-trash"></i>'
    },
]