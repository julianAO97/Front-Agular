import { Component, OnInit, Input } from '@angular/core';

import {Router} from '@angular/router';
import { User } from 'app/models/user.model';
import { UserService } from 'app/services/user.service';


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html'
})
export class UserDetailComponent implements OnInit {
  @Input() userId: number;
  user: User;

  constructor(private userService: UserService, private router: Router) {}

  public ngOnInit(): void {
    this.loadUser();
  }

  public loadUser(): void {
    this.userService.getUserById(this.userId).subscribe({
      next: (data: User) => {
        this.user = data;
      },
      error: (error) => {
        console.error('Error fetching User details', error);
      }
    });
  }

  public editUser(id: number): void {
    this.router.navigate(['users/edit/', id]);
  }

 public deleteUser(id: number): void {
    this.userService.deleteUser(id).subscribe({
      next: () => {
       // console.log('Usuario eliminado exitosamente.');
        this.user = null;
      },
      error: (error) => {
        console.error('Error deleting driver', error);
      }
    });
  }
}
