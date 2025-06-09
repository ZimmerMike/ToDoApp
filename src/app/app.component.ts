import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonContent } from '@ionic/angular/standalone';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [
    AmplifyAuthenticatorModule,
    IonApp,
    IonButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonRouterOutlet,
    IonTitle,
    IonToolbar,
  ],
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor() {}
}
