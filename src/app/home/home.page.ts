import { Component } from '@angular/core';
import { logins } from '../login';
import { ServicesService } from '../services.service';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { User } from '../Users';
import { LoginPage } from '../login/login.page';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  userList:User[]=[];

  constructor(private http: HttpClient , private services:ServicesService,private navCtrl: NavController) {}

  ngOnInit() {
    this.services.getUserList().subscribe(yaz=>{
      this.userList=yaz['data']
      console.log(this.userList)
    })
  }
  goToSecondPage() {
    this.navCtrl.navigateForward('/login');
  }

}
