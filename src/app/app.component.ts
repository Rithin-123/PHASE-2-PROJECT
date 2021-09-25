import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent   {
 buttonLabel = "GK Questions 2021 ";
 isBegin = false;
 isComplete = false;
 questions: any;
 currentQuestion: any;
 currentIndex: number;
 score: any;
 skipAnswer: any;
 constructor(){
   this.questions = [
     {
       id: 1,
       question: 'Qn 1: Name of the first Atomic Submarine of India?',
       option: [
         {optionid: 1, name: 'R.N. Shukla'},
         {optionid: 2, name: 'I.N.S Chakra'},
         {optionid: 3, name: 'V.R. Gill'},
         {optionid: 4, name: 'D.B. Mahawar'}
       ],
       answer: 2,
       selected: 0
     },
     {
      id: 2,
      question: 'Qn 2: What is the name of first British to visit India?',
      option: [
        {optionid: 1, name: 'Hawkins'},
        {optionid: 2, name: 'Norway'},
        {optionid: 3, name: 'Devid'},
        {optionid: 4, name: 'George Bush'}
      ],
      answer: 1,
      selected: 0
    },
    {
      id: 3,
      question: 'Qn 3: Name of the first election commissioner of India?',
      option: [
        {optionid: 1, name: 'Sukumar Sen'},
        {optionid: 2, name: 'R.N. Shukla'},
        {optionid: 3, name: 'V.R. Gill'},
        {optionid: 4, name: 'D.B. Mahawar'}
      ],
      answer: 1,
      selected: 0
    },
    {
      id: 4,
      question: 'Qn 4: Where is Indias First nuclear centre? ',
      option: [
        {optionid: 1, name: 'Jaipur'},
        {optionid: 2, name: 'Kanpur'},
        {optionid: 3, name: 'Raipur'},
        {optionid: 4, name: 'Tarapur'}
      ],
      answer: 4,
      selected: 0
    },
    {
      id: 5,
      question: 'Qn 5: Name of the first Indian President to Die in office?',
      option: [
        {optionid: 1, name: 'Pranav Mukharji'},
        {optionid: 2, name: 'Dr. Zakir Hussain'},
        {optionid: 3, name: 'Gyan Jail Singh'},
        {optionid: 4, name: 'Rajendra Prasad'}
      ],
      answer: 1,
      selected: 0
    },
    {
      id: 6,
      question: 'Qn 6: Which one is the smallest cean in the world?',
      option: [
        {optionid: 1, name: 'Sushma Swaraj'},
        {optionid: 2, name: 'USA'},
        {optionid: 3, name: 'Indira Gandhi'},
        {optionid: 4, name: 'Sarojini Naidu'}
      ],
      answer: 4,
      selected: 0
    },
    {
      id: 7,
      question: 'Qn 7: Which one is the smallest ocean in the world?',
      option: [
        {optionid: 1, name: 'India'},
        {optionid: 2, name: 'USA'},
        {optionid: 3, name: 'China'},
        {optionid: 4, name: 'Russia'}
      ],
      answer: 3,
      selected: 0
    },
     {
       id: 8,
       question: 'Question 8: Where is Bose Institute?',
       option: [
         {optionid: 1, name: 'Dispur'},
         {optionid: 2, name: 'Kolkata'},
         {optionid: 3, name: 'Mumbai'},
         {optionid: 4, name: 'New Delhi'}
       ],
       answer: 2,
       selected: 0
     },
     {
       id: 9,
       question: 'Question 9: When is the International Yoga Day celebrated?',
       option: [
         {optionid: 1, name: 'June 21'},
         {optionid: 2, name: 'March 21'},
         {optionid: 3, name: 'April 22'},
         {optionid: 4, name: 'May 31'}
       ],
       answer: 1,
       selected: 0
     },
  
     {
       id: 10,
       question: 'Question 10: Which country of the world has the largest number of post offices?',
       option: [
         {optionid: 1, name: 'France'},
         {optionid: 2, name: 'China'},
         {optionid: 3, name: 'India'},
         {optionid: 4, name: 'Japan'}
       ],
       answer: 3,
       selected: 0
     }
   ];

   this.currentIndex = 0;
   this.currentQuestion = this.questions[this.currentIndex];
  }

  next(){
    this.currentIndex++;
    this.currentQuestion = this.questions[this.currentIndex];
  }

  submit(){
    this.buttonLabel = "Go Back to Home";
    if (this.currentIndex + 1 == this.questions.length){
      this.isComplete = true;
      this.isBegin = false;
      this.score = 0;
      this.skipAnswer = 0;
      this.questions.map(x => {
        if (x.selected != 0){
          if (x.selected == x.answer) {
            this.score++;
          }
        }
        else {
          this.skipAnswer++;
        }

        x.selected = 0;
      });
    }
  }

  start(){
    this.isComplete = false;
    this.currentIndex = 0;
    this.currentQuestion = this.questions[this.currentIndex];
    this.isBegin = true;
  }

}
