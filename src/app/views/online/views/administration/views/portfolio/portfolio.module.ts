import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { PortfolioComponent } from './portfolio.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [PortfolioComponent],
})
export class PortfolioModule {}
