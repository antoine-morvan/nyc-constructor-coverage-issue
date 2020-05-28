import { AbstractImplementation } from "@src/AbstractImplementation";

export abstract class DefaultImplementation extends AbstractImplementation<void> {
  compute(): void {
    if (this.preCompute()) {
      this.doCompute();
      this.postCompute();
    }
  }

  preCompute(): boolean {
    return true;
  }

  postCompute(): void {
    // nothing by default
  }
  doCompute(): void {
    // nothing by default
  }
}
