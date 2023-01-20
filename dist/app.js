"use strict";
const button1 = document.querySelector("button");
const input1 = document.getElementById("num1");
const input2 = document.getElementById("num2");
function add(num1, num2) {
    return num1 + num2;
}
button1.addEventListener("click", function () {
    console.log(add(+input1.value, +input2.value));
});
let age = 50;
let newName = "Max";
let toggle = true;
let empty = null;
let notInitialize = undefined;
let callback = (a) => {
    return 100 + a;
};
let age1;
age1 = 50;
let name1;
name1 = "Max";
let toggle1;
toggle1 = true;
let empty1;
empty1 = null;
let notInitialize1;
notInitialize1 = undefined;
let callback1;
callback1 = (a) => {
    return 100 + a;
};
let anything;
anything = -20;
anything = "Text";
anything = {};
let some;
some = "Text";
let str;
if (typeof some === "string") {
    str = some;
}
let person;
person = ["Max", 21];
var Status;
(function (Status) {
    Status[Status["LOADING"] = 0] = "LOADING";
    Status[Status["READY"] = 1] = "READY";
})(Status || (Status = {}));
;
const apiStatus = {
    status: Status.LOADING,
};
if (Status.LOADING === apiStatus.status) {
    console.log("Loading.....");
}
let result;
let literal;
function showMessage(message) {
    console.log(message);
}
function calc(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    }
    return "num1" + "num2";
}
function customError() {
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
let page2;
page2 = {
    title: "Python or Js",
    likes: 5,
    accounts: ["Alex"],
    status: "close",
};
//# sourceMappingURL=app.js.map