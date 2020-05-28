import { DefaultImplementation } from "@src/DefaultImplementation";

export class ConcreteImplementation extends DefaultImplementation {
  private attribute: string;
  constructor(attribute: string) {
    super();
    this.attribute = attribute;
  }

  doCompute(): void {
    // eslint-disable-next-line no-console
    console.log("Do Compute " + this.attribute);
  }
}
