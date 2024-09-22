import { Component, SimpleChanges } from '@angular/core';
import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { CommonModule, DecimalPipe } from '@angular/common';
import { HeaderModule } from './component/header/header.module';
import { SidebarModule } from './component/sidebar/sidebar.module';
import { RoomsModule } from './component/rooms/rooms.module';
import { DialogModule } from './component/dialog/dialog.module';
import { TenantModule } from './component/tenant/tenant.module';
import { BillingModule } from './component/billing/billing.module';
import { MeterModule } from './component/meter/meter.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    HeaderModule,
    SidebarModule,
    RoomsModule,
    TenantModule,
    BillingModule,
    MeterModule,
    DialogModule,
    DecimalPipe
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  selectedListItem: string = 'dashboard';
  opened = true;
  currRoute: Router;

  constructor(private router: Router) {
    this.currRoute = router;
  }

  ngOnInit(): void {
    // this.authService.getCompanyList().subscribe(
    //   (companies: any) => {
    //     if (companies?.length > 0) {
    //       this.router.navigate(['./dashboard']);
    //     } else {
    //       this.router.navigate(['./auth/institute/new']);
    //     }
    //   },
    //   (err) => {
    //     console.error(err);
    //   }
    // );
    // this.router.events
    //   .pipe(filter((event) => event instanceof NavigationEnd))
    //   .subscribe((event: any) => {
    //     console.log('url>>', event.url);
    //     if(event.url == '/') {
    //       this.authService.getPrimaryProfile().subscribe((profile) => {
    //         this.authService.getCompanyList().subscribe(
    //           (companies: any) => {
    //             if (companies?.length > 0) {
    //               if(companies?.length == 1) {
    //                 localStorage.setItem(INSTITUTE_CODE,  companies[0].code);
    //                 this.router.navigate(['./dashboard']);
    //               } else {
    //                 this.router.navigate(['./auth/institute/select']);
    //               }
    //             } else {
    //               this.router.navigate(['./auth/institute/new']);
    //             }
    //           },
    //           (err) => {
    //             console.error(err);
    //           }
    //         );
    //       }, err => {
    //         console.error(err);
    //         if(err.error.status == 0) {
    //           // this.router.navigate(['./auth/login'])
    //         } else if(err.error.status !== 401) {
    //           this.router.navigate(['./auth/profile/new'])
    //         }
    //       })
    //     }
    //     if (window.innerWidth < 600) {
    //       this.opened = false;
    //     } else {
    //       if (
    //         event.url.includes('/detail') ||
    //         event.url.includes('/new') ||
    //         this.router.url.includes('auth')
    //       ) {
    //         this.opened = false;
    //       } else {
    //         this.opened = true;
    //       }
    //     }
    //   });
  }

  redirectToDetails(pageUrl: string) {
    this.selectedListItem = pageUrl;
    this.router.navigate([pageUrl]);
  }
}
