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

  constructor(private router:Router){
    this.analyticsId = environment.analyticsId;
    
    const navEndEvents = router.events.pipe(
      filter(event => event instanceof NavigationEnd),
    );

    //for every url change
    navEndEvents.subscribe((event: NavigationEnd) =>{
      console.log(event, this.analyticsId);
      gtag('config', this.analyticsId,{
        'page_path': event.urlAfterRedirects
      });
    });
  }


}
