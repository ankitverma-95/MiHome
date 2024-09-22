import { Component, inject, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'new-maintenance-dialog',
	templateUrl: "./new.maintenance.component.html",
    styleUrls: ["./new.maintenance.component.scss"]
})
export class NewMaintenanceComponent {
	activeModal = inject(NgbActiveModal);

    maintenanceForm: FormGroup;

    constructor(private formBuilder: FormBuilder) {
        this.maintenanceForm = this.formBuilder.group({
            roomNumber: ['', [Validators.required]],
            payeeName: ['', [Validators.required]],
            amount: ['', [Validators.required]],
            description: ['', [Validators.required]],
        })
    }

    saveRoom() {
        if(this.maintenanceForm.valid) {
            const td = this.maintenanceForm.value
            const maintenance = {
                roomNumber: td.roomNumber+"",
                payeeName: td.payeeName+"",
                amount: td.amount+"",
                description: td.description,
            }
            this.activeModal.close(maintenance);
        } else {
            this.maintenanceForm.markAllAsTouched();
        }
    }
}