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
import { NewMaintenanceComponent } from '../dialog/new-maintenance/new.maintenance.component';


@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.scss'],
})
export class MaintenanceComponent implements OnInit {
  filterValue: string = 'all';

  private modalService = inject(NgbModal);

  closeResult = '';

  Maintenances: any = [
    {
        payeeName: "Ankit Verma",
        roomNumber: "8968",
        description: 'Pay room paint',
        amount: '330',
    },
  ];
  temp: any = this.Maintenances;

  filter = new FormControl('', { nonNullable: true });

  constructor() {
    this.filter.valueChanges.pipe(debounceTime(200)).subscribe((value) => {
      console.log(value);
      if (this.Maintenances.length == 0 || value.length == 0) {
        this.Maintenances = this.temp;
      } else {
        this.Maintenances = this.search(value);
      }
    });
  }

  ngOnInit(): void {}

  open() {
    const modalRef = this.modalService.open(NewMaintenanceComponent);
    modalRef.closed.subscribe((maintenance) => {
      console.log(maintenance);
      if (maintenance) {
        this.Maintenances.push(maintenance);
        // this.temp.push(billing);
        console.log(this.Maintenances);
      }
    });
  }

  ngAfterViewInit() {}

  onSelectChange(event: any) {}

  getClasses(classes: any) {}

  onClick(filter: any) {}

  search(text: string) {
    return this.Maintenances.filter((maintenance: any) => {
        const term = text.toLowerCase();
        return (
            maintenance.roomNumber.toLowerCase().includes(term) ||
            maintenance.payeeName.toLowerCase().includes(term) ||
            maintenance.description.toLowerCase().includes(term) ||
            maintenance.amount.toLowerCase().includes(term)          
        );
    })
  }
}

