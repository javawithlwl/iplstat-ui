import { Component } from '@angular/core';
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

    users = userList;
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
}
