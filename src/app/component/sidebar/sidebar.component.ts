import { Component } from "@angular/core";
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";
import { filter } from "rxjs";

@Component({
    selector: "app-sidebar",
    templateUrl: "./sidebar.component.html",
    styleUrls: ["./sidebar.component.scss"]
})
export class SidebarComponent {

    selectedMenu: string = 'rooms';


    constructor(private router: Router, private route: ActivatedRoute) {

    }

    ngOnInit() {

        this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        if(event.url == "/rooms") {
            this.selectedMenu = "rooms";
        }
      })
    }

    onMenuClick(url: string) {
        this.selectedMenu = url;
        this.router.navigate(["./", url])
        console.log(this.selectedMenu);
    }
}