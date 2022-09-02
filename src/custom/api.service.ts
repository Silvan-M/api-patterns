import { ApiCoreService } from '../core/api.service';
import { ApiCoreResourceService } from '../core/api-resource.service';
import { ApiCustomOrderService } from './api-order.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService extends ApiCoreService {
  constructor(order: ApiCustomOrderService, resource: ApiCoreResourceService) {
    super(order, resource);
  }
}
