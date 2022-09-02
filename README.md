# Wrapper Pattern

See `src/core`, `src/custom` and `src/app/app.component.ts` 
for implementaion.

This pattern has the advantage of using the point notation, 
which also leads to auto-suggestions by your IDE.
Example:
```
api.order.getSomething(); // ApiCustomOrderService
api.resource.getSomething(); // ApiCoreResourceService
```

It packages everything nicely in one central library. 
The disadvantage is that it's rather complex and requires
changes in custom if someone were to add a domain later on.
Also it requires to pass all domains as parameters.

**Positive:**
* point notation
* auto-suggestions
* central API

**Negative:**
* rather complex structure
* dependant on Angulars providers/injection feature
* requires changes in custom when adding domains
