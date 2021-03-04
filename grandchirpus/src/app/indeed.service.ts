import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class IndeedService {
  userID = "vDMCdyYaOSf6Ytb";
  tokenKey = "780dJANrAPBguLXOcJzBSNLBKrqqiKt4O6PKwbd4Z33EedMhEBZnU4vxtbysDraVqWcOF3EeRMYjuxc7kaqsC+x8Q==ebef6";
  url = "https://api.careeronestop.org/v1/jobsearch/";
  constructor(private http: HttpClient) { }
}