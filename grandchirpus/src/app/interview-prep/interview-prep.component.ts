import { getLocaleMonthNames } from '@angular/common';
import { normalizeGenFileSuffix } from '@angular/compiler/src/aot/util';
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
    "What is your greatest strength?",
    "What is your greatest weakness?",
    "Why should we hire you?",
    "Why do you want to work here?",
    "Tell me about a time you showed leadership.",
    "Tell me about a time you were successful on a team.",
    "What would your co-workers say about you?"
    ];
   technicalQuestions : string[] = [
      "How Would You Explain APIs to a Nontechnical Stakeholder?",
      "Tell Me About a Complex Application You’ve Worked on or Supported.",
      "How are you defining your media queries? With min-width or max-width? What is the difference between the two?",
      "Explain component based architecture. What is it? What is a component? Show an example",
      "What is a New Software or Technology You Recently Worked With and How Did You Come to Learn It?",
      "Tell Me About a Time When You Explained a Technical Process or Concept to Someone Who Did not Have a Technical Background.",
      "What development tools have you used?",
      "What languages have you programmed in?",
      "What strengths do you think are most important in a developer role (or another relevant IT position)?"
    ];
    
    i= 0;
    basicRandom(){   
        const newQuestion = this.basicQuestions[this.i]; 
        console.log(newQuestion);
        document.getElementById('displayBasicQuestions').innerHTML= newQuestion;
        this.i++; 
        if(this.i== this.basicQuestions.length){
        this.i = 0;
        }
      }
        
      j= 0;
      technicalRandom(){
        const newTechQuestion = this.technicalQuestions[this.j]; 
        console.log(newTechQuestion);
        document.getElementById('displayTechQuestions').innerHTML= newTechQuestion;
        this.j++; 
        if(this.j== this.technicalQuestions.length){
        this.j = 0;
      }
    }
    
flip() {
  const card = document.querySelector('.card');
  card.classList.toggle('is-flipped');  
}

flip2() {
  const card2 = document.querySelector('.card2');
  card2.classList.toggle('is-flipped2');  
}
}

