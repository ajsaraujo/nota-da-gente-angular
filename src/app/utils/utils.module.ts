import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './ui/navbar/navbar.component';
import {ButtonModule} from 'primeng/button';
import {SidebarModule} from 'primeng/sidebar';
import {TieredMenuModule} from 'primeng/tieredmenu';

@NgModule({
  declarations:[NavbarComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ButtonModule,
    SidebarModule,
    TieredMenuModule
  ],
  exports:[NavbarComponent]
})
export class UtilsModule { }
