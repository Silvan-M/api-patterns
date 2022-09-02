import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ApiCoreOrderService } from '../core/api-order.service';
import { ApiCoreResourceService } from '../core/api-resource.service';
import { ApiService } from '../custom/api.service';
import { ApiCustomOrderService } from '../custom/api-order.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ApiService, ApiCoreOrderService, ApiCoreResourceService, ApiCustomOrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
