import { Component, OnInit } from '@angular/core';
import { Cat, CatsService } from '@finastra/services/cats';
import { EMPTY, expand, filter, map, Observable } from 'rxjs';

@Component({
  selector: 'finastra-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  cat$: Observable<Cat>;

  constructor(private catsService: CatsService) {}

  ngOnInit(): void {
    const query$ = this.catsService.getCats().pipe(map((cats) => cats[0]));

    this.cat$ = query$.pipe(
      expand((cat) => (cat.hasOwnProperty('breeds') && cat.breeds.length > 0 ? EMPTY : query$)),
      filter((cat) => cat.breeds.length > 0)
    );
  }
}
