import { NgModule } from '@angular/core';
import { AsyncPipe, CommonModule, DecimalPipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbDatepickerModule, NgbHighlight, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { MeterComponent } from './meter.component';

@NgModule({
    declarations: [MeterComponent],
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
    exports: [MeterComponent],
    providers: [DecimalPipe],
})
export class MeterModule {}