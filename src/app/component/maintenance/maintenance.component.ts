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

  Maintenances: any = [{
    "payeeName": "Frans Haliburn",
    "roomNumber": "1",
    "description": "Digital enterostomy exam",
    "amount": "126"
  }, {
    "payeeName": "Claudell Pratten",
    "roomNumber": "2",
    "description": "Multisource radiosurgery",
    "amount": "85570"
  }, {
    "payeeName": "Kaiser Albarez",
    "roomNumber": "3",
    "description": "Testicular les destruct",
    "amount": "15576"
  }, {
    "payeeName": "Oswald Critchell",
    "roomNumber": "4",
    "description": "Perirectal excision",
    "amount": "5548"
  }, {
    "payeeName": "Farand Heales",
    "roomNumber": "5",
    "description": "Decompression chamber",
    "amount": "37502"
  }, {
    "payeeName": "Leodora Arkwright",
    "roomNumber": "6",
    "description": "Chest cage bone biopsy",
    "amount": "93260"
  }, {
    "payeeName": "Olin Vasilyevski",
    "roomNumber": "7",
    "description": "Transureth prostatectomy",
    "amount": "7"
  }, {
    "payeeName": "Frasquito Creavin",
    "roomNumber": "8",
    "description": "Muscle trnsfr/transplant",
    "amount": "303"
  }, {
    "payeeName": "Lidia Relton",
    "roomNumber": "9",
    "description": "Relaxation of scar",
    "amount": "65777"
  }, {
    "payeeName": "Chrisse Gluyas",
    "roomNumber": "10",
    "description": "Hemilaryngectomy",
    "amount": "51251"
  }, {
    "payeeName": "Saxe Prinn",
    "roomNumber": "11",
    "description": "Lobectomy of lung NEC",
    "amount": "1"
  }, {
    "payeeName": "Eolande Kubecka",
    "roomNumber": "12",
    "description": "Epiglottidectomy",
    "amount": "14"
  }, {
    "payeeName": "Amalita Zylbermann",
    "roomNumber": "13",
    "description": "Dx ultrasound-thorax NEC",
    "amount": "72"
  }, {
    "payeeName": "Vonny Senton",
    "roomNumber": "14",
    "description": "Construction ear auricle",
    "amount": "9512"
  }, {
    "payeeName": "Skell De la Eglise",
    "roomNumber": "15",
    "description": "Perc abltn lung les/tiss",
    "amount": "6353"
  }];

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

