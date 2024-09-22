import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NewRoomModule } from './new-room/new.room.module';
import { NewTenantModule } from './new-tenant/new.tenant.module';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        NewRoomModule,
        NewTenantModule
     ],
    exports: [],
    providers: [],
})
export class DialogModule {}