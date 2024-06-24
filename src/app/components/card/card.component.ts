import { Component, Input } from '@angular/core';
import { District } from '../../../models/district.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() district:District = {
    id:0,
    title:"",
    description:"",
    images:""
  }

  get cardBodyStyle() {
    return { 'background-image': `url(${this.district.images})`,'border-radius': '8px','background-size':'cover' };
  }
 
  //constructor() { }

}
