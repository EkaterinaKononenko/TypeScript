//Task_1
/*const button1 = document.querySelector("button")! as HTMLButtonElement;
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;

function add(num1: number, num2: number) {
  return num1 + num2;
}

button1.addEventListener("click", function () {
  console.log(add(+input1.value, +input2.value));
});

//Task_2
let age = 50;
let newName = "Max";
let toggle = true;
let empty = null;
let notInitialize = undefined;
let callback = (a: number) => {
  return 100 + a;
};
let age1: number;
age1 = 50;
let name1: string;
name1 = "Max";
let toggle1: boolean;
toggle1 = true;
let empty1: null;
empty1 = null;
let notInitialize1: undefined;
notInitialize1 = undefined;
let callback1: (a: number) => number;
 callback1 = (a) => {
  return 100 + a;
};

let anything: any;
anything = -20;
anything = "Text";
anything = {};

let some: unknown;
some = "Text";
let str: string;
if (typeof some === "string")
{ str = some }

let person: [string, number];
person = ["Max", 21];

enum Status { LOADING, READY };
const apiStatus = {
  status: Status.LOADING,
}
if (Status.LOADING === apiStatus.status) {
  console.log("Loading.....");
}

let result: string | number;

let literal: "enable" | "disable"

function showMessage(message: string){
  console.log(message);
}

function calc(num1: number | string, num2: number | string) {
  if (typeof num1 === 'number' && typeof num2 === 'number') {
    return num1 + num2;
  }
  return "num1" + "num2";
}

function customError(): void {
  throw new Error("Error");
}

const page1 = {
  title: "The awesome page",
  likes: 100,
  accounts: ["Max", "Anton", "Nikita"],
  status: "open",
  details: {
    createAt: "2021-01-01",
    updateAt: "2021-05-01",
  },
};

let page2: {
  title: string;
  likes: number;
  accounts: string[];
  status: "open" | "close";
  details?: {
    createAt?: "2021-01-01";
    updateAt?: "2021-05-01";
  };
};

  page2 = {
  title: "Python or Js",
  likes: 5,
  accounts: ["Alex"],
  status: "close",
};*/

