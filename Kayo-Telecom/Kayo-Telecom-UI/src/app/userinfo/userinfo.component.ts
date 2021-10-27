import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent implements OnInit {
  
  user:User = new User("","","","","");


  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    //SETTING LOCAL STORAGE UNTIL GET BY LOGIN IS SOLVED!!!!! @@@@@@@@
    //localStorage.setItem('userID','2');
    //localStorage.setItem('loggedOn','true');
    
    this.userService.find(this.getLocalStorageId()).subscribe(data => {
      this.user = data;
    })

    document.body.style.background = "#f4faff";
  }

  getLocalStorageId() {
    const loggedOn = this.isLogged();
    if(loggedOn == 'true'){
      return JSON.parse(localStorage.getItem('userID') || '{}');
    } else {
      return "nones";
    }
  }

  isLogged(){
    return localStorage.getItem('loggedOn');
  }
}
