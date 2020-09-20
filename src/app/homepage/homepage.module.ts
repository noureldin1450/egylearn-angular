import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { SearchComponent } from '../comp/search/search.component';
import { FormsModule } from '@angular/forms';

const comp:any = [
  HomepageComponent,
  SearchComponent,
] 

@NgModule({
  declarations: [ 
    ...comp
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    ...comp
  ]
})
export class HomepageModule { }
