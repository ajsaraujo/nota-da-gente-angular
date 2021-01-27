import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { BannerIntroComponent } from './components/banner-intro/banner-intro.component';
import { ExplicacaoBannerComponent } from './components/explicacao-banner/explicacao-banner.component';
import { ComoParticiparComponent } from './components/como-participar/como-participar.component';
import { EstatisticaComponent } from './components/estatistica/estatistica.component';


@NgModule({
  declarations: [HomeComponent, BannerIntroComponent, ExplicacaoBannerComponent, ComoParticiparComponent, EstatisticaComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
