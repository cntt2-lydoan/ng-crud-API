import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from './../../service/user.service';
@Component({
  selector: 'app-user-l',
  templateUrl: './user-l.component.html',
  styleUrls: ['./user-l.component.css']
})
export class UserLComponent implements OnInit {

  users: any;
  name:any;

  public idEdit = "";
  public nameEdit = "";
  public usernameEdit = "";
  public emailEdit = "";
  public addressEdit = {
    streetEdit : "",
    suiteEdit : "",
    cityEdit : "",
    zipcodeEdit : ""
  }; 
  public phoneEdit = "";
  public companyEdit = "";

  constructor(private UserService: UserService,
    public activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.readUser();
  }

  readUser(): void {
    this.UserService.readAll().subscribe(users => {
          this.users = users;
          console.log(users);
          this.activatedRoute.queryParams.subscribe(param=>{
            console.log(JSON.parse(param.data));
            this.users.push(JSON.parse(param.data));
            
          })
        },
        error => {
          console.log(error);
        });
  }

  deleteUser(id: any): void {
    console.log(id);
    this.users = this.users.filter((u: { id: any; }) => u.id !=id);
    console.log(this.users);
  }
  save() {
    let index = this.users.findIndex((u: { id: string; }) => u.id == this.idEdit);
    this.users[index].name = this.nameEdit;
    this.users[index].username = this.usernameEdit;
    this.users[index].email = this.emailEdit;
    this.users[index].address.street = this.addressEdit.streetEdit;
    this.users[index].address.suite = this.addressEdit.suiteEdit;
    this.users[index].address.city = this.addressEdit.cityEdit;
    this.users[index].address.zipcode = this.addressEdit.zipcodeEdit;
    this.users[index].phone = this.phoneEdit;
    this.idEdit = "";
    alert("Cap nhap thanh cong!!");
  }
  editUser(id: any):void{
    this.idEdit = id;
    let index = this.users.findIndex((u: { id: any; })=> u.id == id);
    this.nameEdit = this.users[index].name;
    this.usernameEdit = this.users[index].username;
    this.emailEdit = this.users[index].email;
    this.addressEdit.streetEdit = this.users[index].address.street;
    this.addressEdit.suiteEdit = this.users[index].address.suite;
    this.addressEdit.cityEdit = this.users[index].address.city;
    this.addressEdit.zipcodeEdit = this.users[index].address.zipcode;
    this.phoneEdit = this.users[index].phone;
  }

}
