import { Component, OnInit } from '@angular/core';
import { CoinSettings, SideSettings } from '../../models/coin';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-star',
  templateUrl: './project-star.component.html',
  styleUrls: ['./project-star.component.scss']
})
export class ProjectStarComponent implements OnInit {

  title: string = "KGrafen";
  description: string;
  defaultDescription: string = `HoloMedicine
  <br> HoloArt HoloApplications HoloAlgorithm
  <br> HoloSmart HoloSustainability HoloSystems HoloSimulations
  <br> HoloTechnology HoloTherapies HoloTunnels Holotomography
  <br> HoloEducation HoloEmulation
  <br> HoloResearch`

  coins: CoinSettings[] = [
    new CoinSettings(["Research"], { theme:  "purple" }, [], { url: this.getFctcoinUrl(".2") }),
    new CoinSettings(["Education", "Emulation"], { theme: "indigo" }, [], { url: this.getFctcoinUrl(".5") }),
    new CoinSettings(["Medicine"], { theme: "red" }, [], { url: this.getFctcoinUrl("10") }),
    new CoinSettings(["Holo Master"], { theme: "beige" }, [], { url: "https://quantumfunds.files.wordpress.com/2018/11/factom.png" }),
    new CoinSettings(["Technology", "Therapies", "Tunnels", "Tomography"], { theme: "turquoise" }, [], { url: this.getFctcoinUrl("1") }),
    new CoinSettings(["Artificial Intelligence", "Applications", "Algorithm"], { theme: "orange" }, [], { url: this.getFctcoinUrl("5") }),
    new CoinSettings(["Smart", "Sustainability", "Systems", "Simulations"], { theme: "olive" }, [], { url: this.getFctcoinUrl("2") }),
  ]

  projects = [
    {name: "Energie Odnawialne",   style: { top: "158px",  left: "calc(50% - 3px)",   transform: "translateX(-100%)"}},
    {name: "Elektronika",          style: { top: "300px",  left: "calc(50% - 86px)",  transform: "translateX(-100%)"}},
    {name: "Elektromobilnosc",     style: { top: "445px",  left: "calc(50% - 3px)",   transform: "translateX(-100%)"}},
    {name: "Materialy",            style: { top: "445px",  left: "calc(50% + 3px)",   transform: "translateX(0%)"}},
    {name: "Elektrotechnika",      style: { top: "300px",  left: "calc(50% + 86px)",  transform: "translateX(0%)"}},
    {name: "Kompozyty",            style: { top: "158px",  left: "calc(50% + 3px)",   transform: "translateX(0%)"}},
  ]
  



  starBgUrl: string;
  starIndex: number;
  currentStep: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) { 
  }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.currentStep = (params.project)? params.project : "KGrafen";
      this.title = this.currentStep;
      this.description = (this.currentStep == "KGrafen")? this.defaultDescription: "";
    });

  }

  iterateStarBg() {
    this.starIndex = (this.starIndex == 1)? 2: 1;
    this.starBgUrl = `https://quantumfunds.files.wordpress.com/2018/11/12star_h_${this.starIndex}.png`;
  }

  getFctcoinUrl(value) {
    return `http://quantumfoundation.eu/wp-content/uploads/2017/06/FCTcoins_${value}_512.png`;
  }

  getHexSide(settings: SideSettings, size) {
    return {
      'background-image': 'url(' + settings.Url + ')',
      'background-color': settings.BackgroundColor,
      'color': settings.TextColor,
      'background-size': size,
      'background-repeat': 'no-repeat',
    }
  }

  selectHex(obverse, event: MouseEvent) {
  }

  selectProject(project) {
    if (project.name != "Put in Your Hologram for Holopedia Li") {
      this.router.navigate(['/hologram'], { queryParams: {'project': project.name} });
    } else {
      this.router.navigate(['/hologram']);
    }
  }

}
