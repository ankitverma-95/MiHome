import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment.development";
import { HttpClient } from "@angular/common/http";
import { ErrorService } from "./error.service";
import { catchError } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class TenantService {

    private URL_TENANT = environment.apiUrl+"/tenant";

    constructor(private http: HttpClient, private errorService: ErrorService) {

    }

    getTenant() {
        return this.http.get(this.URL_TENANT).pipe(catchError(this.errorService.handleError))
    }

    addTenant(tenant: any) {
        return this.http.post(this.URL_TENANT+"/add", tenant).pipe(catchError(this.errorService.handleError));
    }
}