import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() { }

  @HostListener('window:scroll')
  onWindowScroll() {
    let navElem = document.querySelector('.navbar');
    console.log(navElem);
    if (window.scrollY > 10) {
      navElem?.setAttribute('style', 'background-color: white !important');
    }
    else {
      navElem?.setAttribute('style', 'background-color: transparent !important');
    }
  }
}
