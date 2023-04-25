import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.page.html',
  styleUrls: ['./chatbot.page.scss'],
})
export class ChatbotPage implements OnInit {

  arrayMessages:any[]=[
    { message: "Hola", id: 1, create: new Date() },
    { message: "msg", id: 2, create: new Date() },
    { message: "Que paso", id: 1, create: new Date() }
  ];
  message: string="";
  SpinnerMsg:boolean = false;
  id:number=1;
  isRecording = false;
  public isUserSpeaking: boolean = false;
  recordedTime:any;

  constructor() { }

  ngOnInit() {
  }

  async send() {
     
    if (this.message != "") {
      let msg=this.message;
      this.message="";
      this.arrayMessages.push({ message: msg, id: 1, create: new Date() });
      msg = "";
      
    }
    
  }
  startRecording(){

  }
  stopRecording(){

  }

}
