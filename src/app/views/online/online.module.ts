import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnlineComponent } from './online.component';
import { OnlineRoutingModule } from './online-routing.module';

@NgModule({
  imports: [CommonModule, OnlineRoutingModule],
  declarations: [OnlineComponent],
})
export class OnlineModule {}
