import { ApiCoreOrderService } from './api-order.service';
import { ApiCoreResourceService } from './api-resource.service';

export abstract class ApiCoreService {
  protected constructor(public order: ApiCoreOrderService, public resource: ApiCoreResourceService) {
  }
}
