import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersListService } from '../users-list.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  id: any;
  user: any;

  constructor(private _Activatedroute:ActivatedRoute,
    private _router: Router,
    private usersListService: UsersListService
    ) { 
  }

  ngOnInit(): void {
    this._Activatedroute.params.subscribe(params => { 
      this.id = params['id']; 
    });
    this.usersListService.getJSON().subscribe(data => {
      this.user = data.find((u: { id: any; }) => u.id == this.id);
      console.log(this.id);
    });
}

}
