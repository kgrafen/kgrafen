import { Component, OnInit } from '@angular/core';
import { HologramsService } from '../../../services/holograms/holograms.service';
import { ProjectsService } from '../../../services/projects/projects.service';
// import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  projectsNames: string[];
  sourcesNames: string[];
  title: string;

  constructor(
    public hologramsService: HologramsService,
    private projectsService: ProjectsService,
    // private translateService: TranslateService,
    ) {
    // this.translateService.get('PAGES.HOME').subscribe(value => this.title = value);
  }

  ngOnInit() {
    this.projectsNames = this.projectsService.MasterProjectsNames;
    this.sourcesNames = this.hologramsService.Sources;
  }

}
