import { ApiCoreService } from '../core/api.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService extends ApiCoreService {
  constructor() {
    super();
  }

  // Order

  override orderGetSomething() {
    console.log('ApiCustomOrderService');
    return 'ApiCustomOrderService';
  }

}
