import { Component, inject, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'ngbd-modal-content',
	templateUrl: "./new.room.component.html",
    styleUrls: ["./new.room.component.scss"]
})
export class NewRoomComponent {
	activeModal = inject(NgbActiveModal);

	@Input() name!: string;

    roomForm: FormGroup;

    constructor(private formBuilder: FormBuilder) {
        this.roomForm = this.formBuilder.group({
            roomNumber: ['', Validators.required],
            availability: ['', Validators.required],
            price: ['', Validators.required],
            floor: ['', Validators.required],
            tenantName: ['', ],
            tenantContact: ['',],
        })
    }

    saveRoom() {
        if(this.roomForm.valid) {
            // console.log(this.roomForm.value);
            const room = this.roomForm.value;
            const newRoom = {
                roomNumber: room.roomNumber+"",
                price: room.price + "",
                availability:
                  room.availability.year +
                  '-' +
                  room.availability.month +
                  '-' +
                  room.availability.day,
                tenantName: room.tenantName,
                tenantContact: room.tenantContact+"",
                floor: room.floor+"",
              };
            this.activeModal.close(newRoom);
        } else {
            this.roomForm.markAllAsTouched();
        }
    }
}