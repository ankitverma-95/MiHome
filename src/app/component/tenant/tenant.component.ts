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
import { TenantService } from '../../service/tenant.service';

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

  Tenants: any = [];
  temp: any = [];

  filter = new FormControl('', { nonNullable: true });

  constructor(pipe: DecimalPipe, private tenantService: TenantService) {
    
  }

  ngOnInit(): void {
    this.tenantService.getTenant().subscribe((tenant) => {
      this.Tenants = tenant;
      this.temp = tenant;
    }, err => {
      console.error(err);
    });
    
    this.filter.valueChanges.pipe(debounceTime(200)).subscribe((value) => {
      console.log(value);
      if (this.Tenants.length == 0 || value.length == 0) {
        this.Tenants = this.temp;
      } else {
        this.Tenants = this.search(value);
      }
    });
  }

  open() {
    const modalRef = this.modalService.open(NewTenantComponent);
    modalRef.closed.subscribe((tenant) => {
      console.log(tenant);
      if (tenant) {
        this.Tenants.push(tenant);
        // this.temp.push(tenant);
        console.log(this.Tenants);
        this.tenantService.addTenant(tenant).subscribe((res) => {
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

