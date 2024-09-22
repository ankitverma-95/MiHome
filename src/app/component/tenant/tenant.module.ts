import { NgModule } from '@angular/core';
import { AsyncPipe, CommonModule, DecimalPipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbDatepickerModule, NgbHighlight, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { TenantComponent } from './tenant.component';

@NgModule({
    declarations: [TenantComponent],
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
    exports: [TenantComponent],
    providers: [DecimalPipe],
})
export class TenantModule {}