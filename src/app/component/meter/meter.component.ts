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
import { MeterService } from '../../service/meter.service';

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

  Meters: any = [];

  temp: any = [];

  filter = new FormControl('', { nonNullable: true });

  constructor(pipe: DecimalPipe, private meterService: MeterService) { 
  }

  ngOnInit(): void {

    this.meterService.getMeter().subscribe((meter) => {
      this.Meters = meter;
      this.temp = meter;
    }, err => {
      console.error(err);
    });

    this.filter.valueChanges.pipe(debounceTime(200)).subscribe((value) => {
      console.log(value);
      if (this.Meters.length == 0 || value.length == 0) {
        this.Meters = this.temp;
      } else {
        this.Meters = this.search(value);
      }
    });
    
  }

  open() {
    const modalRef = this.modalService.open(NewMeterComponent);
    modalRef.closed.subscribe((meter) => {
      console.log(meter);
      if (meter) {
        this.Meters.push(meter);
        // this.temp.push(billing);
        console.log(this.Meters);
        this.meterService.addMeter(meter).subscribe((res) => {
         console.log(res); 
        }, err => {
          console.error(err);
        })
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

