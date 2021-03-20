import { Component, Input, OnInit } from '@angular/core';
import { IndeedService } from '../indeed.service';

@Component({
  selector: 'app-job-item',
  templateUrl: './job-item.component.html',
  styleUrls: ['./job-item.component.css']
})
export class JobItemComponent implements OnInit {
@Input() job;

constructor(public careerOneService: IndeedService) { }

  ngOnInit(): void {
  }
  getFullJobDescription(jobID){
    this.careerOneService.getJobDescription(jobID);
    
    //this.setInnerHTML();
     // if(!this.jobsShowing){
     //   this.careerOneService.getJobDescription(jobID)
     //   this.jobsShowing = true;
     // }else{
     //   document.getElementById("description").style.display = "none";
     //   this.jobsShowing = false;
     //   console.log("HERE");
     // }
   }
}
