import { Component, Input, OnInit, Output} from '@angular/core';
import { EventEmitter } from '@angular/core';
import { IndeedService } from '../indeed.service';
import { JobSearchComponent } from '../job-search/job-search.component';

@Component({
  selector: 'app-job-item',
  templateUrl: './job-item.component.html',
  styleUrls: ['./job-item.component.css']
})
export class JobItemComponent implements OnInit {
//input import to be able to accept an input from the parent component
@Input() job;
@Output() descStyle = new EventEmitter<string>();
jobDesc = '';

//constructor to create an import for the service class/component
constructor(public careerOneService: IndeedService) { }

  ngOnInit(): void {
  }
 
  //function that takes in a JobID and calls the JobDescription to pull into the application
  getFullJobDescription(jobID){
    //call to the JobDescription API
    this.careerOneService.getJobDescription(jobID);
  
    //emit the jobDesc to the parent
    this.descStyle.emit(this.careerOneService.jobDesc);
  }
}
