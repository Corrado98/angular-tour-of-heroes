import { Component, OnInit } from '@angular/core';
import { Hero } from '../dto/hero';
import { HeroService } from '../services/hero-service/hero.service';

@Component({
  selector: 'app-heroes-material',
  templateUrl: './heroes-material.component.html',
  styleUrls: ['./heroes-material.component.css']
})
export class HeroesMaterialComponent implements OnInit {

  heroes: Hero[];

  constructor(private heroService: HeroService) {
  }

  add(name: string): void {
    console.log('CALLED')
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  ngOnInit() {
    this.getHeroes();
  }

}
