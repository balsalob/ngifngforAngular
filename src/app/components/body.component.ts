import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent { 

  mostrar:boolean = true;

  texto:string = "Un gran poder, conlleva una gran responsabilidad";
  autor:string = "Ben parker";

  personajes:string[] = ["spiderman", "venon", "Doctor Octopus"]

}