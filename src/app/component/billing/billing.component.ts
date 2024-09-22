import { DecimalPipe } from '@angular/common';
import {
  Component,
  inject,
  Input,
  OnInit,
  PipeTransform,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {
  ModalDismissReasons,
  NgbActiveModal,
  NgbDatepickerModule,
  NgbModal,
} from '@ng-bootstrap/ng-bootstrap';
import { debounceTime, map, Observable, startWith } from 'rxjs';
import { NewBillingComponent } from '../dialog/new-billing/new.billing.component';
 
interface Billing {
  payeeName: string;
  roomNumber: string;
  dateOfPayment: string;
  dateTillRent: string;
  payment: string;
  balance: string;
}

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss'],
})
export class BillingComponent implements OnInit {
  filterValue: string = 'all';

  private modalService = inject(NgbModal);

  closeResult = '';

  Billings: any = [
    {
      payeeName: "Firoj Kumar",
      roomNumber: "8968",
      dateOfPayment: '2023-10-31',
      dateTillRent: "2023-10-31",
      payment: "4433",
      balance: "22"
    },
  ];
  temp: any = this.Billings;

  filter = new FormControl('', { nonNullable: true });

  constructor(pipe: DecimalPipe) {
    this.filter.valueChanges.pipe(debounceTime(200)).subscribe((value) => {
      console.log(value);
      if (this.Billings.length == 0 || value.length == 0) {
        this.Billings = this.temp;
      } else {
        this.Billings = this.search(value);
      }
    });
  }

  ngOnInit(): void {}

  open() {
    const modalRef = this.modalService.open(NewBillingComponent);
    modalRef.closed.subscribe((billing) => {
      console.log(billing);
      if (billing) {
        this.Billings.push(billing);
        // this.temp.push(billing);
        console.log(this.Billings);
      }
    });
  }

  ngAfterViewInit() {}

  onSelectChange(event: any) {}

  getClasses(classes: any) {}

  onClick(filter: any) {}

  search(text: string) {
    return this.Billings.filter((billing: any) => {
        const term = text.toLowerCase();
        return (
            billing.payeeName.toLowerCase().includes(term) ||
            billing.roomNumber.toLowerCase().includes(term) ||
            billing.dateOfPayment.toLowerCase().includes(term) ||
            billing.dateTillRent.toLowerCase().includes(term) ||
            billing.payment.toLowerCase().includes(term) ||
            billing.balance.toLowerCase().includes(term) 
           
        );
    })
  }
}

