import { Component } from '@angular/core';
import { ApiCustomOrderService } from '../custom/api-order.service';
import { ApiCoreResourceService } from '../core/api-resource.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'api-patterns';

  constructor(private orderApi: ApiCustomOrderService, private resourceApi: ApiCoreResourceService) {
    orderApi.getSomething(); // ApiCustomOrderService
    resourceApi.getSomething(); // ApiCoreResourceService
  }
}
