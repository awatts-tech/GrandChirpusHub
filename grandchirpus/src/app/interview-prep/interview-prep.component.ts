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
   basicQuestions : string[] = [
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
      "Tell Me About a Complex Application You’ve Worked on or Supported",
      "How are you defining your media queries? With min-width or max-width? What is the difference between the two?",
      "Explain component based architecture. What is it? What is a component? Show an example",
      "What is a New Software or Technology You Recently Worked With and How Did You Come to Learn It?",
      "Tell Me About a Time When You Explained a Technical Process or Concept to Someone Who Did not Have a Technical Background.",
      "What development tools have you used?",
      "What languages have you programmed in?",
      "What strengths do you think are most important in a developer role (or another relevant IT position)?"
    ];

    basicAnswers : string[] = [
      "Tell me about yourself",
      "What is your greatest strength?",
      "What is your greatest weakness?",
      "Why should we hire you?",
      "Why do you want to work here?",
      "Tell me about a time you showed leadership",
      "Tell me about a time you were successful on a team",
      "What would your co-workers say about you?",
      ];


    technicalAnswers : string[] = [
      // "Here's one way this might sound:If I were explaining what APIs are to someone without a lot of technical background, I’d probably say 
      // that at their core, APIs are a way for programs to communicate with each other—usually with a limited set of possible inputs and responses 
      // like a menu at a restaurant (where the inputs are menu items and the responses are food). But unlike a menu, you have to use the exact 
      // keywords an API is coded for or it won’t understand you. For example, if I use the correct inputs, Instagram’s API allows me to code a 
      // website so that the company’s most recent Instagram posts are automatically displayed on their site",
      // "When responding to this question, explain why you considered the application(s) complex, then describe your role working on them. Were you involved in the front- or back-end development, testing, design, or maintenance? Were you the sole developer or part of a development team?
      // From there, focus on a specific example of something you worked on and take a few minutes to summarize what you were tasked with, the actions you took to accomplish those tasks, and how it fit into the overall project. Be sure to include what you learned and how the experience shaped you as a professional. While you don’t want to drone on and on, it’s important to include some specific details to keep your response from being too general or generic.
      // ",
      // "Media queries are a popular technique for delivering a tailored style sheet to different devices. Min-width is uses mobile view <800 (based on your code parameter) Max width was showing mobile and tablet view >800",
      // "Component-based architecture focuses on the decomposition of the design into individual functional or logical components that represent well-defined communication interfaces containing methods, events, and properties. It provides a higher level of abstraction and divides the problem into sub-problems, each associated with component partitions.A component is a modular, portable, replaceable, and reusable set of well-defined functionality that encapsulates its implementation and exporting it as a higher-level interface.",
      // "You’ll want to stress to your interviewer how you acquired your skills, whether through school, vocational training, certification, previous jobs, or a combination of these. If you had the opportunity to pick up new software knowledge or skills as a result of a project you worked on, this question offers a great opportunity to share that and explain how you’ve used the skills in practice.
      // “I’m interested in knowing how candidates apply what they’ve learned, not that they simply have the knowledge,” says Brooks. With that in mind, you’ll want to be sure to share how you’ve used the technology tools you’re familiar with.",
      // "Tell Me About a Time When You Explained a Technical Process or Concept to Someone Who Didn’t Have a Technical Background.",
      // "What development tools have you used?",
      // "What languages have you programmed in?",
      // "What strengths do you think are most important in a developer [or another relevant IT position]?",
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

