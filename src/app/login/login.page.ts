import { Component, OnInit } from '@angular/core';
import { logins } from '../login';
import { ServicesService } from '../services.service';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { RegisterPage } from '../register/register.page';
import { HomePage } from '../home/home.page';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  login:logins[]=[];
  lol=new logins();
  email!: string;
  sifre!:string;
  apiUrl = 'https://reqres.in/api/login/data';

  constructor(private http: HttpClient , private services:ServicesService,private navCtrl: NavController) { }

  ngOnInit() {
    this.services.getRegister().subscribe(yaz=>{
      this.login=yaz['data']
      console.log(this.login)
    })
  }
  goToSecondPage() {
    this.navCtrl.navigateForward('/register');
  }

  postData() {
    const data = {
      email: this.email,
      sifre: this.sifre,
    };

    this.http.post(this.apiUrl, data).subscribe((response) => {
      console.log(response);
    });

    this.navCtrl.navigateForward('/home');
  }
  getPost(){
    this.login.push(this.lol)


    this.http
    .post(
      'https://reqres.in/api/register',
      
      
       this.lol
      
    )
     .subscribe(
      (response) => {
         console.log('response', this.login);
       
       },
       (error) => {
         console.log(error);
       }
     );
  }

}
