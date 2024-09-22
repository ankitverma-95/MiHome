import { NgModule } from '@angular/core';
import { AsyncPipe, CommonModule, DecimalPipe } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgbDatepickerModule, NgbHighlight, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { NewRoomComponent } from './new.room.component';

@NgModule({
    declarations: [NewRoomComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgbDatepickerModule,
     ],
    exports: [NewRoomComponent],
    providers: [],
})
export class NewRoomModule {
    
}