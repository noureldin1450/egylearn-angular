import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchpageComponent } from './searchpage/searchpage.component';
import { IframePipe } from '../iframe.pipe';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    SearchpageComponent,
    IframePipe
  ],
  imports: [
    RouterModule,
    CommonModule
  ],
  exports:[
    IframePipe
  ]
})
export class SearchpageModule { }
