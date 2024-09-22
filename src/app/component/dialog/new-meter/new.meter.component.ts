import { Component, inject, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'new-meter-dialog',
	templateUrl: "./new.meter.component.html",
    styleUrls: ["./new.meter.component.scss"]
})
export class NewMeterComponent {
	activeModal = inject(NgbActiveModal);

    meterForm: FormGroup;

    constructor(private formBuilder: FormBuilder) {
        this.meterForm = this.formBuilder.group({
            roomNumber: ['', [Validators.required]],
            previousReading: ['', [Validators.required]],
            currentReading: ['', [Validators.required]],
            readingDate: ['', [Validators.required]],
            electricityBill: ['', [Validators.required]],
        })
    }

    saveRoom() {
        if(this.meterForm.valid) {
            const td = this.meterForm.value
            const meter = {
                roomNumber: td.roomNumber+"",
                previousReading: td.previousReading+"",
                currentReading: td.currentReading+"",
                readingDate: td.readingDate.year+"-"+td.readingDate.month+"-"+td.readingDate.day,
                electricityBill: td.electricityBill+"",
            }
            this.activeModal.close(meter);
        } else {
            this.meterForm.markAllAsTouched();
        }
    }
}