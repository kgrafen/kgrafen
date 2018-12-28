import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { HomeComponent } from './components/pages/home/home.component';
import { ProjectsComponent } from './components/pages/projects/projects.component';
import { SocialComponent } from './components/pages/social/social.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { GamesComponent } from './components/pages/games/games.component';
import { HologramComponent } from './components/pages/hologram/hologram.component';
import { MisjaComponent } from './components/pages/misja/misja.component';
import { WizjaComponent } from './components/pages/wizja/wizja.component';
import { RegulaminComponent } from './components/pages/regulamin/regulamin.component';
import { ForumComponent } from './components/pages/forum/forum.component';
import { ExternalLinkComponent } from './components/elements/external-link/external-link.component';
// import { externalUrlProvider } from './app.module';

const routes: Routes = [
  { path: 'home',  component: HomeComponent },
  { path: 'contact',  component: ContactComponent },
  { path: 'social',  component: SocialComponent },
  { path: 'projects',  component: ProjectsComponent },
  { path: 'misja',  component: MisjaComponent },
  { path: 'wizja',  component: WizjaComponent },
  { path: 'regulamin',  component: RegulaminComponent },
  { path: 'hologram',  component: HologramComponent },
  { path: 'forum',  component: ForumComponent },
  { path: 'hologram/:holoid',  component: HologramComponent },
  // individual holo master coin
  { path: 'projects/:project',  component: ProjectsComponent },
  // Default
  { path: '', component: HomeComponent },
//   {
//     path: 'externalRedirect',
//     resolve: {
//         url: externalUrlProvider,
//     },
//     // We need a component here because we cannot define the route otherwise
//     component: ExternalLinkComponent,
//   },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
