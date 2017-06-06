
# When you have a tonne of data..
There are times you want to log so much data that you do cannot use console.log because those are too many lines...

Those are the moments you want to output your data in one (updating) line.

This is a quick module for exactly that purpose.

```javascript
const printline = require('printline');

for( i=0; i<1000; i++){
    printline('We have now counted '+i+' times...');
}
```

Simple... now get back to code :-)