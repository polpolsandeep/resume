import { Component } from '@angular/core';
import { Footer } from '../footer/footer';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-skills',
  imports: [Footer, RouterLink],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {}
