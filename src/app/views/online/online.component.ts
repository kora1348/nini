import { Component } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '@app/_models';
import { AuthenticationService, UserService } from '@app/_services';
import { Router } from '@angular/router';

@Component({
    selector: 'app-online',
    templateUrl: './online.component.html',
    styleUrls: ['./online.component.css'],
})
export class OnlineComponent {
    loading = false;
    users: User[];
    user: User;

    constructor(private userService: UserService,  private authenticationService: AuthenticationService, private router: Router) { 
        this.authenticationService.user.subscribe(x => this.user = x);
    }

    ngOnInit() {
        this.loading = true;
        this.userService.getAll().pipe(first()).subscribe(users => {
            this.loading = false;
            this.users = users;
        });
    }

    logout() {
        this.authenticationService.logout();
    }
}