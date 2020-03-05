import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Store, State, select } from "@ngrx/store";
import * as bookActions from "../state/book.actions";
import * as fromBook from "../state/book.reducer";
import { Book } from "../book.model";
import { Router } from "@angular/router";

@Component({
  selector: "app-add-book",
  templateUrl: "./add-book.component.html",
  styleUrls: ["./add-book.component.css"]
})
export class AddBookComponent implements OnInit {
  bookForm: FormGroup;
  submitted = false;

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
      count: ["", Validators.required]
    });
  }

  get f() {
    return this.bookForm.controls;
  }

  createBook() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.bookForm.invalid) {
      return;
    } else {
      const newBook: Book = {
        bookName: this.bookForm.get("bookName").value,
        authorName: this.bookForm.get("authorName").value,
        description: this.bookForm.get("description").value,
        count: this.bookForm.get("count").value
      };

      this.store.dispatch(new bookActions.CreateBook(newBook));

      this.bookForm.reset();

      this.router.navigate(["/books"]);
    }
  }
}
