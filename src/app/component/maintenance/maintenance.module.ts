import { NgModule } from '@angular/core';
import { AsyncPipe, CommonModule, DecimalPipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbDatepickerModule, NgbHighlight, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { MaintenanceComponent } from './maintenance.component';

@NgModule({
    declarations: [MaintenanceComponent],
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
    exports: [MaintenanceComponent],
    providers: [DecimalPipe],
})
export class MaintenanceModule {}