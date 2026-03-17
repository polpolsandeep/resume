import { Component } from '@angular/core';
import { Skills } from '../skills/skills';

@Component({
  selector: 'app-carousel',
  imports: [Skills],
  templateUrl: './carousel.html',
  styleUrl: './carousel.css',
})
export class Carousel {}
