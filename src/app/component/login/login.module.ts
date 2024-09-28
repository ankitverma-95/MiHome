import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        NgbToastModule
    ],
    exports: [
        LoginComponent
    ]
})
export class LoginModule {

 }