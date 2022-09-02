import { ApiCoreOrderService } from './api-order.service';
import { ApiCoreResourceService } from './api-resource.service';

export abstract class ApiCoreService {
  public order: ApiCoreOrderService;
  public resource: ApiCoreResourceService;

  protected constructor() {
    this.order = new ApiCoreOrderService();
    this.resource = new ApiCoreResourceService();
  }
}
