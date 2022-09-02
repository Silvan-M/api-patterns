import { Component } from '@angular/core';

import { ApiService } from '../custom/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'api-patterns';

  constructor(private api: ApiService) {
    api.order.getSomething(); // ApiCustomOrderService
    api.resource.getSomething(); // ApiCoreResourceService
  }
}
