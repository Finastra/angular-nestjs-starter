import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GlobalNavModule } from '@finastra/angular-components/global-nav';
import { CATS_API_PROXY_TOKEN } from '@finastra/api-interfaces';
import { PROXY_URL } from '@finastra/services/proxy';
import { CATS_SERVICE } from 'libs/services/cats/src/lib/cats.token';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    GlobalNavModule,
    AppRoutingModule,
  ],
  providers: [
    { provide: PROXY_URL, useValue: '/proxy' },
    { provide: CATS_SERVICE, useValue: CATS_API_PROXY_TOKEN },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
