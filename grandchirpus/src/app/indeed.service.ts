import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

interface JobSearch {
  JvID: string;
  jobTitle: string;
  location: string;
  company: string;
  url: string;
 
}

@Injectable({
  providedIn: 'root'
})
export class IndeedService {

  public jobsList: JobSearch[] = [];
  jobs : any [] = [];
  userID = "vDMCdyYaOSf6Ytb";
  tokenKey = "dJANrAPBguLXOcJzBSNLBKrqqiKt4O6PKwbd4Z33EedMhEBZnU4vxtbysDraVqWcOF3EeRMYjuxc7kaqsC+x8Q==";
  url = "https://api.careeronestop.org/v1/jobsearch/";
  
  // const keyword = "developer";
  // const location = "United States";
  // const radius = 25;
  // const days = 0;
  // const sortColumns = 0;
  // const sortOrder = 0;
  // const startRow = 0; 
  // const pageSize = 10; 

  constructor(private http: HttpClient) { }
  
  getJobs() {

    const requestUrl = this.getUrlWithAPIKey();

    this.http.get(requestUrl, {headers: {Authorization: 'Bearer ' + this.tokenKey, "Content-Type": "application/json"}}).subscribe(
      
      (response: any) => {

        console.log(response);
        this.jobs = response.Jobs;

        for(let job of this.jobs){
          const jobResults : JobSearch ={
          JvID: job.JvId,
          jobTitle: job.JobTitle,
          location: job.Location,
          company: job.Company,
          url: job.URL
        }

        this.jobsList.push(jobResults);
      }
      console.log(this.jobsList);
      },
      (error) => {
        console.error(error);
      }
      
    );
  }
  getUrlWithAPIKey() {
    return `${this.url}${this.userID}/developer/United States/25/0/0/0/10/0`;
  }
    
  }