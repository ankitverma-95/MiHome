import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment.development";
import { HttpClient } from "@angular/common/http";
import { ErrorService } from "./error.service";
import { catchError } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private URL_USER = environment.apiUrl+"/user";

    constructor(private http: HttpClient, private errorService: ErrorService) {

    }

    login(user: any) {
        return this.http.post(this.URL_USER+"/login", user).pipe(catchError(this.errorService.handleError))
    }

    addUser(user: any) {
        return this.http.post(this.URL_USER+"/register", user).pipe(catchError(this.errorService.handleError));
    }
}