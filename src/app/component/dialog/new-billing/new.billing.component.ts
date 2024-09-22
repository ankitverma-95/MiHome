import { Component, inject, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'new-billing-dialog',
	templateUrl: "./new.billing.component.html",
    styleUrls: ["./new.billing.component.scss"]
})
export class NewBillingComponent {
	activeModal = inject(NgbActiveModal);

    billingForm: FormGroup;

    constructor(private formBuilder: FormBuilder) {
        this.billingForm = this.formBuilder.group({
            payeeName: ['', [Validators.required]],
            roomNumber: ['', [Validators.required]],
            dateOfPayment: ['', [Validators.required]],
            dateTillRent: ['', [Validators.required]],
            payment: ['', [Validators.required]],
            balance: ['', [Validators.required]],
        })
    }

    saveRoom() {
        if(this.billingForm.valid) {
            const td = this.billingForm.value
            const billing = {
                payeeName: td.payeeName,
                roomNumber: td.roomNumber+"",
                dateOfPayment: td.dateOfPayment.year+"-"+td.dateOfPayment.month+"-"+td.dateOfPayment.day,
                dateTillRent: td.dateTillRent.year+"-"+td.dateTillRent.month+"-"+td.dateTillRent.day,
                payment: td.payment+"",
                balance: td.balance+"",
            }
            this.activeModal.close(billing);
        } else {
            this.billingForm.markAllAsTouched();
        }
    }
}