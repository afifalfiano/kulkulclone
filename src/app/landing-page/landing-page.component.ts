import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit, OnDestroy {
  buttonTop: any;
  constructor() { }
  ngOnDestroy(): void {
    if(this.buttonTop) {
      clearInterval(this.buttonTop);
    }
  }

  ngOnInit() {

    this.hiddenButton();
    this.buttonTop = setInterval(
      () => {
        this.hiddenButton();
      }, 1000
    )
}

hiddenButton() {
    const ontop = document.getElementById('ontop');
      const {y} = document.body.getBoundingClientRect();
      if (y > -700) {
        if (ontop) {
          ontop.style.visibility = 'hidden';
        }
    } else {
      if(ontop) {
        ontop.style.visibility = 'visible';
      }
    }
}

  onTop() {
    const top = document.querySelector('#top');
    const hero = document.querySelector('#hero-comp');
    
      if (top) {
        top.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
      }
  }

}
