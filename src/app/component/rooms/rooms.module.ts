import { NgModule } from '@angular/core';
import { AsyncPipe, CommonModule, DecimalPipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RoomsComponent } from './rooms.component';
import { NgbDatepickerModule, NgbHighlight, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    declarations: [RoomsComponent],
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
    exports: [RoomsComponent],
    providers: [DecimalPipe],
})
export class RoomsModule {}