import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage/homepage.component';
import { SearchpageComponent } from './searchpage/searchpage/searchpage.component';

const routes: Routes = [
  {path:'', component: HomepageComponent},
  {path:'search', component: SearchpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
