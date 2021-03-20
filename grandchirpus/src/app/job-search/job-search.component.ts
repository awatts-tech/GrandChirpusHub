import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
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

   searchSuggestions = [
    "Try searching for Developer...",
    "Try searching for Programmer...",
    "Try searching for Analyst...",
    "Try searching for Data Scientist...",
    "Try searching for Architect...",
    "Try searching for Mobile Developer...",
    "Try searching for JavaScript Developer...",
    "Try searching for Full-Stack Developer...",
    "Try searching for Front-End Developer...",
    "Try searching for Back-End Developer...",
    "Try searching for Angular Developer...",
    "Try searching for Software Engineer..."
  ];

  constructor(public careerOneService: IndeedService) { }

  ngOnInit(): void {
    this.setSearchSuggestion();
  }
  
  getFullJobDescription(jobID){

    this.careerOneService.getJobDescription(jobID);
    //setTimeout(this.setInnerHTML, 600);
    console.log(this.careerOneService.test);
    const testing = this.careerOneService.test;
    document.getElementById('description').innerHTML = testing;
    
    //return this.careerOneService.test;
  }

  setSearchSuggestion(){
    const searchTerm = this.searchSuggestions[Math.floor(Math.random()* this.searchSuggestions.length)];
    (<HTMLInputElement>document.getElementById("setSearchSuggestion")).placeholder= searchTerm;
  }

  getJobResults(){
    this.careerOneService.getJobs(this.keyword, this.jobLocation, this.jobRadius);
    this.keyword='';
    this.jobLocation='';
    this.jobRadius='';
  }
}