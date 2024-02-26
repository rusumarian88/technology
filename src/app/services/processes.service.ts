import { Injectable } from '@angular/core';

export interface Processes{
  icon?:string[];
  circle?:string[];
  title?:string;
  description:string;
}


@Injectable({
  providedIn: 'root'
})
export class ProcessesService {

  processes=[
    {
      icon:['/assets/icon-c1.png'],
      circle:"/assets/circle-c1.png",
      title:"Döküman Analizi",
      description:"Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.",
    },
    {
      icon:['/assets/icon-c2.png'],
      circle:"/assets/circle-c2.png",
      title:"Kabul ve Değerlendirme",
      description:"Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.",
    },
    {
      icon:['/assets/icon-c3.png'],
      circle:"/assets/circle-c3-4.png",
      title:"İş Kuralları Analizi",
      description:"Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.",
    },
    {
      icon:['/assets/icon-c4.png'],
      circle:"/assets/circle-c3-4.png",
      title:"Akış Diyagramları",
      description:"Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.",
    },
    {
      icon:['/assets/icon-c5.png'],
      circle:"/assets/circle-c5.png",
      title:"Paydaş Analizi",
      description:"Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.",
    },
    {
      icon:['/assets/icon-c6.png'],
        circle:"/assets/circle-c6.png",
      title:"Prototipleme",
      description:"Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.",
    }
  ]

  constructor() { }
}

