import { Component } from '@angular/core';
import { LoadingController, NavController, NavParams } from 'ionic-angular';
/**
 * Generated class for the SignInPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html',
})
export class SignInPage {
  items;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,public loadingCtrl: LoadingController) {
      this.initializeItems();
    }
    initializeItems() {
      this.items = [
        'Amsterdam',
        'Bogota',
        'Buenos Aires',
        'Cairo',
        'Dhaka',
        'Edinburgh',
        'Geneva',
        'Genoa',
        'Glasglow',
        'Hanoi',
        'Hong Kong',
        'Islamabad',
        'Istanbul',
        'Jakarta',
        'Kiel',
        'Kyoto',
        'Le Havre',
        'Lebanon',
        'Lhasa',
        'Lima',
        'London',
        'Los Angeles',
        'Madrid',
        'Manila',
        'New York',
        'Olympia',
        'Oslo',
        'Panama City',
        'Peking',
        'Philadelphia',
        'San Francisco',
        'Seoul',
        'Taipeh',
        'Tel Aviv',
        'Tokio',
        'Uelzen',
        'Washington',
        'Akash',
        'vishal',
        'Navya'
      ];
    }
    getItems(ev) {
      // Reset items back to all of the items
      this.initializeItems();
  
      // set val to the value of the ev target
      var val = ev.target.value;
  
      // if the value is an empty string don't filter the items
      if (val && val.trim() != '') {
        this.items = this.items.filter((item) => {
          return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
        })
      }
    }
    presentLoading() {
      this.loadingCtrl.create({
        content: 'Please wait...',
        duration: 3000,
        dismissOnPageChange: true
      }).present();
    }
}