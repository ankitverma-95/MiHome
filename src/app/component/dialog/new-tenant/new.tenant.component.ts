import { Component, inject, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'new-tenant-dialog',
	templateUrl: "./new.tenant.component.html",
    styleUrls: ["./new.tenant.component.scss"]
})
export class NewTenantComponent {
	activeModal = inject(NgbActiveModal);

    tenantForm: FormGroup;

    constructor(private formBuilder: FormBuilder) {
        this.tenantForm = this.formBuilder.group({
            name: ['', [Validators.required]],
            roomNumber: ['', [Validators.required]],
            contact: ['', [Validators.required]],
            dob: ['', [Validators.required]],
            aadharNumber: ['', [Validators.required]],
            rent: ['', [Validators.required]],
        })
    }

    saveRoom() {
        if(this.tenantForm.valid) {
            const td = this.tenantForm.value
            const tenant = {
                name: td.name,
                roomNumber: td.roomNumber+"",
                contact: td.contact+"",
                dob: td.dob.year+"-"+td.dob.month+"-"+td.dob.day,
                aadharNumber: td.aadharNumber+"",
                rent: td.rent+"",
            }
            this.activeModal.close(tenant);
        } else {
            this.tenantForm.markAllAsTouched();
        }
    }
}