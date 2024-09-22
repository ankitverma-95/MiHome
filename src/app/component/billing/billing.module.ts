import { NgModule } from '@angular/core';
import { AsyncPipe, CommonModule, DecimalPipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbDatepickerModule, NgbHighlight, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { BillingComponent } from './billing.component';

@NgModule({
    declarations: [BillingComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgbDatepickerModule,
        NgbHighlight,
        DecimalPipe,
        AsyncPipe,
        NgbPaginationModule,
     ],
    exports: [BillingComponent],
    providers: [DecimalPipe],
})
export class BillingModule {}