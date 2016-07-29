import {Component, Type, ViewChild, ViewEncapsulation} from '@angular/core'
import { Ng2MessagePopupComponent, Ng2PopupComponent} from 'ng2-popup';

@Component({
  template: `
    <p>This is custom popup</p>
    {{number}} <button (click)="number = number+1">increase number</button><br/>
    <button (click)="popup.close()">close</button>
  `
})
class CustomPopupComponent {
  number: number = 0;
}

@Component({
  selector: 'my-app',
  template: `
    `,
  directives: [Ng2PopupComponent],
  encapsulation: ViewEncapsulation.None,
  styles: [`
   .popup-container.custom {
     width: 200px; height: 200px; background: navy; color: #fff; text-align: center
   }
  `]
})
export class AppComponent {

  @ViewChild(Ng2PopupComponent) popup: Ng2PopupComponent;
  message: string;

  constructor() {}

  openPopup(size, title) {
    this.popup.open(Ng2MessagePopupComponent, {
      classNames: size,
      title: title,
      message: "This is message given using popup.open()",
      buttons: {
        OK: () => {
          this.message = "Ok button is pressed";
        },
        CANCEL: () => {
          this.message = "Cancel button is pressed";
          this.popup.close();
        }
      }
    });
  }
  
  openCustomPopup() {
    this.popup.open(CustomPopupComponent, {
      classNames: 'custom',
      closeButton: false,
    });
  }
}
