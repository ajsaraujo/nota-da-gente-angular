import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  mobileNavVisivel = false;
  navVisivel = false;
  headerVisible = true;

  ngOnInit(): void {
    this._ativarControleScroll()
  }

  constructor() {}


  private _ativarControleScroll() {
    const scrollHandler = () => {
      let scrollSavedPosition = window.scrollY;

      return () => {
        console.log(this.headerVisible)
        if (window.scrollY <= scrollSavedPosition){
          this.headerVisible = true;
        }else{
          this.headerVisible = false;
        }
         
        scrollSavedPosition = window.scrollY;
      };
    };

    window.addEventListener('scroll', scrollHandler());
  }
}
