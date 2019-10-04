import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-choose-card',
  templateUrl: './choose-card.component.html',
  styleUrls: ['./choose-card.component.css'],
  providers: [HeroService]
})
export class ChooseCardComponent implements OnInit {
  public heroes: Hero[] = [];

  constructor(
    private heroService: HeroService
  ) { }

  public ngOnInit() {
    this.heroService.getAllHeroes().subscribe((x) => {this.heroes = x;});
  }
}
