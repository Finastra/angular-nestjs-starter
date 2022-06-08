import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { ProxyService, PROXY_URL } from '@finastra/services/proxy';
import { Cat } from './cats.interface';
import { CATS_SERVICE } from './cats.token';

@Injectable({
  providedIn: 'any',
})
export class CatsService extends ProxyService {
  constructor(
    @Inject(CATS_SERVICE) serviceId: string,
    http: HttpClient,
    @Inject(PROXY_URL) proxyUrl: string
  ) {
    super(serviceId, http, proxyUrl);
  }

  getCats() {
    return this.get<Cat[]>(`images/search`);
  }
}
