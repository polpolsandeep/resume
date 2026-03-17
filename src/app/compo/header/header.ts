import { Component } from '@angular/core';
import { Carousel } from '../carousel/carousel';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-header',
  imports: [Carousel, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {}
