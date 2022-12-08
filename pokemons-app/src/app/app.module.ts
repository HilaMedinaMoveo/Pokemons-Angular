import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgxPaginationModule} from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import {HttpClientModule} from '@angular/common/http';
import { CardsComponent } from './components/cards/cards.component';
import { ButtonComponent } from "./components/button/button.component";

@NgModule({
    declarations: [
        AppComponent,
        CardComponent,
        CardsComponent,
        ButtonComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        NgxPaginationModule,
       
    ]
})
export class AppModule { }
