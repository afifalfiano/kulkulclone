import { HostListener } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-why-kulkul',
  templateUrl: './why-kulkul.component.html',
  styleUrls: ['./why-kulkul.component.scss']
})
export class WhyKulkulComponent implements OnInit {
  showCarousel = false;
  constructor() { }

  @HostListener('window:resize', ['$event'])
  onResize(event: { target: { innerWidth: any; }; }) {
    console.log(event.target.innerWidth);
    const width = event.target.innerWidth;
    if (width < 426) {
      this.showCarousel = true;
    } else {
      this.showCarousel = false;
    }
  }


  ngOnInit(): void {
  }

}
