import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { IndeedService } from '../indeed.service';


@Component({
  selector: 'app-job-search',
  templateUrl: './job-search.component.html',
  styleUrls: ['./job-search.component.css'],
  providers: []
})
export class JobSearchComponent implements OnInit {

//required fields in the API URL

  //these fields the user will be able to set in the webpage
   keyword:string = '';
   jobLocation:string = '';
   jobRadius:string = '';

  constructor(public careerOneService: IndeedService) { }

  ngOnInit(): void {
  }


  getJobResults(){
    this.careerOneService.getJobs(this.keyword, this.jobLocation, this.jobRadius);
  }

}
