import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from '../model/subscription.model';
import { SubscriptionService } from '../services/subscription.service';


@Component({
  selector: 'app-myaccount',
  templateUrl: './myaccount.component.html',
  styleUrls: ['./myaccount.component.css']
})
export class MyaccountComponent implements OnInit {

  subscriptions: Subscription[] = [];

  constructor(private router:Router, private subService:SubscriptionService) { }

  ngOnInit(): void {
    if(localStorage.getItem('loggedOn') == 'true'){
      var uid = localStorage.getItem('userID') || 0;
      this.subService.find(+uid).subscribe(subs => {
        this.subscriptions = subs;
      })
    }
    document.body.style.background = "#f4faff";
  }
}
