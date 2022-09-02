# API Patterns
In this repository we check four different patterns for organizing an API 
using TypeScript and Angular. You find the pattern in the corresponding branch.
You can compare the pattern branch with the main branch (which is a Angular 
template project) to see what has changed, and you can also compare the pattern
branches with each other. Now follows a quick description of each pattern and 
it's advantages and shortcomings. You can find the same information in the
respective branches' README.md.

## Wrapper Pattern

Check out the branch `wrapper_pattern` for the example project.
See `src/core`, `src/custom` and `src/app/app.component.ts`
for implementation.

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

## Instance Pattern

Check out the branch `instance_pattern` for the example project.
See `src/core`, `src/custom` and `src/app/app.component.ts`
for implementation.

This pattern also has the advantage of using the point notation
(same usage as in the wrapper-pattern),
which also leads to auto-suggestions by your IDE.

Example:
```
api.order.getSomething(); // ApiCustomOrderService
api.resource.getSomething(); // ApiCoreResourceService
```

It packages everything nicely in one central library.
Good thing about this pattern is, unlike the wrapper-pattern
it does not require injection (only the custom class will
be injected).

This one class will instantiate all domain classes.
If you want to implement a custom domain you can extend the domain
from core and override the property in the main custom class.
The main custom and core class in this pattern acts like an index
to the domains in existence.

It is less complex than the wrapper-pattern because it doesn't
require injection and passing classes by parameters. Instead, it
requires overriding properties.

Also, unlike the wrapper-pattern, it does not require any changes
in custom if a new domain is added.

This pattern inherits the features from the wrapper-pattern
but without its shortcomings.

**Positive:**
* point notation
* auto-suggestions
* central API
* no injections necessary
* the `api.service.ts` files (in core and custom) act as an
  index

**Negative:**
* more complex than services pattern
* requires to override properties (question of preference)

## Naming Pattern

Check out the branch `naming_pattern` for the example project.
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


## Services Pattern

Check out the branch `services_pattern` for the example project.
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
