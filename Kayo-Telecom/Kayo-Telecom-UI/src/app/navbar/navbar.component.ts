import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  loggedIn:boolean = false;
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.loggedIn = this.checkloggedstatus();
    console.log(this.loggedIn);
  }

  checkloggedstatus():boolean {
    const status = localStorage.getItem('loggedOn');
    if (status == 'true'){
      return true;
    }
    return false;
  }

  logout():void {
    localStorage.clear();
    let route = this.router.config.find(r => r.path ==='');
      if(route){
        this.router.navigateByUrl('/')
        .then(() => {
          window.location.reload();
        });
      }

  }
}
