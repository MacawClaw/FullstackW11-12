import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Login } from '../services/Login';
import { DataGatewayService } from '../services/data-gateway.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email!: string; 
  password!: string;

  constructor(private http: HttpClient, private router: Router, private dataService: DataGatewayService){}

  onSubmit() {
    if (!this.email || !this.password) {
      alert('Missing email or password.')
      return;
    }

    const loginData: Login = {
      email: this.email,
      password: this.password
    };

    console.log(loginData);

    let resultData: any =
      this.dataService.getLoginStatus(loginData).subscribe((loginData) => resultData);
    

    if (resultData.message == "Email does not exist") {
      alert("Email does not exist");
    }
    else if (resultData.message == "Login Success") {
      this.router.navigateByUrl('/home');
    }
    else {
      alert("Incorrect email or password");
    }  

    this.email='';
    this.password='';
  }

  /*
  login(){
    console.log(this.email);
    console.log(this.password);

    let bodyData = {
      email: this.email,
      password: this.password,
    };
    this.http.post("http://localhost:8080/api/v1/user/login", bodyData).subscribe((resultData: any) => {
    console.log(resultData);
    if (resultData.message == "Email does not exist") {
      alert("Email does not exist");
    }
    else if (resultData.message == "Login Success") {
      this.router.navigateByUrl('/home');
    }
    else {
      alert("Incorrect email or password");
    }
    
  });
  }
  */

}
