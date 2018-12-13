import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, RoutesRecognized } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
  title = 'KGrafen';
  showNavigation: boolean = true;
  outletWidth: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private translate: TranslateService,
  ) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('gb');
     // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('pl');
  }

  ngOnInit() {

    this.router.events.subscribe(val => {
      if (val instanceof RoutesRecognized) {
        this.showNavigation = !val['url'].startsWith('/hologram');
        this.outletWidth = (val['url'].startsWith('/hologram'))? 100 : 80;
      }
    });

    this.route.params.subscribe(params => {
    });
  }
}
