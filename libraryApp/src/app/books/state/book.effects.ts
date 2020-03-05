import { Injectable } from "@angular/core";

import { Actions, Effect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";

import { Observable, of } from "rxjs";
import { map, mergeMap, catchError } from "rxjs/operators";

import { BooksService } from "../book.service";
import * as bookActions from "../state/book.actions";
import { Book } from "../book.model";

@Injectable()
export class BookEffect {
  constructor(private actions$: Actions, private booksService: BooksService) {}

  @Effect()
  loadBooks$: Observable<Action> = this.actions$.pipe(
    ofType<bookActions.LoadBooks>(bookActions.BookActionTypes.LOAD_BOOKS),
    mergeMap((action: bookActions.LoadBooks) =>
      this.booksService.getBooks().pipe(
        map((books: Book[]) => new bookActions.LoadBooksSuccess(books)),
        catchError(err => of(new bookActions.LoadBooksFail(err)))
      )
    )
  );

  @Effect()
  loadBook$: Observable<Action> = this.actions$.pipe(
    ofType<bookActions.LoadBook>(bookActions.BookActionTypes.LOAD_BOOK),
    mergeMap((action: bookActions.LoadBook) =>
      this.booksService.getBookById(action.payload).pipe(
        map((book: Book) => new bookActions.LoadBookSuccess(book)),
        catchError(err => of(new bookActions.LoadBookFail(err)))
      )
    )
  );

  @Effect()
  createBook$: Observable<Action> = this.actions$.pipe(
    ofType<bookActions.CreateBook>(bookActions.BookActionTypes.CREATE_BOOK),
    map((action: bookActions.CreateBook) => action.payload),
    mergeMap((book: Book) =>
      this.booksService.createBook(book).pipe(
        map((newBook: Book) => new bookActions.CreateBookSuccess(newBook)),
        catchError(err => of(new bookActions.CreateBookFail(err)))
      )
    )
  );

  @Effect()
  updateBook$: Observable<Action> = this.actions$.pipe(
    ofType<bookActions.UpdateBook>(bookActions.BookActionTypes.UPDATE_BOOK),
    map((action: bookActions.UpdateBook) => action.payload),
    mergeMap((book: Book) =>
      this.booksService.updateBook(book).pipe(
        map(
          (updateBook: Book) =>
            new bookActions.UpdateBookSuccess({
              id: updateBook.id,
              changes: updateBook
            })
        ),
        catchError(err => of(new bookActions.UpdateBookFail(err)))
      )
    )
  );

  @Effect()
  deleteBook$: Observable<Action> = this.actions$.pipe(
    ofType<bookActions.DeleteBook>(bookActions.BookActionTypes.DELETE_BOOK),
    map((action: bookActions.DeleteBook) => action.payload),
    mergeMap((id: number) =>
      this.booksService.deleteBook(id).pipe(
        map(() => new bookActions.DeleteBookSuccess(id)),
        catchError(err => of(new bookActions.DeleteBookFail(err)))
      )
    )
  );
}
