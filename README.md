# strpath

Get or set data in a Javascript object using a string path:

```javscript
var obj = { a: { b: 10 } };

// Get some data
var b = strpath(obj, 'a.b');

// Set some data
strpath(obj, 'a.c.d', 20);
// a.c.d === 20
```

## Install

```shell
npm install strpath
```

## License

MIT