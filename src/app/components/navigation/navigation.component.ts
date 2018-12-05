import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../models/menu-item';
import { Router, ActivatedRoute, RoutesRecognized } from '@angular/router';
import { CoinSettings, SideSettings } from '../models/coin';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {


  menuItems: MenuItem[] = [];



  constructor(
    private route: ActivatedRoute,
    private translateService: TranslateService,
    private router: Router,
  ) {

  }

  Math: any = Math;
  doctorCoin: CoinSettings = new CoinSettings(["Holo Doctor"], { theme: "purple" }, [], { url: "http://quantumfoundation.eu/wp-content/uploads/2018/08/eth_back.png" });
  qfCoin: CoinSettings = new CoinSettings("", { url:"https://quantumfunds.files.wordpress.com/2018/11/12star8frameqf.png", theme: "purple" }, [], { url: "http://quantumfoundation.eu/wp-content/uploads/2018/08/eth_back.png" });
  itemHoveredName: string;
  itemPreviewName: string;
  itemSelected: MenuItem;

  ngOnInit() {
    this.loadGlobe();

    this.translateService.onLangChange.subscribe(value => {
      let menuItemsTranslation = value.translations.NAVIGATION.ITEMS;
      this.menuItems = [
        new MenuItem(menuItemsTranslation["HOME"], "/home", "#b9d4ec"),
        new MenuItem(menuItemsTranslation["CONTACT"], "/contact", "#ffe2b9"),
        new MenuItem(menuItemsTranslation["SOCIAL"], "/social", "#f1c5f3"),
        new MenuItem(menuItemsTranslation["PROJECTS"], "/projects", "#caecf7"),
        new MenuItem(menuItemsTranslation["MISSION_VISION"], "/misja", "#bff5af"),
        new MenuItem(menuItemsTranslation["FORUM"], "/forum", "#ece6ac"),
        new MenuItem(menuItemsTranslation["DECLARATION"], "/regulamin", "#fa96ab"),
      ];

      this.router.events.subscribe(val => {
        if (val instanceof RoutesRecognized) {
          let selItem = this.menuItems.find(item => item.Link == val.url);
          this.itemSelected = (selItem)? selItem: this.menuItems[0];
          this.itemPreviewName = (!this.itemSelected.Settings.HasPreview) ? this.itemSelected.Name : "";
          this.itemHoveredName = this.itemSelected.Name;
        }
      });
    });
  }

  loadGlobe() {
    let revolverMaps = <HTMLDivElement>document.getElementById("revolverMaps");
    let script = document.createElement('script');
    script.innerHTML = '';
    script.src = '//rf.revolvermaps.com/0/0/8.js?i=546m1nalp12&amp;m=0&amp;c=ff0000&amp;cr1=ffffff&amp;f=arial&amp;l=33';
    script.async = true;
    script.defer = true;
    revolverMaps.appendChild(script);
  }

  getHexSide(settings: SideSettings, size?) {
    return {
      'background-image': 'url(' + settings.Url + ')',
      'background-color': settings.BackgroundColor,
      'color': settings.TextColor,
      'background-size': size,
      'background-repeat': 'no-repeat',
    }
  }

  menuItemClicked(item: MenuItem) {
    if (item.Settings.IsExternalLink) {
      window.open(item.Link, '_blank');
    } else {
      this.router.navigate([item.Link]);
    }
  }

  menuItemHovered(item: MenuItem) {
    this.itemPreviewName = (!item.Settings.HasPreview) ? item.Name : "";
    this.itemHoveredName = item.Name;
  }

  menuItemBlur() {
    if(this.itemSelected) {
      this.itemPreviewName = (!this.itemSelected.Settings.HasPreview) ? this.itemSelected.Name : "";
      this.itemHoveredName = this.itemSelected.Name;
    }
  }

  sineVal(i, l) {
    let shifted = i - (l - 1) / 2;
    return Math.cos(shifted * 0.01) * 1600 - 1600;
  }

}
