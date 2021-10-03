function f() {
  console.log("f(): evaluated");
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("f(): called");
    console.log(target);
    console.log(propertyKey);
    console.log(descriptor);
  };
}
function g() {
  console.log("g(): evaluated");
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("g(): called");
  };
}
class C {
  @f()
  @g()
  method() {}
}

new C().method();
