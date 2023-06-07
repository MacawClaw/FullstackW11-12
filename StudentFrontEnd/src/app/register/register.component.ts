import { Component, Output, EventEmitter } from '@angular/core';
import { AccountRegistration } from '../services/AccountRegistration';
import { DataGatewayService } from '../services/data-gateway.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  userFirstName!: string;
  userLastName!: string;
  email!: string; 
  password!: string;
  role!: string;
  registrationMessage:string|undefined;

  constructor(private router: Router,private dataService: DataGatewayService){}

  save() {
    if (!this.userFirstName || !this.userLastName || !this.email || !this.password || !this.role) {
      alert('Please enter required information.')
      return;
    }

    const accountRegistration: AccountRegistration = {
      userFirstName: this.userFirstName,
      userLastName: this.userLastName,
      email: this.email,
      password: this.password,
      role: this.role
    };

    console.log(accountRegistration);

    let resultData: any =
      this.dataService.getAccountRegistered(accountRegistration).subscribe((accountRegistration) => resultData);
    
    this.registrationMessage = "Registered Successfully";
   
    setTimeout(() => {
      this.registrationMessage=undefined;
      this.router.navigateByUrl('/login');
    }, 2000);
    //console.log(resultData);
    
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
