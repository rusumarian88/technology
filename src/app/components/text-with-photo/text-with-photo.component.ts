import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-with-photo',
  templateUrl: './text-with-photo.component.html',
  styleUrls: ['./text-with-photo.component.scss']
})
export class TextWithPhotoComponent implements OnInit {

  @Input() title:string=""
  @Input() description:string=""
  @Input() button:string=""
  @Input() photo:string=""
  @Input() rowReverse:boolean=false

  constructor() { }

  ngOnInit(): void {
  }

}
