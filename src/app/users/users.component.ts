import { Component, OnInit } from '@angular/core';
import { UsersListService } from '../users-list.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: any;

  constructor(private usersListService: UsersListService) {
    }

    ngOnInit(): void {
      this.usersListService.getJSON().subscribe(data => {
        this.users = data;
      });
    }
  }