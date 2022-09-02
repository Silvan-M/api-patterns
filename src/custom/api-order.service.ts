import { ApiCoreOrderService } from '../core/api-order.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiCustomOrderService extends ApiCoreOrderService {
  constructor() {
    super()
  }

  override getSomething() {
    console.log('ApiCustomOrderService');
    return 'ApiCustomOrderService';
  }
}
