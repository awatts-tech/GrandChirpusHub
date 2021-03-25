import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { IndeedService } from '../indeed.service';


@Component({
  selector: 'app-job-search',
  templateUrl: './job-search.component.html',
  styleUrls: ['./job-search.component.css'],
  providers: [],
})
export class JobSearchComponent implements OnInit {

  //these are the fields the user will be able to set in the webpage to run their search
  keyword: string = '';
  jobLocation: string = '';
  jobRadius: string = '';

  //array of strings to be shown in the Keyword search on the JobSearch Page
  searchSuggestions = [
    'Try searching for Developer...',
    'Try searching for Programmer...',
    'Try searching for Analyst...',
    'Try searching for Data Scientist...',
    'Try searching for Architect...',
    'Try searching for Mobile Developer...',
    'Try searching for JavaScript Developer...',
    'Try searching for Full-Stack Developer...',
    'Try searching for Front-End Developer...',
    'Try searching for Back-End Developer...',
    'Try searching for Angular Developer...',
    'Try searching for Software Engineer...',
  ];

  constructor(public careerOneService: IndeedService) {}

  //runs the search Suggestion button on init
  ngOnInit(): void {
    this.setSearchSuggestion();
  }

  //function to randomly change the keyword search box
  setSearchSuggestion() {
    //sets search term to a random item in the searchSuggestions array
    const searchTerm = this.searchSuggestions[
      Math.floor(Math.random() * this.searchSuggestions.length)
    ];

    //changes the placeholder on the searchSuggestions id in the HTML to the searchTerm Variable
    (<HTMLInputElement>(
      document.getElementById('setSearchSuggestion')
    )).placeholder = searchTerm;
  }

  //function to call the API for getting the jobs
  getJobResults() {
    //calls the getJobs API with the 3 search terms we selected
    this.careerOneService.getJobs(this.keyword, this.jobLocation, this.jobRadius);

    //sets all of the following variables back to an empty string so they disappear from the search boxes
    this.keyword = '';
    this.jobLocation = '';
    this.jobRadius = '';
  }

  close(){
    document.getElementById('description').innerHTML = '';
    document.getElementById('description').style.display = 'none';
    console.log('clicked');
  }
}