import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  constructor(private router: Router) {}

  handleError = (error: HttpErrorResponse) => {
    if (error.status == 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
      this.router.navigate(['./login']);
    } else if (error.status == 401) {
      this.router.navigate(['./login']);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    // Return an observable with a user-facing error message.
    return throwError(
      () => {
        return {
          msg:'Something bad happened; please try again later.',
          error,
        }
      }
    );
  };
}
