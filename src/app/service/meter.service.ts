import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment.development";
import { HttpClient } from "@angular/common/http";
import { ErrorService } from "./error.service";
import { catchError } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class MeterService {

    private URL_METER = environment.apiUrl+"/meter";

    constructor(private http: HttpClient, private errorService: ErrorService) {

    }

    getMeter() {
        return this.http.get(this.URL_METER).pipe(catchError(this.errorService.handleError))
    }

    addMeter(meter: any) {
        return this.http.post(this.URL_METER+"/add", meter).pipe(catchError(this.errorService.handleError))
    }
}