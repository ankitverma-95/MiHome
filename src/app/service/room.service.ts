import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment.development";
import { HttpClient } from "@angular/common/http";
import { ErrorService } from "./error.service";
import { catchError } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class RoomService {

    private URL_ROOM = environment.apiUrl+"/room";

    constructor(private http: HttpClient, private errorService: ErrorService) {

    }

    getRoom() {
        return this.http.get(this.URL_ROOM).pipe(catchError(this.errorService.handleError))
    }

    addRoom(room: any) {
        return this.http.post(this.URL_ROOM+"/add", room).pipe(catchError(this.errorService.handleError))
    }
}