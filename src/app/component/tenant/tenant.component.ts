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
import { NewTenantComponent } from '../dialog/new-tenant/new.tenant.component';

interface Tenant {
  name: string;
  roomNumber: number;
  contact: number;
  dob: string;
  aadharNumber: number;
  rent: number;
}

@Component({
  selector: 'app-tenant',
  templateUrl: './tenant.component.html',
  styleUrls: ['./tenant.component.scss'],
})
export class TenantComponent implements OnInit {
  filterValue: string = 'all';

  private modalService = inject(NgbModal);

  closeResult = '';

  Tenants: any =[{
    "roomNumber": "1",
    "rent": "3325",
    "dob": "1994-11-14",
    "name": "Griffie Howley",
    "contact": "2564756131",
    "aadharNumber": "6138792912"
  }, {
    "roomNumber": "2",
    "rent": "7941",
    "dob": "1985-06-08",
    "name": "Abrahan Haughey",
    "contact": "2468358880",
    "aadharNumber": "6889001346"
  }, {
    "roomNumber": "3",
    "rent": "9941",
    "dob": "1989-12-31",
    "name": "Meredith Stairmond",
    "contact": "3929310872",
    "aadharNumber": "2602965812"
  }, {
    "roomNumber": "4",
    "rent": "9324",
    "dob": "2001-01-21",
    "name": "Madeleine Petrolli",
    "contact": "3658759836",
    "aadharNumber": "8772402660"
  }, {
    "roomNumber": "5",
    "rent": "2025",
    "dob": "1981-07-18",
    "name": "Dona Clay",
    "contact": "8027553946",
    "aadharNumber": "6902921326"
  }, {
    "roomNumber": "6",
    "rent": "1019",
    "dob": "1998-06-10",
    "name": "Austin Weepers",
    "contact": "0852759290",
    "aadharNumber": "2583413813"
  }, {
    "roomNumber": "7",
    "rent": "2680",
    "dob": "1993-03-16",
    "name": "Ainslee Shedd",
    "contact": "3824857251",
    "aadharNumber": "7444082030"
  }, {
    "roomNumber": "8",
    "rent": "2108",
    "dob": "1991-10-14",
    "name": "Agace Livezley",
    "contact": "3301791336",
    "aadharNumber": "8411974375"
  }, {
    "roomNumber": "9",
    "rent": "1487",
    "dob": "1992-10-13",
    "name": "Thaxter Elby",
    "contact": "6368156287",
    "aadharNumber": "2887606204"
  }, {
    "roomNumber": "10",
    "rent": "7858",
    "dob": "1986-03-15",
    "name": "Ken Reynolds",
    "contact": "3551319146",
    "aadharNumber": "1345116942"
  }, {
    "roomNumber": "12",
    "rent": "8730",
    "dob": "1995-01-17",
    "name": "Lucinda Beernaert",
    "contact": "8386791543",
    "aadharNumber": "2534404784"
  }, {
    "roomNumber": "13",
    "rent": "2192",
    "dob": "1991-04-06",
    "name": "Ian Giamuzzo",
    "contact": "8590456005",
    "aadharNumber": "4173550871"
  },
  {
    "roomNumber": "20",
    "rent": "1487",
    "dob": "1992-10-13",
    "name": "Thaxter Elby",
    "contact": "6368156287",
    "aadharNumber": "2887606204"
  }, {
    "roomNumber": "21",
    "rent": "7858",
    "dob": "1986-03-15",
    "name": "Ken Reynolds",
    "contact": "3551319146",
    "aadharNumber": "1345116942"
  },]
  temp: any = this.Tenants;

  filter = new FormControl('', { nonNullable: true });

  constructor(pipe: DecimalPipe) {
    this.filter.valueChanges.pipe(debounceTime(200)).subscribe((value) => {
      console.log(value);
      if (this.Tenants.length == 0 || value.length == 0) {
        this.Tenants = this.temp;
      } else {
        this.Tenants = this.search(value);
      }
    });
  }

  ngOnInit(): void {}

  open() {
    const modalRef = this.modalService.open(NewTenantComponent);
    modalRef.closed.subscribe((tenant) => {
      console.log(tenant);
      if (tenant) {
        this.Tenants.push(tenant);
        // this.temp.push(tenant);
        console.log(this.Tenants);
      }
    });
  }

  ngAfterViewInit() {}

  onSelectChange(event: any) {}

  getClasses(classes: any) {}

  onClick(filter: any) {}

  search(text: string) {
    return this.Tenants.filter((tenant: any) => {
        const term = text.toLowerCase();
        return (
            tenant.name.toLowerCase().includes(term) ||
            tenant.roomNumber.toLowerCase().includes(term) ||
            tenant.contact.toLowerCase().includes(term) ||
            tenant.dob.toLowerCase().includes(term) ||
            tenant.aadharNumber.toLowerCase().includes(term) ||
            tenant.rent.toLowerCase().includes(term)
        );
    })
  }
}

