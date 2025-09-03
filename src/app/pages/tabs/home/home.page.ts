import { Component, OnInit } from '@angular/core';
//import { CommonModule } from '@angular/common';
//import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonToolbar, IonItem, IonLabel, IonText, IonButton, IonIcon, IonRow, IonCol,IonSearchbar,IonRouterLink } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { cart, chevronDownOutline, notificationsOutline, options } from 'ionicons/icons';
//import { IonRouterLink } from "../../../../../node_modules/@ionic/angular/standalone/navigation/router-link-delegate";

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonToolbar, IonItem, IonLabel, IonIcon, IonText, IonButton, IonRow, IonCol, IonSearchbar, IonRouterLink]
})
export class HomePage implements OnInit {

  constructor() {
    addIcons({
      chevronDownOutline, cart, notificationsOutline, options
    })
   }

  ngOnInit() {
  }

}
