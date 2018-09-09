import { Component, OnInit, ViewChild } from '@angular/core';

const OWNER: string = "John Fedoruk";
const USER: string = "You";

interface Message {
  date: Date;
  message: string;
  sender: string;
}

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.css']
})
export class ChatBoxComponent implements OnInit {


  @ViewChild('messageContainer')
  private messageContainer: any;

  public online:boolean = Math.random()>0.5?true:false;
  public chatBoxOpen:boolean = false;
  readonly OWNER: string = OWNER;
  readonly USER: string = USER;
  public input:string;
  public messages: Message[] = [];

  constructor() { }

  ngOnInit() {
    for (let i = 0; i < 20; i++) {
      this.onNewMessage(this.randomMessage());
    }
  }

  public onOpenChatBox() {
    this.chatBoxOpen = true;
    this.scrollToBottom();
  }

  public onCloseChatBox() {
    this.chatBoxOpen = false;
  }

  // below was all copied from ContactComponent - needs to be refactored into single component

  public onSendMessage():boolean {
    if(!this.input||this.input.length<1)
      return false;
    this.onNewMessage({
      date: new Date(),
      message:this.input,
      sender:USER
    });
    this.input = "";
    // send a dummy response by OWNER
    setTimeout(()=>{
      this.onNewMessage(this.randomMessage(OWNER));
    },Math.floor(Math.random()*5000));
    return false;
  }

  public onFileAttach($event:any) {
    const FILE = $event.target.files[0];
    console.log(FILE);
    this.onNewMessage({
      date: new Date(),
      message:`attached new file '${FILE.name}'\n${Math.floor(FILE.size/1000)}kB`,
      sender:USER
    });
  }

  private randomMessage(sender:string=this.randomSender()):Message {
    return {
      date: new Date(),
      message:this.randomText(),
      sender:sender
    }
  }

  private randomText():string {
    const LOOPS:number = Math.floor(Math.random()*20 + 1);
    let txt:string = "";
    for(let i=0;i<LOOPS;i++) {
      txt+=Math.random()>0.5?"Hello ":"world ";
    }
    return txt;
  }

  private onNewMessage(message:Message):void {
    this.messages.push(message);
    this.scrollToBottom();
  }

  private randomSender(): string {
    return Math.random() > 0.5 ? this.OWNER : USER;
  }

  private scrollToBottom(): void {
        try {
      setTimeout(()=>{
        if(this.messageContainer)
                this.messageContainer.elementRef.nativeElement.scrollTop = this.messageContainer.elementRef.nativeElement.scrollHeight;
      },100);
        } catch(err) { }                 
    }





}
