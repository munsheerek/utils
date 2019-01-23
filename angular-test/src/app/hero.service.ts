import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Hero } from './hero';
import { HEROS } from './mock-heros';
import { MessageService } from './message.service';
@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(private messageService: MessageService) { }
  getHeros(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heros');
    return of(HEROS);
  }

}
