import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [
    AmplifyAuthenticatorModule,
    IonApp,
    IonRouterOutlet
  ],
})
export class AppComponent {
  constructor() {}
}
