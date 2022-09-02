# Services Pattern

See `src/core`, `src/custom` and `src/app/app.component.ts` 
for implementation.

This pattern is basically the same pattern as the instance- or 
wrapper-pattern, but just without a central Api file. It has the
advantage of being the simplest approach to a multi-file api. Every
domain has its own service/api. A component then imports only the
services it needs via injection.

Example:
```
constructor(private orderApi: ApiCustomOrderService, private resourceApi: ApiCoreResourceService) {
    orderApi.getSomething(); // ApiCustomOrderService
    resourceApi.getSomething(); // ApiCoreResourceService
}
```

The disadvantage of this approach is, that the constructor's 
parameters in components can get quite big, similarly it 
doesn't provide a central api and therefore less sophisticated 
autocomplete. Also, it relies on injecting all the services 
separately, subsequently it will require to set up another 
injection every time a new domain is used.

**Positive:**
* simplest multi-file solution
* components only import the necessary apis

**Negative:**
* domains injected separately
* requires changes in custom when adding domains
* many constructor parameters in components
* no central api, less sophisticated autocomplete
