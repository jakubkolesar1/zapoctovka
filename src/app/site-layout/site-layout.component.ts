import { Component, OnInit } from '@angular/core';
import { Task } from '../models/Task';


@Component({
  selector: 'app-site-layout',
  templateUrl: './site-layout.component.html',
  styleUrls: ['./site-layout.component.scss']
})


export class SiteLayoutComponent implements OnInit {
  
  searching = false;
  input:string = '';
  files = [
    "2.1.json","2.10.json","2.11.json","2.12.json","2.13.json","2.14.json",
    "2.15.json","2.16.json","2.17.json","2.18.json","2.19.json","2.2.json",
    "2.20.json","2.21.json","2.22.json","2.23.json","2.24.json","2.25.json",
    "2.26.json","2.27.json","2.28.json","2.29.json","2.3.json","2.31.json",
    "2.32.json","2.34.json","2.35.json","2.36.json","2.37.json","2.38.json",
    "2.39.json","2.4.json","2.40.json","2.41.json","2.42.json","2.43.json",
    "2.44.json","2.45.json","2.47.json","2.48.json","2.49.json","2.5.json",
    "2.50.json","2.51.json","2.52.json","2.53.json","2.54.json","2.56.json",
    "2.57.json","2.58.json","2.6.json","2.60.json","2.61.json","2.63.json",
    "2.64.json","2.65.json","2.67.json","2.68.json","2.7.json","2.73.json",
    "2.8.json","2.9.json","3.1.json","3.10.json","3.11.json","3.12.json",
    "3.13.json","3.14.json","3.15.json","3.16.json","3.17.json","3.18.json",
    "3.19.json","3.2.json","3.20.json","3.21.json","3.22.json","3.24.json",
    "3.25.json","3.26.json","3.27.json","3.28.json","3.29.json","3.30.json",
    "3.31.json","3.32.json","3.33.json","3.34.json","3.35.json","3.36.json",
    "3.37.json","3.38.json","3.4.json","3.40.json","3.41.json","3.42.json",
    "3.43.json","3.44.json","3.45.json","3.46.json","3.47.json","3.48.json",
    "3.49.json","3.5.json","3.50.json","3.51.json","3.52.json","3.53.json",
    "3.55.json","3.56.json","3.59.json","3.6.json","3.60.json","3.61.json",
    "3.62.json","3.63.json","3.64.json","3.642.json","3.65.json","3.8.json",
    "3.9.json","4.1.json","4.10.json","4.12.json","4.14.json","4.15.json",
    "4.17.json","4.18.json","4.19.json","4.21.json","4.22.json","4.23.json",
    "4.24.json","4.25.json","4.26.json","4.27.json","4.28.json","4.29.json",
    "4.3.json","4.30.json","4.32.json","4.33.json","4.34.json","4.36.json",
    "4.38.json","4.39.json","4.40.json","4.42.json","4.46.json","4.5.json",
    "4.7.json","4.9.json","5.13.json","5.14.json","5.15.json","5.16.json",
    "5.17.json","5.19.json","5.20.json","5.25.json","5.27.json","5.28.json",
    "5.29.json","5.3.json","5.33.json","5.4.json","5.48.json","5.49.json",
    "5.5.json","5.56.json","5.58.json","5.59.json","5.6.json","5.62.json",
    "5.64.json","5.65.json","5.66.json","5.69.json","5.7.json","5.70.json",
    "5.72.json","5.79.json"
  ];
  activeTask: Task;
  showTask = false;
  fileArray:Task[] = [];
  results:Task[] = [];
  menuOpened = false;

  constructor() {}
  
  ngOnInit(): void {
    this.files.forEach(file => {
      let data = require('../../assets/problems/'+file);
      this.fileArray = this.fileArray.concat(JSON.parse(JSON.stringify(data)));
    });
  }
  
  
  searchProblem(){
    this.results.length=0;
    this.fileArray.forEach(element => {
      if(element.Title.toLowerCase().includes(this.input.toLowerCase()) || element.Text.toLowerCase().includes(this.input.toLowerCase())){
        this.results = this.results.concat(element);
      }
    });
    this.results.forEach( result => {
      result.Text = result.Text.substring(0,60)+'...';
    });
  }

  onOutletLoaded(component:any) {
    component.someProperty = 'someValue';
  } 
  
  clearSearch(){
    this.results.length = 0;
    this.showTask = false;
    this.input = '';
  }

}
