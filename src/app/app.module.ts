import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ApiCustomOrderService } from '../custom/api-order.service';
import { ApiCoreOrderService } from '../core/api-order.service';
import { ApiCoreResourceService } from '../core/api-resource.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ApiCustomOrderService, ApiCoreOrderService, ApiCoreResourceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
