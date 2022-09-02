# Instance Pattern

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
