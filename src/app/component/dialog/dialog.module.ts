import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NewRoomModule } from './new-room/new.room.module';
import { NewTenantModule } from './new-tenant/new.tenant.module';
import { NewBillingModule } from './new-billing/new.billing.module';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        NewRoomModule,
        NewTenantModule,
        NewBillingModule,
     ],
    exports: [],
    providers: [],
})
export class DialogModule {}