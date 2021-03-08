import { Component } from '@angular/core';
import { IndeedService } from './indeed.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'grandchirpus';
  myimage:string = "assets/img/Grantchirpus-logo.PNG";



  // constructor(public IndeedService: IndeedService) {}

  // ngOnInit(){
  //     this.IndeedService.getJobs();
  // }
}


