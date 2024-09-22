import { Routes } from '@angular/router';
import { RoomsComponent } from './component/rooms/rooms.component';
import { TenantComponent } from './component/tenant/tenant.component';
import { BillingComponent } from './component/billing/billing.component';
import { MeterComponent } from './component/meter/meter.component';
import { MaintenanceComponent } from './component/maintenance/maintenance.component';

export const routes: Routes = [
    // { path: 'auth/login', component: LoginComponent, pathMatch: 'full' },
    // { path: 'auth/profile/new', component: NewProfileComponent, pathMatch: 'full' },
    // { path: 'auth/institute/new', component: NewInstituteComponent, pathMatch: 'full' },
    // { path: 'auth/institute/select', component: SelectInstituteComponent, pathMatch: 'full' },
    // { path: 'dashboard', component: DashboardComponent, },
    { path: 'rooms', component: RoomsComponent},
    { path: 'tenants', component: TenantComponent},
    { path: 'billings', component: BillingComponent},
    { path: 'meters', component: MeterComponent},
    { path: 'maintenances', component: MaintenanceComponent},
    // { path: 'staff/new', component: NewStaffComponent},
    // { path: 'staff', component: StaffComponent},
    // { path: 'staff/detail/:staffId', component: StaffDetailComponent},
    // { path: 'session', component: SessionComponent},
    // { path: 'session/detail/:sessionId', component: SessionDetailsComponent},
    // { path: 'event', component: EventComponent},
    // { path: 'event/new', component: NewEventComponent},
    // { path: 'event/:eventId/register/new', component: EventRegisterComponent},
    // { path: 'event/:eventId/register/details', component: EventRegisterDetailsComponent},
    // { path: 'event/registration/detail/:eventId', component: EventRegistrationsComponenet}, // return registation tables
    // { path: 'event/detail/:eventId', component: EventDetailsComponent},
    // { path: 'notice', component: NoticeComponent},
    // { path: 'notice/new', component: NewNoticeComponent},
    // { path: 'notice/detail/:noticeId', component: NoticeDetailsComponent},
    // { path: '**', component: NotFoundComponent},
];
