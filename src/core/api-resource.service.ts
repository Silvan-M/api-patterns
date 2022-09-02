import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiCoreResourceService {
  constructor() {
  }

  getSomething() {
    console.log('ApiCoreResourceService');
    return 'ApiCoreResourceService';
  }
}
