import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment.development";
import { HttpClient } from "@angular/common/http";
import { ErrorService } from "./error.service";
import { catchError } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class MaintenanceService {

    private URL_MAINTENANCE = environment.apiUrl+"/maintenance";

    constructor(private http: HttpClient, private errorService: ErrorService) {

    }

    getMaintenance() {
        return this.http.get(this.URL_MAINTENANCE).pipe(catchError(this.errorService.handleError))
    }

    addMaintenance(maintenance: any) {
        return this.http.post(this.URL_MAINTENANCE+"/add", maintenance).pipe(catchError(this.errorService.handleError))
    }
}