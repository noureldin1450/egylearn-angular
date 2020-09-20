import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavComponent } from '../../comp/nav/nav.component';
import { FooterComponent } from '../../comp/footer/footer.component';

const comp:any = [
  NavComponent,
  FooterComponent
]

@NgModule({
  declarations: [
    ...comp
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    ...comp
  ]
})
export class CompModule { }
