import { Component, OnInit } from '@angular/core';
//import { CommonModule } from '@angular/common';
//import { FormsModule } from '@angular/forms';
import { IonTabs, IonTabBar, IonTabButton, IonLabel, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons'
import { chatboxEllipses, heart, home, location, person } from 'ionicons/icons'

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
  standalone: true,
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel]
})
export class TabsPage implements OnInit {

  constructor() {
    addIcons({chatboxEllipses,home,location,heart,person })
   }

  ngOnInit() {
  }

}
