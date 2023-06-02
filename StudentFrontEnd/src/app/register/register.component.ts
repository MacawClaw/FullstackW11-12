import { HttpClient } from '@angular/common/http';
import { Component, Output, EventEmitter } from '@angular/core';
import { AccountRegistration } from '../services/AccountRegistration';
import { DataGatewayService } from '../services/data-gateway.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  firstname!: string;
  lastname!: string;
  email!: string; 
  password!: string;
  role: string="student";

  constructor(private http: HttpClient, private dataService: DataGatewayService){}

  save() {
    if (!this.firstname || !this.lastname || !this.email || !this.password) {
      alert('Please enter required information.')
      return;
    }

    const accountRegistration: AccountRegistration = {
      firstname: this.firstname,
      lastname: this.lastname,
      email: this.email,
      password: this.password,
      role: this.role
    };

    console.log(accountRegistration);

    let resultData: any =
      this.dataService.getAccountRegistered(accountRegistration).subscribe((accountRegistration) => resultData);
    
    console.log(resultData);
    alert("student registered successfully");
  }

}

/*
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
*/
