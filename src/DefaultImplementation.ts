import { MainInterface } from "@src/MainInterface";

export abstract class DefaultImplementation implements MainInterface<void> {
  constructor() {
    // nothing
  }

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
