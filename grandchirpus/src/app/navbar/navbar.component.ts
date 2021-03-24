import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }
  
  redirectAlert(){
    let redirect = confirm("You are being re-directed to https://www.grandcircus.co/");
    console.log(redirect);
    if(redirect === true){
      location.href = 'https://www.grandcircus.co/';
 
    }else{
      window.stop();

    }
    
  }

}
