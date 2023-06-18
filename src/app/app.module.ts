import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
// PrimeNG
import { TabMenuModule } from 'primeng/tabmenu';
import { MenubarModule } from 'primeng/menubar';
import { ChartModule } from 'primeng/chart';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { AvatarModule } from 'primeng/avatar';
// Angular Material 
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BarraComponent } from './dashboard/barra/barra.component';
import { SwipperGalleryComponent } from './dashboard/swipper-gallery/swipper-gallery.component';
import { Barra2Component } from './dashboard/barra2/barra2.component';
import { LineasComponent } from './dashboard/lineas/lineas.component';
import { ProgressBarComponent } from './dashboard/progress-bar/progress-bar.component';
import { Lineas2Component } from './dashboard/lineas2/lineas2.component';
import { TicketsComponent } from './dashboard/tickets/tickets.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BarraComponent,
    SwipperGalleryComponent,
    Barra2Component,
    LineasComponent,
    ProgressBarComponent,
    Lineas2Component,
    TicketsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatBadgeModule,
    TabMenuModule ,
    MenubarModule,
    AvatarModule,
    MatCardModule,
    ChartModule,
    MatGridListModule,
    CardModule,
    InputTextModule,
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
