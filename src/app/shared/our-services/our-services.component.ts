import { Component, OnInit } from '@angular/core';
import { faPhoneSquare, faPhone } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.scss']
})
export class OurServicesComponent implements OnInit {
  faPhone = faPhone;
  constructor() { }

  ngOnInit(): void {
  }

}
