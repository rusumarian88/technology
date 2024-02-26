import { Component, OnInit } from '@angular/core';
import { ProcessesService } from 'src/app/services/processes.service';

@Component({
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  

  constructor(

    public processesServices:ProcessesService,

  ) { }

  ngOnInit(): void {
  }

}
