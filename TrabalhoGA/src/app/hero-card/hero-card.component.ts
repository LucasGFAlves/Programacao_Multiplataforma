import { Component, Input } from '@angular/core';
import { Hero } from '../hero';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.css']
})
export class HeroCardComponent {
  @Input() hero: Hero;

  constructor(private router: Router) { }

  onChoose() {
    this.router.navigate(['/hero', this.hero.id]);
  }

}
