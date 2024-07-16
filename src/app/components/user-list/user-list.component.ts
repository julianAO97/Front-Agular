import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';
import { User } from 'app/models/user.model';
import { UserService } from 'app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html'
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  loading: boolean = false;

  constructor(private userService: UserService, private router: Router) {}

  public ngOnInit(): void {
    this.loadusers();
  }

  public loadusers(): void {
    this.loading = true;
    this.userService.getUsers().subscribe({
      next: (data: User[]) => {
        
        this.users = data;
        console.log(this.users);
        this.loading = false;
      },
      error: (error) => {
        console.error('Error fetching users', error);
        this.loading = false;
      }
    });
  }

  public confirmDelete(id: number): void {
    if (confirm('¿Estás seguro de que deseas eliminar este conductor?')) {
      this.deleteUser(id);
    }
  }

  public deleteUser(id: number): void {
    this.userService.deleteUser(id).subscribe({
      next: () => {
        this.users = this.users.filter(user => user.id !== id);
      },
      error: (error) => {
        console.error('Error deleting user', error);
      }
    });
  }

  public selectUser(id: number): void {
    this.router.navigate(['users/detail', id]);
  }

  public createNewUser(): void {
    this.router.navigate(['/users/new']);
  }
}
