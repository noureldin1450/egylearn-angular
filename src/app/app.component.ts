import { filter } from 'rxjs/operators';
import { environment } from './../environments/environment';
import { NavigationEnd, Router } from '@angular/router';
import { Component } from '@angular/core';

declare var gtag;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  analyticsId:string;

  constructor(router:Router){
    this.analyticsId = environment.analyticsId;
    
    const navEndEvents = router.events.pipe(
      filter(event => event instanceof NavigationEnd),
    );

    console.log(this.analyticsId);
    //for every url change
    navEndEvents.subscribe((event: NavigationEnd) =>{
      gtag('config', this.analyticsId,{
        'page_path': event.urlAfterRedirects
      });
    });
  }


}
