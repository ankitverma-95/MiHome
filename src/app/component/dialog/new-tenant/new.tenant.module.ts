import { NgModule } from '@angular/core';
import { AsyncPipe, CommonModule, DecimalPipe } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgbDatepickerModule, NgbHighlight, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { NewTenantComponent } from './new.tenant.component';

@NgModule({
    declarations: [NewTenantComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgbDatepickerModule,
     ],
    exports: [NewTenantComponent],
    providers: [],
})
export class NewTenantModule {
    
}