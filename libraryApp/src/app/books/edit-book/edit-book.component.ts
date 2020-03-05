import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";
import { Router } from "@angular/router";

import { Observable } from "rxjs";

import * as bookActions from "../state/book.actions";
import * as fromBook from "../state/book.reducer";
import { Book } from "../book.model";

@Component({
  selector: "app-edit-book",
  templateUrl: "./edit-book.component.html",
  styleUrls: ["./edit-book.component.css"]
})
export class EditBookComponent implements OnInit {
  bookForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private store: Store<fromBook.AppState>,
    private router: Router
  ) {}

  ngOnInit() {
    this.bookForm = this.fb.group({
      bookName: ["", Validators.required],
      authorName: ["", Validators.required],
      description: ["", Validators.required],
      count: ["", Validators.required],
      id: null
    });

    const book$: Observable<Book> = this.store.select(fromBook.getCurrentBook);

    book$.subscribe(currentBook => {
      if (currentBook) {
        this.bookForm.patchValue({
          bookName: currentBook.bookName,
          authorName: currentBook.authorName,
          description: currentBook.description,
          count: currentBook.count,
          id: currentBook.id
        });
      }
    });
  }

  updateBook() {
    const updatedBook: Book = {
      bookName: this.bookForm.get("bookName").value,
      authorName: this.bookForm.get("authorName").value,
      description: this.bookForm.get("description").value,
      count: this.bookForm.get("count").value,
      id: this.bookForm.get("id").value
    };

    this.store.dispatch(new bookActions.UpdateBook(updatedBook));

    this.router.navigate(["/books"]);
  }
}
