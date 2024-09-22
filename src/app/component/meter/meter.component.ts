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
import { NewMeterComponent } from '../dialog/new-meter/new.meter.component';

interface Meter {
    roomNumber: string;
    previousReading: string;
    currentReading: string;
    readingDate: string;
    electricityBill: string;
}

@Component({
  selector: 'app-meter',
  templateUrl: './meter.component.html',
  styleUrls: ['./meter.component.scss'],
})
export class MeterComponent implements OnInit {
  filterValue: string = 'all';

  private modalService = inject(NgbModal);

  closeResult = '';

  Meters: any = [{
    "roomNumber": "1",
    "readingDate": "2005-06-06",
    "electricityBill": "446",
    "previousReading": "731",
    "currentReading": "96307"
  }, {
    "roomNumber": "2",
    "readingDate": "2020-10-30",
    "electricityBill": "96357",
    "previousReading": "739",
    "currentReading": "333"
  }, {
    "roomNumber": "3",
    "readingDate": "2023-01-29",
    "electricityBill": "43528",
    "previousReading": "17",
    "currentReading": "78854"
  }, {
    "roomNumber": "4",
    "readingDate": "2016-01-12",
    "electricityBill": "09870",
    "previousReading": "05959",
    "currentReading": "64359"
  }, {
    "roomNumber": "5",
    "readingDate": "2009-02-24",
    "electricityBill": "295",
    "previousReading": "0",
    "currentReading": "3434"
  }, {
    "roomNumber": "6",
    "readingDate": "2012-05-31",
    "electricityBill": "7798",
    "previousReading": "1198",
    "currentReading": "1390"
  }, {
    "roomNumber": "7",
    "readingDate": "2009-08-25",
    "electricityBill": "3185",
    "previousReading": "76",
    "currentReading": "255"
  }, {
    "roomNumber": "8",
    "readingDate": "2008-03-28",
    "electricityBill": "23243",
    "previousReading": "13",
    "currentReading": "89700"
  }, {
    "roomNumber": "9",
    "readingDate": "2022-03-17",
    "electricityBill": "488",
    "previousReading": "371",
    "currentReading": "2599"
  }, {
    "roomNumber": "10",
    "readingDate": "2014-07-23",
    "electricityBill": "801",
    "previousReading": "42",
    "currentReading": "444"
  }, {
    "roomNumber": "11",
    "readingDate": "2016-09-02",
    "electricityBill": "51",
    "previousReading": "471",
    "currentReading": "31951"
  }, {
    "roomNumber": "12",
    "readingDate": "2012-02-12",
    "electricityBill": "3814",
    "previousReading": "04308",
    "currentReading": "83466"
  },]

  temp: any = this.Meters;

  filter = new FormControl('', { nonNullable: true });

  constructor(pipe: DecimalPipe) {
    this.filter.valueChanges.pipe(debounceTime(200)).subscribe((value) => {
      console.log(value);
      if (this.Meters.length == 0 || value.length == 0) {
        this.Meters = this.temp;
      } else {
        this.Meters = this.search(value);
      }
    });
  }

  ngOnInit(): void {}

  open() {
    const modalRef = this.modalService.open(NewMeterComponent);
    modalRef.closed.subscribe((meter) => {
      console.log(meter);
      if (meter) {
        this.Meters.push(meter);
        // this.temp.push(billing);
        console.log(this.Meters);
      }
    });
  }

  ngAfterViewInit() {}

  onSelectChange(event: any) {}

  getClasses(classes: any) {}

  onClick(filter: any) {}

  search(text: string) {
    return this.Meters.filter((meter: any) => {
        const term = text.toLowerCase();
        return (
            meter.roomNumber.toLowerCase().includes(term) ||
            meter.previousReading.toLowerCase().includes(term) ||
            meter.currentReading.toLowerCase().includes(term) ||
            meter.readingDate.toLowerCase().includes(term) ||
            meter.electricityBill.toLowerCase().includes(term) 
           
        );
    })
  }
}

