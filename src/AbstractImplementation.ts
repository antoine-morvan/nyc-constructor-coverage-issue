import { MainInterface } from "@src/MainInterface";

export abstract class AbstractImplementation<T> implements MainInterface<T> {
  constructor() {
    // nothing
  }

  compute(): void {
    throw Error("unsupported");
  }
}
