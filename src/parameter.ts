function parameterDecorator(target: any, propertyKey: string, index: number) {
  // ここでごにょごにょする
  console.log(target);
  console.log(propertyKey);
  console.log(index);
}

class Sample {
  hoge(
    @parameterDecorator param0: string,
    @parameterDecorator param1: string
  ) {}
}
