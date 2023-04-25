import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { LoginPage } from '../login/login.page';
import { AlertController } from '@ionic/angular';




@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  apiUrl = 'https://reqres.in/api/register/data';
  email = '';
  password = '';
  name = '';
  public alertButtons = ['OK'];


  constructor(private http: HttpClient,private navCtrl: NavController) { }

  ngOnInit() {
  }
  goToSecondPage() {
    this.navCtrl.navigateForward('/login');
  }
  register() {
    const data = {
       email: this.email,
       password: this.password,
       name:this.name
     
    };

    this.http.post(this.apiUrl, data).subscribe((response) => {
      console.log(response);
    });
  }

  


}
