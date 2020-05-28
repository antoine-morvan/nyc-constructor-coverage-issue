import { AbstractImplementation } from "@src/AbstractImplementation";
import { ConcreteImplementation } from "@src/ConcreteImplementation";
import { DefaultImplementation } from "@src/DefaultImplementation";
import { assert, expect } from "chai";

describe("All test", function () {
  it("Bare implementations should throw errors", function () {
    class DummySpecialization extends AbstractImplementation<boolean> {
      // no change
    }

    const instance = new DummySpecialization();

    expect(function () {
      instance.compute();
    }).to.throw(Error);
  });

  it("Should not call compute when pre returns false", function () {
    let counter = 0;
    class DummySpecialization extends DefaultImplementation {
      preCompute(): boolean {
        return false;
      }
      doCompute(): void {
        counter++;
      }
    }

    const instance = new DummySpecialization();
    instance.compute();
    assert(counter === 0);
  });

  it("Default implementation does nothing", function () {
    // just for the sake of calling the doCompute
    class DummySpecialization extends DefaultImplementation {
      // no change
    }

    const instance = new DummySpecialization();
    instance.compute();
  });

  it("Check coverage for concrete implementation", function () {
    const instance = new ConcreteImplementation("hello");
    instance.compute();
  });
});
