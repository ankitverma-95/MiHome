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
import { NewRoomComponent } from '../dialog/new-room/new.room.component';

// interface Room {
//   roomNumber: number;
//   price: number;
//   availability: string;
//   tenantName: string;
//   tenantContact: string;
//   floor: string;
// }

// const ROOMS: Room[] = [
//   {
//     roomNumber: 1,
//     price: 8968,
//     availability: "2023-10-31",
//     tenantName: "dbunting0@php.net",
//     tenantContact: "1331500427",
//     floor: "Second Floor"
//   }, {
//     "roomNumber": 2,
//     "price": 1880,
//     "availability": "2023-12-06",
//     "tenantName": "khowgate1@scientificamerican.com",
//     "tenantContact": "7668236414",
//     "floor": "Ground Floor"
//   }, {
//     "roomNumber": 3,
//     "price": 6840,
//     "availability": "2024-01-01",
//     "tenantName": "adebow2@godaddy.com",
//     "tenantContact": "1767359195",
//     "floor": "First floor"
//   }, {
//     "roomNumber": 4,
//     "price": 1767,
//     "availability": "2024-08-08",
//     "tenantName": "mhumberstone3@weather.com",
//     "tenantContact": "7217426421",
//     "floor": "Second Floor"
//   }, {
//     "roomNumber": 5,
//     "price": 7030,
//     "availability": "2024-06-29",
//     "tenantName": "mmcpeake4@china.com.cn",
//     "tenantContact": "1607283395",
//     "floor": "Third Floor"
//   }, {
//     "roomNumber": 6,
//     "price": 8637,
//     "availability": "2024-06-24",
//     "tenantName": "gcham5@deliciousdays.com",
//     "tenantContact": "1660001889",
//     "floor": "First floor"
//   }, {
//     "roomNumber": 7,
//     "price": 3745,
//     "availability": "2023-12-20",
//     "tenantName": "egribble6@biglobe.ne.jp",
//     "tenantContact": "6409654561",
//     "floor": "Ground Floor"
//   }, {
//     "roomNumber": 8,
//     "price": 7767,
//     "availability": "2023-11-17",
//     "tenantName": "hgidden7@geocities.jp",
//     "tenantContact": "3759984800",
//     "floor": "Third Floor"
//   }, {
//     "roomNumber": 9,
//     "price": 1694,
//     "availability": "2023-12-16",
//     "tenantName": "ebalasini8@comcast.net",
//     "tenantContact": "9639327948",
//     "floor": "Third Floor"
//   }, {
//     "roomNumber": 10,
//     "price": 5740,
//     "availability": "2024-02-13",
//     "tenantName": "mgoodred9@youtube.com",
//     "tenantContact": "8340753584",
//     "floor": "Third Floor"
//   }, {
//     "roomNumber": 11,
//     "price": 4359,
//     "availability": "2024-01-06",
//     "tenantName": "bwoolleya@cnbc.com",
//     "tenantContact": "8130105373",
//     "floor": "First floor"
//   }, {
//     "roomNumber": 12,
//     "price": 5471,
//     "availability": "2024-08-23",
//     "tenantName": "wsallisb@sohu.com",
//     "tenantContact": "7211290811",
//     "floor": "First floor"
//   }

// ];

// function search(text: string, pipe: PipeTransform): Room[] {
// 	return ROOMS.filter((room) => {
// 		const term = text.toLowerCase();
// 		return (
// 			room.tenantName.toLowerCase().includes(term) ||
// 			room.floor.toLowerCase().includes(term) ||
// 			pipe.transform(room.roomNumber).includes(term) ||
//       room.tenantContact.includes(term) ||
// 			// room.price.includes(term) ||
// 			room.availability.includes(term)
// 		);
// 	});
// }

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent implements OnInit {
  filterValue: string = 'all';

  private modalService = inject(NgbModal);

  closeResult = '';

  Rooms: any = [
    {
      roomNumber: "1",
      price: "8968",
      availability: '2023-10-31',
      tenantName: 'dbunting0@php.net',
      tenantContact: '1331500427',
      floor: 'Second Floor',
    },
  ];
  temp: any = this.Rooms;

  filter = new FormControl('', { nonNullable: true });

  constructor(pipe: DecimalPipe) {
    this.filter.valueChanges.pipe(debounceTime(200)).subscribe((value) => {
      console.log(value);
      if (this.Rooms.length == 0 || value.length == 0) {
        this.Rooms = this.temp;
      }
      this.Rooms = this.search(value, pipe);
    });
  }

  ngOnInit(): void {}

  open() {
    const modalRef = this.modalService.open(NewRoomComponent);
    modalRef.closed.subscribe((room) => {
      console.log(room);
      if (room) {
        this.Rooms.push(room);
        // this.temp.push(newRoom);
        console.log(this.Rooms);
      }
    });
  }

  ngAfterViewInit() {}

  onSelectChange(event: any) {}

  getClasses(classes: any) {}

  onClick(filter: any) {}

  search(text: string, pipe: PipeTransform) {
    const term = text.toLowerCase();
    return this.Rooms.filter((room: any) => {
      return (
        room.tenantName.toLowerCase().includes(term) ||
        room.floor.toLowerCase().includes(term) ||
        room.roomNumber.toLowerCase().includes(term) ||
        room.tenantContact.toLowerCase().includes(term) ||
        room.availability.toLowerCase().includes(term) ||
        room.price.toLowerCase().includes(term)
      );
    });
  }
}
