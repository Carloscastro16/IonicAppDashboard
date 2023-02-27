import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  private places = [
    {
      id: '1',
      title: 'Deku',
      imgURL:'https://static.wikia.nocookie.net/bokunoheroacademia/images/d/d9/Izuku_Midoriya_school_profile.png/revision/latest/smart/width/250/height/250?cb=20190129015623',
      comments: 'quirk: All for one'
    },
    {
      id: '2',
      title: 'Todoroki',
      imgURL:'https://o.quizlet.com/CRPpA1BzbOdL-34VtYjKmQ.jpg',
      comments: 'quirk: Mitad fuego Mitad Hielo'
    }
  ];
  constructor() {}

  ngOnInit() {
    
  }

}
