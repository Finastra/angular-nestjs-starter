import { HttpClient } from '@angular/common/http';

export class ProxyService {
  constructor(protected serviceId: string, private http: HttpClient, protected proxyUrl: string) {}

  protected get<T>(target: string) {
    return this.http.get<T>(this.proxyUrl, {
      params: {
        serviceId: this.serviceId,
        target,
      },
    });
  }
}
