import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "app-sidebar",
    templateUrl: "./sidebar.component.html",
    styleUrls: ["./sidebar.component.scss"]
})
export class SidebarComponent {

    selectedMenu!: string;
    
    constructor(private router: Router) {

    }

    ngOnInit() {

    }

    onMenuClick(url: string) {
        this.selectedMenu = url;
        this.router.navigate(["./", url])
        console.log(this.selectedMenu);
    }
}