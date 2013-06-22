var strpath = require('../'),
    should = require('should');

var obj;

beforeEach(function (done) {
  obj = {
    a: {
      b: 10,
      c: {
        d: 20
      }
    },
    e: 30,
    m: [10, 20, 30],
    n: [[50, 20], [30, 40]]
  };
  done();
});

describe('get', function () {

  it('should grab data one level deep', function () {
    var val = strpath(obj, 'e');
    val.should.equal(obj.e);
  });

  it('should grab data two levels deep', function () {
    var val = strpath(obj, 'a.b');
    val.should.equal(obj.a.b);
  });

  it('should grab data three levels deep', function () {
    var val = strpath(obj, 'a.c.d');
    val.should.equal(obj.a.c.d);
  });

  it('should return undefined for non-existent data', function () {
    var val = strpath(obj, 'x.y.z');
    should.not.exist(val);
  });

  it('should not also create non-existent paths', function () {
    var val = strpath(obj, 'p.q.r');
    should.not.exist(obj.p);
  });

  it('should grab data from an array', function () {
    var val = strpath(obj, 'm[1]');
    val.should.equal(obj.m[1]);
  });

  it('should grab data from nested arrays', function () {
    var val = strpath(obj, 'n[1][0]');
    val.should.equal(obj.n[1][0]);
  });

});

describe('set', function () {

  it('should set data one level deep', function () {
    var val = strpath(obj, 'f', 50);
    obj.f.should.equal(50);
  });

  it('should set data two levels deep', function () {
    var val = strpath(obj, 'a.g', 60);
    obj.a.g.should.equal(60);
  });

  it('should set data three levels deep', function () {
    var val = strpath(obj, 'a.c.h', 70);
    obj.a.c.h.should.equal(70);
  });

  it('should set data at non-existent paths', function () {
    var val = strpath(obj, 'a.i.j.k', 80);
    obj.a.i.j.k.should.equal(80);
  });

  it('should not overwrite existing data', function () {
    var val = strpath(obj, 'a.b.z', 80);
    obj.a.b.should.equal(10);
  });

  it('should set data in an array', function () {
    var val = strpath(obj, 'a.q[3].a', 80);
    Array.isArray(obj.a.q).should.be.ok;
    obj.a.q[3].a.should.equal(80);
  });

  it('should set able to set data in nested arrays', function () {
    var val = strpath(obj, 'a.q[3][0].a', 80);
    Array.isArray(obj.a.q).should.be.ok;
    Array.isArray(obj.a.q[3]).should.be.ok;
    obj.a.q[3][0].a.should.equal(80);
  });

});

describe('isNumeric', function () {

  it('should recognise an integer', function () {
    strpath.isNumeric('10').should.be.ok;
  });

  it('should recognise an float', function () {
    strpath.isNumeric('10.6').should.be.ok;
  });

  it('should fail on a string', function () {
    strpath.isNumeric('hello').should.not.be.ok;
  });

  it('should fail on undefined data', function () {
    strpath.isNumeric(undefined).should.not.be.ok;
  });

});