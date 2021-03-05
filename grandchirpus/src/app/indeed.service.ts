import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//interface to define what we want to pull in from the response into our object
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

  //empty array to hold the final results 
  public jobsList: JobSearch[] = [];

  //array to hold the response we get from the array
  //this is used to itterate over to pull the response into our array
  jobs : any [] = [];

  //the userID, TokenID and url for the API
  userID = "vDMCdyYaOSf6Ytb";
  tokenKey = "dJANrAPBguLXOcJzBSNLBKrqqiKt4O6PKwbd4Z33EedMhEBZnU4vxtbysDraVqWcOF3EeRMYjuxc7kaqsC+x8Q==";
  url = "https://api.careeronestop.org/v1/jobsearch/";
  
  //placeholders for the required fields in the API URL
  // const keyword = "developer";
  // const location = "United States";
  // const radius = 25;
  // const days = 0;
  // const sortColumns = 0;
  // const sortOrder = 0;
  // const startRow = 0; 
  // const pageSize = 10; 

  constructor(private http: HttpClient) { }
  
  //function to pull in API information
  getJobs() {

    //sets requestUrl by calling the getUrlWithAPIKey function to set the full API url
    const requestUrl = this.getUrlWithAPIKey();

    //http method to call the API with the header authorization
    this.http.get(requestUrl, {headers: {Authorization: 'Bearer ' + this.tokenKey, "Content-Type": "application/json"}}).subscribe(
      
      (response: any) => {

        //console.log(response);
        //setting our local array equal to the response from the API
        this.jobs = response.Jobs;

        //for loop to loop through the results from the API and put them in our jobResults Object
        for(let job of this.jobs){
          const jobResults : JobSearch ={
          JvID: job.JvId,
          jobTitle: job.JobTitle,
          location: job.Location,
          company: job.Company,
          url: job.URL
        }

        //pushes jobResults object into the jobsList array
        this.jobsList.push(jobResults);
      }

      //console.log(this.jobsList);
      },
      (error) => {
        console.error(error);
      }
      
    );
  }
  //function to return the full API URL with the required fields
  getUrlWithAPIKey() {
    return `${this.url}${this.userID}/developer/United States/25/0/0/0/10/0`;
  }
    
  }