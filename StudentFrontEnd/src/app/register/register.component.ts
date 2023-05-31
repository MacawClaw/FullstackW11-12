import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  firstname: string = "";
  lastname: string = "";
  email: string = ""; 
  password: string = "";
  role: string="student";

  constructor(private http: HttpClient){}

  save(){
    let bodyData = {
      "userFirstName" : this.firstname,
      "userLastName" : this.lastname,
      "email" : this.email,
      "password" : this.password,
      "role" : this.role
    };
    this.http.post("http://localhost:8080/api/v1/user/save", bodyData, {responseType: 'text'}).subscribe((resultData: any) =>
    {
      console.log(resultData);
      alert("student registered successfully");
    });
  }


}
