import { MainInterface } from "@src/MainInterface";

export abstract class AbstractImplementation<T> implements MainInterface<T> {
  compute(): void {
    throw Error("unsupported");
  }
}
