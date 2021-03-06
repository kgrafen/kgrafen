import { BrowserModule } from '@angular/platform-browser';
import { NgModule, InjectionToken } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { CoinComponent } from './components/elements/coin/coin.component';
import { HomeComponent } from './components/pages/home/home.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { SocialComponent } from './components/pages/social/social.component';
import { ProjectsComponent } from './components/pages/projects/projects.component';
import { GamesComponent } from './components/pages/games/games.component';
import { FacebookModule } from 'ngx-facebook';
import { NgxTwitterTimelineModule } from 'ngx-twitter-timeline';
import { EmbedVideo } from 'ngx-embed-video/dist';
import { ProjectStarComponent } from './components/elements/project-star/project-star.component';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';

// Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { SafePipe } from './pipes/safe.pipe';
import { HologramComponent } from './components/pages/hologram/hologram.component';
import { CategoriesComponent } from './components/elements/categories/categories.component';
import { HologramsListComponent } from './components/elements/holograms-list/holograms-list.component';
import { AddHologramComponent } from './components/elements/add-hologram/add-hologram.component';
import { MisjaComponent } from './components/pages/misja/misja.component';
import { WizjaComponent } from './components/pages/wizja/wizja.component';
import { RegulaminComponent } from './components/pages/regulamin/regulamin.component';
import { ForumComponent } from './components/pages/forum/forum.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';

import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { FlagsComponent } from './components/elements/flags/flags.component';
import { ExternalLinkComponent } from './components/elements/external-link/external-link.component';
import { ActivatedRouteSnapshot } from '@angular/router';

 // AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/translations/', '.json');
}

// export const externalUrlProvider = new InjectionToken('externalUrlRedirectResolver');

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    NavigationComponent,
    CoinComponent,
    HomeComponent,
    ContactComponent,
    SocialComponent,
    ProjectsComponent,
    GamesComponent,
    ProjectStarComponent,
    FlagsComponent,
    SafePipe,
    HologramComponent,
    CategoriesComponent,
    HologramsListComponent,
    AddHologramComponent,
    MisjaComponent,
    WizjaComponent,
    RegulaminComponent,
    ForumComponent,
    ExternalLinkComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    EmbedVideo.forRoot(),
    FacebookModule.forRoot(),
    NgxTwitterTimelineModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase), // imports firebase/app needed for everything
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    PdfViewerModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
  ],
//   providers: [
//     {
//         provide: externalUrlProvider,
//         useValue: (route: ActivatedRouteSnapshot) => {
//             const externalUrl = route.paramMap.get('externalUrl');
//             window.open(externalUrl, '_blank');
//         },
//     },
//   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
