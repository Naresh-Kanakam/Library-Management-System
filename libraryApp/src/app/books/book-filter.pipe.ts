import { PipeTransform, Pipe } from "@angular/core";
import { Book } from "./book.model";

@Pipe({
  name: "filterBook"
})
export class BookFilterPipe implements PipeTransform {
  transform(books$: Book[], searchBook: string): Book[] {
    if (!books$ || !searchBook) {
      return books$;
    }

    return books$.filter(
      book =>
        book.bookName.toLowerCase().indexOf(searchBook.toLowerCase()) !== -1
    );
  }
}
