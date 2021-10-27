import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Plan } from '../model/plan.model';
import { PlanService } from '../services/plan.service';

@Component({
  selector: 'app-purchaseplan',
  templateUrl: './purchaseplan.component.html',
  styleUrls: ['./purchaseplan.component.css']
})
export class PurchaseplanComponent implements OnInit {

  planList: Plan[] = [];

  constructor(private planService:PlanService, private router: Router) { }

  ngOnInit(): void {
    document.body.style.background = "#f4faff";
    this.planService.findAll().subscribe(data => {
      this.planList = data;
    })
  }

}
