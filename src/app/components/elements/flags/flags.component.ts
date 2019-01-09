import { Component, OnInit } from '@angular/core';
// import {TranslateService} from '@ngx-translate/core';
 @Component({
  selector: 'app-flags',
  templateUrl: './flags.component.html',
  styleUrls: ['./flags.component.scss']
})
export class FlagsComponent implements OnInit {
   countryCodes: Array<string> = ['pl', 'gb'];
   constructor(
    // private translate: TranslateService
  ) { }
   ngOnInit() {
  }
   changeLanguage(code) {
     console.log('lang', code)
    // this.translate.use(code);
  }
 }