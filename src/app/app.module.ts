import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { HttpClientModule } from  '@angular/common/http';

import { BodyComponent } from './components/body/body.component';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './components/card/card.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { PageComponent } from './components/page/page.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';


@NgModule({
  declarations: [
    AppComponent,CardComponent,
    PageComponent,BodyComponent
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    NgxSkeletonLoaderModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
