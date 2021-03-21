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
      "How do you define your media queries? With min-width or max-width? What is the difference between the two?",
      "Explain component based architecture. What is it? What is a component? Show an example",
      "What is a New Software or Technology You Recently Worked With and How Did You Come to Learn It?",
      "Tell Me About a Time When You Explained a Technical Process or Concept to Someone Who Did not Have a Technical Background.",
      "What development tools have you used?",
      "What languages have you programmed in?",
      "What strengths do you think are most important in a developer role (or another relevant IT position)?"
    ];

    basicAnswers : string[] = [
      "Talk a little bit about what your current role is, the scope of it, and perhaps a big recent accomplishment. Past: Tell the interviewer how you got there and/or mention previous experience that's relevant to the job and company you're applying for",
      "List your skills that match those the employer is seeking. This list can include education or training, soft skills, hard skills, or past work experiences. Narrow down your list of skills to three to five particularly strong skills. Note an example of how you have applied that strength in the past",
      "Some weaknesses are: Patience when working with a team, organization skills, delegating responsibility, can be too timid with my feedback, can be too blunt with my feedback, public speaking, analyzing data",
      "It will be good if you hire me, because I meet the job criteria. I am very hardworking, reliable, loyal, and a fast learner. I have given my 100% to my previous company and here also I will try to give the same. Intentionally, I want to join this company to enhance my skills and to use my skills at correct project for company profit.",
      "The quality of the employer's products, The quality of the employer's reputation as an employer, This company has a wonderful reputation as a great place to work. You place high value on your employees and encourage them to learn, grow, and innovate inside the company. This means that employees happily work here for many years",
      "Describe the task—or what your responsibility was in the situation. Talk about the action (or actions) you took and make sure you frame it all in terms of your leadership. Talk about the results of your actions—the more quantifiable and concrete the better.",
      "Share how you improved a process, increased revenue, saved time, reduced cost or how you were a team player",
      "My friends and coworkers would both describe me as resourceful and someone who solves problems before I’m asked. My colleagues would describe me as a natural leader or someone they can trust to get the job done.",
      ];


    technicalAnswers : string[] = [
      
      "APIs are a way for programs to communicate with each other—usually with a limited set of possible inputs and responses like a menu at a restaurant (where the inputs are menu items and the responses are food). But unlike a menu, you have to use the exact keywords API is coded for or it won’t understand you.",
      "Explain why you considered the application(s) complex, then describe your role working on them. Were you involved in the front or back-end development, testing, design, or maintenance? Were you the sole developer or part of a development team",
      "Media queries are a popular technique for delivering a tailored style sheet to different devices. Min-width is uses mobile view <800 (based on your code parameter) Max width was showing mobile and tablet view >800",
      "Focuses on the decomposition of the design into individual functional or logical components that represent well-defined communication interfaces containing methods, events, and properties. A component is a modular, portable, replaceable, set of well-defined functionality",
      "You’ll want to stress to your interviewer how you acquired your skills, whether through school, vocational training, certification, previous jobs, or a combination of these. If you had the opportunity to pick up new software knowledge or skills and how you’ve used the skills in practice",
      "If you are trying to explain a technical concept be aware of who your audience is and tune your technical speak to their level. There might be times where you'll replace the technical talk with something that your audience will understand, remember that your ultimate goal is to communicate and to do it clearly",
      "Software Development Tools that will make you more productive - GitHub - The world's leading software development platform, GitLab, IntelliJ IDEA, Stack Overflow, Docker, Jira, Jenkins",
      "Example: C++ was the first programming language in an academic class. Before I went to college, though, I had picked up a fair amount of JavaScript and Python. Reflect on your first coding experience. I still enjoy using those languages because they’re flexible enough that you can use them in a lot of contexts",
      "7 Qualities That Differentiate a Great Programmer from a Good Programmer Positive Attitude. A great programmer cares about your product's success, Supreme Communication Skills, Good Time and Task Management, Quick Learning Ability, Deep and Broad Technical Experience, A Good Team Player, Big-Picture Focus",
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

      basicAnswersRandom(){   
        const newAnswer = this.basicAnswers[this.i]; 
        console.log(newAnswer);
        document.getElementById('displayBasicAnswers').innerHTML= newAnswer;
        this.i++; 
        if(this.i== this.basicAnswers.length){
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

    technicalRandomAnswers(){
      const newTechAnswers = this.technicalAnswers[this.j]; 
      console.log(newTechAnswers);
      document.getElementById('displayTechAnswers').innerHTML= newTechAnswers;
      this.j++; 
      if(this.j== this.technicalAnswers.length){
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

