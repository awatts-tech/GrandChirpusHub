import { getLocaleMonthNames } from '@angular/common';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-interview-prep',
  templateUrl: './interview-prep.component.html',
  styleUrls: ['./interview-prep.component.css']
})
export class InterviewPrepComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }
   basicQuestions = [
    "Tell me about yourself",
    "What is your greatest strengh?",
    "What is your greatest weakness?",
    "Why should we hire you?",
    "Why do you want to work here?",
    "Tell me about a time you showed leadership",
    "Tell me about a time you were successful on a team",
    "What would your co-workers say about you?",
    ];
   technicalQuestions : string[] = [
      "What are ways your html can give responsive design",
      "You only live once, but if you do it right, once is enough. - Mae West",
      "Be the change that you wish to see in the world. - Mahatma Gandhi",
      "The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty. – Winston Churchill",
      "Don’t Let Yesterday Take Up Too Much Of Today. – Will Rogers",
      "You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character. – Unknown",
      "Its Not Whether You Get Knocked Down, It’s Whether You Get Up.  - Vince Lombardi",
      "If You Are Working On Something That You Really Care About, You Don’t Have To Be Pushed. The Vision Pulls You. – Steve Jobs",
      "People Who Are Crazy Enough To Think They Can Change The World, Are The Ones Who Do. – Rob Siltane",
    ];
    
     basicRandom(){
       const newQuestion = this.basicQuestions[Math.floor(Math.random()* this.basicQuestions.length)]; 
       console.log(newQuestion);
       document.getElementById('displayBasicQuestions').innerHTML= newQuestion;
      }
    
      technicalRandom(){
        const newTechQuestion = this.basicQuestions[Math.floor(Math.random()* this.technicalQuestions.length)]; 
        console.log(newTechQuestion);
        document.getElementById('displayTechQuestions').innerHTML= newTechQuestion;
       }

   
  }