import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './../../service/user.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
  users: any;
  public idAdd = "";
  public nameAdd = "";
  public usernameAdd = "";
  public emailAdd = "";
  public addressAdd = {
    streetAdd : "",
    suiteAdd : "",
    cityAdd: "",
    zipcodeAdd : ""
  }; 
  public phoneAdd = "";

  constructor(private UserService: UserService,
    private router: Router) { }

  ngOnInit(): void {
  }
  addUser(){
      let id = Math.random().toString(36).substring(2) + new Date().getTime().toString();
         const data = {
           id,
          name: this.nameAdd,
          username: this.usernameAdd,
          email: this.emailAdd,
          address:{
            street: this.addressAdd.streetAdd,
            suite: this.addressAdd.suiteAdd,
            city: this.addressAdd.cityAdd,
            zipcode: this.addressAdd.zipcodeAdd,
          },
          phone: this.phoneAdd
          
    }
    this.router.navigate(['/users'],{queryParams: {'data':JSON.stringify(data)}})

  }

}
