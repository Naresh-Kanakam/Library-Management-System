import { Action } from "@ngrx/store";

import { Update } from "@ngrx/entity";

import { Book } from "../book.model";

export enum BookActionTypes {
  LOAD_BOOKS = "[Book] Load Books",
  LOAD_BOOKS_SUCCESS = "[Book] Load Books Success",
  LOAD_BOOKS_FAIL = "[Book] Load Books Fail",
  LOAD_BOOK = "[Book] Load Book",
  LOAD_BOOK_SUCCESS = "[Book] Load Book Success",
  LOAD_BOOK_FAIL = "[Book] Load Book Fail",
  CREATE_BOOK = "[Book] Create Book",
  CREATE_BOOK_SUCCESS = "[Book] Create Book Success",
  CREATE_BOOK_FAIL = "[Book] Create Book Fail",
  UPDATE_BOOK = "[Book] Update Book",
  UPDATE_BOOK_SUCCESS = "[Book] Update Book Success",
  UPDATE_BOOK_FAIL = "[Book] Update Book Fail",
  DELETE_BOOK = "[Book] Delete Book",
  DELETE_BOOK_SUCCESS = "[Book] Delete Book Success",
  DELETE_BOOK_FAIL = "[Book] Delete Book Fail"
}

export class LoadBooks implements Action {
  readonly type = BookActionTypes.LOAD_BOOKS;
}

export class LoadBooksSuccess implements Action {
  readonly type = BookActionTypes.LOAD_BOOKS_SUCCESS;

  constructor(public payload: Book[]) {}
}

export class LoadBooksFail implements Action {
  readonly type = BookActionTypes.LOAD_BOOKS_FAIL;

  constructor(public payload: string) {}
}

export class LoadBook implements Action {
  readonly type = BookActionTypes.LOAD_BOOK;

  constructor(public payload: number) {}
}

export class LoadBookSuccess implements Action {
  readonly type = BookActionTypes.LOAD_BOOK_SUCCESS;

  constructor(public payload: Book) {}
}

export class LoadBookFail implements Action {
  readonly type = BookActionTypes.LOAD_BOOK_FAIL;

  constructor(public payload: string) {}
}

export class CreateBook implements Action {
  readonly type = BookActionTypes.CREATE_BOOK;

  constructor(public payload: Book) {}
}

export class CreateBookSuccess implements Action {
  readonly type = BookActionTypes.CREATE_BOOK_SUCCESS;

  constructor(public payload: Book) {}
}

export class CreateBookFail implements Action {
  readonly type = BookActionTypes.CREATE_BOOK_FAIL;

  constructor(public payload: string) {}
}

export class UpdateBook implements Action {
  readonly type = BookActionTypes.UPDATE_BOOK;

  constructor(public payload: Book) {}
}

export class UpdateBookSuccess implements Action {
  readonly type = BookActionTypes.UPDATE_BOOK_SUCCESS;

  constructor(public payload: Update<Book>) {}
}

export class UpdateBookFail implements Action {
  readonly type = BookActionTypes.UPDATE_BOOK_FAIL;

  constructor(public payload: string) {}
}

export class DeleteBook implements Action {
  readonly type = BookActionTypes.DELETE_BOOK;

  constructor(public payload: number) {}
}

export class DeleteBookSuccess implements Action {
  readonly type = BookActionTypes.DELETE_BOOK_SUCCESS;

  constructor(public payload: number) {}
}

export class DeleteBookFail implements Action {
  readonly type = BookActionTypes.DELETE_BOOK_FAIL;

  constructor(public payload: string) {}
}

export type Action =
  | LoadBooks
  | LoadBooksSuccess
  | LoadBooksFail
  | LoadBook
  | LoadBookSuccess
  | LoadBookFail
  | CreateBook
  | CreateBookSuccess
  | CreateBookFail
  | UpdateBook
  | UpdateBookSuccess
  | UpdateBookFail
  | DeleteBook
  | DeleteBookSuccess
  | DeleteBookFail;
