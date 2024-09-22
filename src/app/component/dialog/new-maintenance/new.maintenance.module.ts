import { NgModule } from '@angular/core';
import { AsyncPipe, CommonModule, DecimalPipe } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgbDatepickerModule, NgbHighlight, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { NewMaintenanceComponent } from './new.maintenance.component';

@NgModule({
    declarations: [NewMaintenanceComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgbDatepickerModule,
     ],
    exports: [NewMaintenanceComponent],
    providers: [],
})
export class NewMaintenanceModule {
    
}