import { Component, OnInit } from '@angular/core';
import { BannerComponent } from './banner/banner.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],

})
export class HomePage  implements OnInit{

  slides: any[] = [];

  constructor() {}

  ngOnInit(): void {
    this.slides = [
      {banner: 'assets/images/group1.png',
       topText:'Welcome to GenixPRO',
      bottomText:'AI powered, Human led co-pilot to live healthy, longer.' },

      {banner: 'assets/images/image1.jpg',
       topText:'Advanced Diagnostics',
      bottomText:'All-in-one comprehensive health check. DNA, Gut, Labs, Imaging' },

      {banner: 'assets/images/image3.jpg',
       topText:'Generate Your Health Plan',
      bottomText:'Generate Your Health Plan clinical and lifestyle interventions.' },

      {banner: 'assets/images/image4.jpeg',
       topText:' Track Your Health',
      bottomText:'Gain a comprehensive view of all your health information.' },

      {banner: 'assets/images/image5.jpeg',
       topText:'Electronic Health Records',
      bottomText:'Securely manage your family health records. Access any time, anywhere.' }

    ];


  }

}
