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
import { RoomService } from '../../service/room.service';


@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent implements OnInit {
  filterValue: string = 'all';

  private modalService = inject(NgbModal);

  closeResult = '';

  Rooms: any = [];
  
  temp: any = [];

  filter = new FormControl('', { nonNullable: true });

  constructor(pipe: DecimalPipe, private roomService: RoomService) {}

  ngOnInit(): void {
    this.roomService.getRoom().subscribe((rooms) => {
      this.Rooms = rooms;
      this.temp = rooms;
    }, err => {
      console.error(err);
    })

    this.filter.valueChanges.pipe(debounceTime(200)).subscribe((value) => {
      console.log(value);
      if (this.Rooms.length == 0 || value.length == 0) {
        this.Rooms = this.temp;
      }
      this.Rooms = this.search(value);
    });

  }

  open() {
    const modalRef = this.modalService.open(NewRoomComponent);
    modalRef.closed.subscribe((room) => {
      console.log(room);
      if (room) {
        this.Rooms.push(room);
        // this.temp.push(newRoom);
        console.log(this.Rooms);
        this.roomService.addRoom(room).subscribe((res) => {
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
