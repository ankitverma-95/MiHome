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

  Billings: any = [{
    "roomNumber": "1",
    "payeeName": "Emalee Ciobotaro",
    "dateOfPayment": "2018-07-29",
    "dateTillRent": "6/18/2024",
    "payment": "386",
    "balance": "67924"
  }, {
    "roomNumber": "2",
    "payeeName": "Pennie Skeermer",
    "dateOfPayment": "2021-02-15",
    "dateTillRent": "11/1/2023",
    "payment": "486",
    "balance": "8"
  }, {
    "roomNumber": "3",
    "payeeName": "Prissie Halladay",
    "dateOfPayment": "2017-06-07",
    "dateTillRent": "5/25/2024",
    "payment": "700",
    "balance": "50119"
  }, {
    "roomNumber": "4",
    "payeeName": "Rheta Ulyet",
    "dateOfPayment": "2021-09-06",
    "dateTillRent": "9/7/2024",
    "payment": "83729",
    "balance": "53498"
  }, {
    "roomNumber": "5",
    "payeeName": "Wright Mowat",
    "dateOfPayment": "2017-11-21",
    "dateTillRent": "2/3/2024",
    "payment": "150",
    "balance": "5"
  }, {
    "roomNumber": "6",
    "payeeName": "Corri Mosconi",
    "dateOfPayment": "2018-12-21",
    "dateTillRent": "7/3/2024",
    "payment": "10",
    "balance": "0686"
  }, {
    "roomNumber": "7",
    "payeeName": "Harley Hazeltine",
    "dateOfPayment": "2016-07-01",
    "dateTillRent": "4/19/2024",
    "payment": "5",
    "balance": "68"
  }, {
    "roomNumber": "8",
    "payeeName": "Guthry Bratten",
    "dateOfPayment": "2019-06-12",
    "dateTillRent": "9/2/2024",
    "payment": "6",
    "balance": "7526"
  }, {
    "roomNumber": "9",
    "payeeName": "Danny Szwarc",
    "dateOfPayment": "2012-01-27",
    "dateTillRent": "10/20/2023",
    "payment": "8",
    "balance": "6371"
  }, {
    "roomNumber": "10",
    "payeeName": "Morganica Wardhaw",
    "dateOfPayment": "2023-09-18",
    "dateTillRent": "10/21/2023",
    "payment": "0211",
    "balance": "1"
  },
  {
    "roomNumber": "33",
    "payeeName": "Danny Szwarc",
    "dateOfPayment": "2012-01-27",
    "dateTillRent": "10/20/2023",
    "payment": "83",
    "balance": "6371"
  }, {
    "roomNumber": "20",
    "payeeName": "Morganica Wardhaw",
    "dateOfPayment": "2023-09-18",
    "dateTillRent": "10/21/2023",
    "payment": "0211",
    "balance": "122"
  }
]
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

