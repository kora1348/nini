import { Component } from "@angular/core";
import { first } from "rxjs/operators";

import { User } from "@app/_models";
import { AuthenticationService, UserService } from "@app/_services";
import { Router } from "@angular/router";
import { Menu } from "./types/menu";

@Component({
  selector: "app-online",
  templateUrl: "./online.component.html",
  styleUrls: ["./online.component.css"],
})
export class OnlineComponent {
  loading = false;
  users: User[];
  user: User;

  showSideBar: boolean = false;

  menus: Menu[] = [
    {
      name: "Administration",
      iconClass: "fas fa-desktop",
      active: false,
      submenu: [
        {
          name: "Portfolio",
          url: "/administration/portfolio",
        },
      ],
    },
  ];

  constructor(
    private userService: UserService,
    private authenticationService: AuthenticationService,
    private router: Router
  ) {
    this.authenticationService.user.subscribe((x) => (this.user = x));
  }

  ngOnInit() {
    this.loading = true;
    this.userService
      .getAll()
      .pipe(first())
      .subscribe((users) => {
        this.loading = false;
        this.users = users;
      });
  }

  logout() {
    this.authenticationService.logout();
  }

  toggle(index: number) {
    this.menus[index].active = !this.menus[index].active;
  }

  toggleSideBar() {
    this.showSideBar = !this.showSideBar;
  }

  selectMenu(parentMenu: { name: string }): void {
    this.menus.forEach((menu) => {
      if (menu.name !== parentMenu.name) {
        menu.active = false;
      } else {
        menu.active = !menu.active;
      }
    });
  }
}
