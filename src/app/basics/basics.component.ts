import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Contact } from '../contact.model';
import { userList } from '../userdetails.model';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.css']
})
export class BasicsComponent {
    title="Learning Angular is fun!";
    imgloc="../../assets/img/off.png";
    status = true;
    username="Defualt User";
    contacts:Contact[] = [
        {
          "name":"Ashok",
          "email":"ashok@gmail.com",
          "mobile":"9036102444"
        },
        {
          "name":"Satys",
          "email":"javawithlwl@gmail.com",
          "mobile":"9036102222"
        },
        {
          "name":"Mouli",
          "email":"mouli@gmail.com",
          "mobile":"9036102111"
        },
        {
          "name":"Sri",
          "email":"sri@gmail.com",
          "mobile":"9036102555"
        }
    ];

    users = userList;
    contactForm;
    constructor(private fb:FormBuilder){
        this.contactForm = fb.group({
            'name':new FormControl(''),
            'email':new FormControl(''),
            'mobile':new FormControl('')
        })
    }
    addContact(){
         let newContact:any = this.contactForm.value;
         this.contacts.push(newContact);
         this.contactForm.reset();
    }
    convert(){
        this.title = this.title.toUpperCase();
    }
    changeStatus(){
      this.status = !this.status;
      console.log("Status "+this.status);
      if(this.status){
        this.imgloc = "../../assets/img/on.png";
      }else{
        this.imgloc = "../../assets/img/off.png";
      }
    }
    deleteContact(email:string){
          console.log(email);
          let index = this.indexOf(email);
          if(index!=-1){
              let res = confirm('Are you sure do you want delete :'+email+' ?');
              if(res){
                  this.contacts.splice(index,1);
              }
          }
    }

    indexOf(email:string){
        for(let i=0;i<this.contacts.length;i++){
            if(this.contacts[i].email === email){
              return i;
            }
        }
        return -1;
    }
}
