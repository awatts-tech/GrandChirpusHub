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
  public jobDesc = '' ;

  //the userID, TokenID and url for the API
  userID = "vDMCdyYaOSf6Ytb";
  tokenKey = "dJANrAPBguLXOcJzBSNLBKrqqiKt4O6PKwbd4Z33EedMhEBZnU4vxtbysDraVqWcOF3EeRMYjuxc7kaqsC+x8Q==";
  url = "https://api.careeronestop.org/v1/jobsearch/";

  //required fields for the API URL that are set to default (hardcoded) values
  days:number = 0;
  sortColumns:string = '0';
  sortOrder:string = '0';
  startRow:number = 0; 
  pageSize:number = 4; 
  
  constructor(private http: HttpClient) { }
  
  //array to hold the response we get from the array
  //this is used to itterate over to pull the response into our array
  jobs : any [] = []; 

  //function to pull in API information
  getJobs(keyword:string, jobLocation:string, jobRadius:string) {

    //clearing the array in order to start with an empty array every search
    this.jobsList = [];

    //sets requestUrl by calling the getUrlWithAPIKey function to set the full API url
    const requestUrl = this.getUrlWithAPIKey() + '/' + keyword +'/' + jobLocation + '/' + jobRadius + '/' +  '/'+ this.sortColumns + '/'+ this.sortOrder + '/'+ this.startRow + '/'+ this.pageSize +'/' + this.days;
   
    //http method to call the API with the header authorization
    this.http.get(requestUrl, {headers: {Authorization: 'Bearer ' + this.tokenKey, "Content-Type": "application/json"}}).subscribe(
      
      (response: any) => {

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
      },
      (error) => {
        console.error(error);
      }
      
    );
  }

  //API call function to get the Job Description for whatever JobID is passed through
  getJobDescription(jobID){
    
    //clearing the array in order to start with an empty array every search
    this.jobDescList = [];

     //sets requestUrl by calling the getUrlWithAPIKey function to set the full API url
    const requestUrl = this.getUrlWithAPIKey()+'/' + jobID +'?isHtml=true&enableMetaData=false'; 

    //http method to call the API with the header authorization
    this.http.get(requestUrl, {headers: {Authorization: 'Bearer ' + this.tokenKey, "Content-Type": "application/json"}}).subscribe(
      
      (response: any) => {

        //set the response from the array to the jobDescResults object
        const jobDescResults:JobDescription = { 
          description: response.Description
        }
        
        //push the job jobDescResults object into the JobDescList array
        this.jobDescList.push(jobDescResults);

        //set the jobDesc variable equal to the jobDescList description at the 0 index of the array
        this.jobDesc = this.jobDescList[0].description;
        //console.log(this.jobDescList[0]);
        //return this.test;
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