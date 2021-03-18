import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//interface to define what we want to pull in from the response of the Job Search API into our object
interface JobSearch {
  JvID: string;
  jobTitle: string;
  location: string;
  company: string;
  url: string;
}

//interface to define what we want to pull in from the response of Job Description API into our object
interface JobDescription {
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class IndeedService {

  //empty array to hold the final results 
  public jobsList: JobSearch[] = [];
  public jobDescList: JobDescription[] = [];

  //the userID, TokenID and url for the API
  userID = "vDMCdyYaOSf6Ytb";
  tokenKey = "dJANrAPBguLXOcJzBSNLBKrqqiKt4O6PKwbd4Z33EedMhEBZnU4vxtbysDraVqWcOF3EeRMYjuxc7kaqsC+x8Q==";
  url = "https://api.careeronestop.org/v1/jobsearch/";

  //required fields for the API URL that are set to default values
  days:number = 0;
  sortColumns:string = '0';
  sortOrder:string = '0';
  startRow:number = 0; 
  pageSize:number = 50; 
  
  constructor(private http: HttpClient) { }
  
  //array to hold the response we get from the array
  //this is used to itterate over to pull the response into our array
  jobs : any [] = []; 

  //function to pull in API information
  getJobs(keyword:string, jobLocation:string, jobRadius:string) {

    this.jobsList = [];

    //sets requestUrl by calling the getUrlWithAPIKey function to set the full API url
    const requestUrl = this.getUrlWithAPIKey() + '/' + keyword +'/' + jobLocation + '/' + jobRadius + '/' +  '/'+ this.sortColumns + '/'+ this.sortOrder + '/'+ this.startRow + '/'+ this.pageSize +'/' + this.days;
   
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

      console.log(this.jobsList);
      },
      (error) => {
        console.error(error);
      }
      
    );
  }

  getJobDescription(jobID){
    
    this.jobDescList = [];

    const requestUrl = this.getUrlWithAPIKey()+'/' + jobID +'?isHtml=true&enableMetaData=false'; 

    this.http.get(requestUrl, {headers: {Authorization: 'Bearer ' + this.tokenKey, "Content-Type": "application/json"}}).subscribe(
      
      (response: any) => {

        //console.log(response.Description);
        const jobDescResults : JobDescription = {
            description: response.Description
        }
        this.jobDescList.unshift(jobDescResults);
        //console.log(this.jobDescList[0].description);
      },
      (error) => {
        console.error(error);
      }
      
    );
  }


  //function to return the full API URL with the required fields
  getUrlWithAPIKey() {
    return `${this.url}${this.userID}`;
  }
    
  }