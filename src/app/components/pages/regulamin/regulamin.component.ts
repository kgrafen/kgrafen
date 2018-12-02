import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-regulamin',
  templateUrl: './regulamin.component.html',
  styleUrls: ['./regulamin.component.scss']
})
export class RegulaminComponent implements OnInit {

  constructor() { }
  
  menu = [
    {name: "Deklaracja", link:"regulamin#deklaracja"},
    {name: "Uchwała", link:"regulamin#uchwala"},
    {name: "Regulamin", link:"regulamin#regulamin"},
    {name: "Statut", link:"regulamin#statut"},
  ];

  pdfSrc = "assets/images/regulamin/statutSEP.pdf"

  ngOnInit() {
  }

}
