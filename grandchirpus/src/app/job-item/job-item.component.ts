import { Component, Input, OnInit } from '@angular/core';
import { IndeedService } from '../indeed.service';

@Component({
  selector: 'app-job-item',
  templateUrl: './job-item.component.html',
  styleUrls: ['./job-item.component.css']
})
export class JobItemComponent implements OnInit {
//input import to be able to accept an input from the parent component
@Input() job;

//constructor to create an import for the service class/component
constructor(public careerOneService: IndeedService) { }

  ngOnInit(): void {
  }
 
  //function that takes in a JobID and calls the JobDescription to pull into the application
  getFullJobDescription(jobID){
    //call to the JobDescription API
    this.careerOneService.getJobDescription(jobID);
    // console.log(this.careerOneService.test);

    //sets variable equal to the variable in the service class
    const jobDesc = this.careerOneService.jobDesc;

    //sets the description id in the HTML equal to the jobDesc Variable
    document.getElementById('description').innerHTML = jobDesc;
  }
}
