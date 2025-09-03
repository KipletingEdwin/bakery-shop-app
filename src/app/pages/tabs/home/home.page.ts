import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonToolbar, IonItem, IonLabel, IonText, IonButton, IonIcon, IonRow, IonCol,IonSearchbar } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { chevronDownOutline } from 'ionicons/icons';
//import { IonSearchbar } from "../../../../../node_modules/@ionic/angular/standalone/directives/searchbar";

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonToolbar, IonItem, IonLabel, IonIcon, IonText, IonButton, IonRow, IonCol, IonSearchbar]
})
export class HomePage implements OnInit {

  constructor() {
    addIcons({
      chevronDownOutline
    })
   }

  ngOnInit() {
  }

}
