function propertiyDecorator(target: any, propertyKey: string) {
  // ここでごにょごにょする
  // return { ... } // 戻り値を返却することも可能
  console.log(target);
  console.log(propertyKey);
}

class PropertyDecoratorSample {
  @propertiyDecorator
  message?: string;
}

const sample = new PropertyDecoratorSample();
// sample.message = "hello";
