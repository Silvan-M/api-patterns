# Naming Pattern

See `src/core`, `src/custom` and `src/app/app.component.ts` 
for implementation.

This pattern has the advantage of being very simple to implement,
but it does not show any separation in files. The only difference
to the current one-api-file version being a naming scheme.
It follows the rule `<domain><Method><Request>` so e.g. 
`orderGetDocuments`.

Example:
```
api.orderGetSomething(); // ApiCustomOrderService
api.resourceGetSomething(); // ApiCoreResourceService
```

This has the advantage that the autosuggestion will sort all
methods by domain, then method and lastly the request.
But it does not solve the problems of clearly separating the api
in multiple files, since it's still one big file.

**Positive:**
* auto-suggestions
* simple implementation

**Negative:**
* no separation in files
* can result in some weird naming like `api.orderGetOrder`
* auto-suggestion not perfect, when typing `api.` it will show all
methods from all domains, instead of only showing the domains, later
the method and at the end the request (all at once)
