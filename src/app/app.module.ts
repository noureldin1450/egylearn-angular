import { SearchpageModule } from './searchpage/searchpage.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { CompModule } from './shared/comp/comp.module';
import { HomepageModule } from './homepage/homepage.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CompModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HomepageModule,
    SearchpageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
