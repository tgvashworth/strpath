# strpath

[![build status](https://secure.travis-ci.org/phuu/strpath.png)](http://travis-ci.org/phuu/strpath)

Get or set data in a Javascript object using a string path. Creates the path if it doesn't find it.

```javscript
var obj = { a: { b: 10 }, c: [10, 20, 30] };

// Get some data
var b = strpath(obj, 'a.b');
console.log(b); // 10
var c1 = strpath(obj, 'c[1]');
console.log(c1); // 20

// Set some data
strpath(obj, 'a.c.d', 20);
console.log(obj.c.d); // 20
strpath(obj, 'a.c.e[1]', 30);
console.log(obj.a.c.e); // [ , 30 ]
```

## Install

```shell
npm install strpath
```

## License

MIT