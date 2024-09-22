import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NewRoomModule } from './new-room/new.room.module';
import { NewTenantModule } from './new-tenant/new.tenant.module';
import { NewBillingModule } from './new-billing/new.billing.module';
import { NewMeterModule } from './new-meter/new.meter.module';
import { NewMaintenanceModule } from './new-maintenance/new.maintenance.module';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        NewRoomModule,
        NewTenantModule,
        NewBillingModule,
        NewMeterModule,
        NewMaintenanceModule
     ],
    exports: [],
    providers: [],
})
export class DialogModule {}