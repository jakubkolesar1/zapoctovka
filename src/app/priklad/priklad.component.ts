import { SiteLayoutComponent } from './../site-layout/site-layout.component';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Task } from '../models/Task';

@Component({
  selector: 'app-priklad',
  templateUrl: './priklad.component.html',
  styleUrls: ['./priklad.component.scss']
})
export class PrikladComponent implements OnInit {

  solutionId:string = '';
  task: Task;
  constructor(
    private route: ActivatedRoute,
    private home: SiteLayoutComponent
    ) {
      this.route.params.subscribe(params => {
        this.solutionId = params['id'];
        this.initialiseState(); // reset and set based on new parameter this time
    });
  }

  ngOnInit(): void { 
  }

  initialiseState(){
    let data = require('../../assets/problems/'+this.solutionId+'.json');
    this.task = JSON.parse(JSON.stringify(data));
  }

}
