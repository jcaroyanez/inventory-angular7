import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  name:string;

  constructor(
    private userService:UserService,
    private router:Router
    ) {
    this.name = this.userService.getUser().user.displayName;
   }

  ngOnInit() {
  }

  logout(){
    this.userService.deleteUser();
    this.router.navigate(['/login'])
  }

  /*@Directive({
  selector: `click-stop-propagation`
  events: 'stopClick($event)'
})
class ClickStopPropagation {
  stopClick(event:Event) {
    event.preventDefault();
    event. stopPropagation();
  }
}*/
}
