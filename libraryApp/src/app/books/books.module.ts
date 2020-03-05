import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { EffectsModule, Actions } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";

import { bookReducer } from "./state/book.reducer";
import { BookEffect } from "./state/book.effects";

import { BookComponent } from "./book/book.component";
import { AddBookComponent } from "./add-book/add-book.component";
import { EditBookComponent } from "./edit-book/edit-book.component";
import { BooksListComponent } from "./books-list/books-list.component";

import { BookFilterPipe } from "./book-filter.pipe";

const customerRoutes: Routes = [
  {
    path: "",
    component: BookComponent
  },
  { path: "editbook", component: EditBookComponent },
  { path: "addbook", component: AddBookComponent }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(customerRoutes),
    StoreModule.forFeature("books", bookReducer),
    EffectsModule.forFeature([BookEffect])
  ],
  declarations: [
    BookComponent,
    AddBookComponent,
    EditBookComponent,
    BooksListComponent,
    BookFilterPipe
  ]
})
export class BooksModule {}
