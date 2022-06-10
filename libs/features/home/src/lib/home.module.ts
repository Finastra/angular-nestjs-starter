import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { SkeletonTextModule } from '@finastra/angular-components/skeleton-text';
import { ServicesCatsModule } from '@finastra/services/cats';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    SkeletonTextModule,
    RouterModule.forChild([{ path: '', pathMatch: 'full', component: HomeComponent }]),
    ServicesCatsModule,
  ],
  declarations: [HomeComponent],
})
export class HomeModule {}
