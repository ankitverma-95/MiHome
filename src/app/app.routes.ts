import { Routes } from '@angular/router';
import { RoomsComponent } from './component/rooms/rooms.component';
import { TenantComponent } from './component/tenant/tenant.component';
import { BillingComponent } from './component/billing/billing.component';
import { MeterComponent } from './component/meter/meter.component';
import { MaintenanceComponent } from './component/maintenance/maintenance.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent, pathMatch: 'full' },
    { path: 'register', component: RegisterComponent, pathMatch: 'full' },
    { path: 'rooms', component: RoomsComponent},
    { path: 'tenants', component: TenantComponent},
    { path: 'billings', component: BillingComponent},
    { path: 'meters', component: MeterComponent},
    { path: 'maintenances', component: MaintenanceComponent}, 
];
