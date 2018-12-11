import { Component, OnInit } from '@angular/core';

declare var initCarousel: any;

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.scss']
})
export class ForumComponent implements OnInit {

  constructor() {
    initCarousel(this.carouselItem.length);
   }

  carouselItem = [
    {
      caption: "31st Nano Congress for Future Advancements, August 29-31, 2019 London, UK", 
      imageUrl: "assets/images/forum/nanocongress2019-87558.jpg", 
      link: "https://nanocongress.nanotechconferences.org/"
    },
    {
      caption: "Graphene, Advanced 2D Materials & Semiconductors, March 28-29, 2019 Orlando, Florida, USA", 
      imageUrl: "assets/images/forum/graphene2019-31844.jpg", 
      link: "https://graphene.conferenceseries.com/"
    },
    {
      caption: "Graphene & Carbon Nanotechnology, Nov 25-27, 2019, Tokyo, Japan", 
      imageUrl: "assets/images/forum/graphene-2019-60239.jpg", 
      link: "https://graphene.euroscicon.com/"
    },
    {
      caption: "9th World Congress & Expo on Nanotechnology & Material science, 14-16 October, 2019, Osaka, Japan", 
      imageUrl: "assets/images/forum/osaka2019.jpg", 
      link: "http://nanotekcongress.com/osaka/"
    },
    {
      caption: "GraphIn International Workshop, February 21-22, 2019, Real Jardín Botánico de Madrid, Spain", 
      imageUrl: "assets/images/forum/graphIn2019_cabecera.jpg", 
      link: "http://www.graphinconf.com/2019/index.php"
    },
    {
      caption: "GRAPHENE AUTOMOTIVE 2019, March 4 - 5, 2019, Detroit, Michigan, USA", 
      imageUrl: "assets/images/forum/graphenequatomotive2019.jpg", 
      link: "https://usa.graphene-automotive-conference.com/"
    },
  ]
  
  ngOnInit() {
  }

  rotationPause() {
    document.getElementById("carousel").setAttribute('style', 'animation-play-state: ' + 'pause');
  }

  rotationResume() {

  }

  spinRight(entered: boolean) {
    let animationDuration = (entered) ? "running" : "paused";
    document.getElementById("carousel-outer").setAttribute('style', 'animation-play-state: ' + animationDuration)
  }

  spinLeft(entered: boolean) {
    let animationDuration = (entered) ? "running" : "paused";
    document.getElementById("carousel-outerer").setAttribute('style', 'animation-play-state: ' + animationDuration)
  }

}
