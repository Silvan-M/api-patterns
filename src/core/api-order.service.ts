import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class ApiCoreOrderService {
  constructor() {
  }

  getSomething() {
    console.log('ApiCoreOrderService');
    return 'ApiCoreOrderService';
  }
}
