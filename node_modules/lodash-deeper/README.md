# lodash-deeper

![we-need-to-go-deeper](https://cloud.githubusercontent.com/assets/79303/15808608/b2cfdbb8-2b7b-11e6-82f1-d56aaeb39e19.jpg)

I seem to run into cases where I need to do recursive stuff in lodash in ways
not supported by either lodash or lodash-deep. Just dropping them here so I don't
keep reinventing them.

To mix it in:

``` js
var _ = require('lodash')
_.mixin(require('lodash-deeper'))
```

But you can probably be happy to just use it on its own:

``` js
var filterDeep = require('lodash-deeper').filterDeep
```

## _.filterDeep

If you want to `_.filter` an object recursively to find all sub-objects that also
match the passed in predicate, use this module's `filterDeep` function. Take a
look at this repo's test for an example.
