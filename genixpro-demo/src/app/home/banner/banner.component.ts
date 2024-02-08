import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicSlides } from '@ionic/angular';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BannerComponent  implements OnInit {

  @Input() slides: any[] = [];
  swiperModules = [IonicSlides];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  change(slide: any){
    console.log(slide);
  }

  loadLogin(): void{
    this.router.navigateByUrl('/login');
  }

}
