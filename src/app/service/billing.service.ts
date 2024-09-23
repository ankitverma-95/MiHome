import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment.development";
import { HttpClient } from "@angular/common/http";
import { ErrorService } from "./error.service";
import { catchError } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class BillingService {

    private URL_BILLING = environment.apiUrl+"/billing";

    constructor(private http: HttpClient, private errorService: ErrorService) {

    }

    getBilling() {
        return this.http.get(this.URL_BILLING).pipe(catchError(this.errorService.handleError))
    }

    addBilling(billing: any) {
        return this.http.post(this.URL_BILLING+"/add", billing).pipe(catchError(this.errorService.handleError))
    }
}