class Message 
{
   constructor(name,text)
   {
      this.name=name;
      this.text=text;
       var date=new Date();
      this.date=date.getHours()+":"+date.getMinutes();
   }
  
   toString () {
    return this.date+" "+this.name+": "+this.text;    
   }
}

class Messenger
{
    constructor()
    {
     this.message=[];
    } 

    send(author, text)
    { let message=new Message(author,text);

this.message.push(message.toString())
    }
    
    show_history()
    {
        
        this.message.forEach((item) => {console.log(item)});
    }

}


let messenger=new Messenger();

messenger.send("Farman","Hate");
messenger.send("Namraf","Love");

messenger.show_history();