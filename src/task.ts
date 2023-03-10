//Task 4

class Key {
  private signature: number;

  constructor() {
    this.signature = Math.random();
  }

  getSignature(): number {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {}
  getKey(): Key {
    return this.key;
  }
}

abstract class House {
  protected door = false;
  private tenants: Person[] = [];
  constructor(protected key: Key) {}

  comeIn(person: Person): void {
    if (!this.door) {
      throw new Error("Door is close");
    }

    this.tenants.push(person);
    console.log("Person inside");
  }

  abstract openDoor(key: Key): boolean;
}

class MyHouse extends House {
  openDoor(key: Key) {
    if (key.getSignature() !== this.key.getSignature()) {
      throw new Error("Key to another door");
    }

    return (this.door = true);
  }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

//Task 5 ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function getPromise():Promise<Array<string | number>>{
  return new Promise((resolve) => {
    resolve(["Text", 50]);
  });
}

getPromise().then((data) => {
  console.log(data);
});
//////////////////
type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

function compare(top: Pick<AllType, "name" | "color">, bottom: Pick<AllType,"position" | "weight">): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}

/////////////////////
function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}
//////////////////////
class Component<T>{
  constructor(public props: T) {}
}

interface IProps {
  title: string;
}

class Page extends Component<IProps> {
  pageInfo() {
    console.log(this.props.title);
  }
}