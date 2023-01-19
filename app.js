//Task_1
var button = document.querySelector("button");
var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");
function add(num1, num2) {
    return num1 + num2;
}
button.addEventListener("click", function () {
    console.log(add(+input1.value, +input2.value));
});
//Task_2
var age = 50;
var newName = "Max";
var toggle = true;
var empty = null;
var notInitialize = undefined;
var callback = function (a) {
    return 100 + a;
};
var age1;
age1 = 50;
var name1;
name1 = "Max";
var toggle1;
toggle1 = true;
var empty1;
empty1 = null;
var notInitialize1;
notInitialize1 = undefined;
var callback1;
callback1 = function (a) {
    return 100 + a;
};
var anything;
anything = -20;
anything = "Text";
anything = {};
var some;
some = "Text";
var str;
if (typeof some === "string") {
    str = some;
}
var person;
person = ["Max", 21];
var Status;
(function (Status) {
    Status[Status["LOADING"] = 0] = "LOADING";
    Status[Status["READY"] = 1] = "READY";
})(Status || (Status = {}));
;
var apiStatus = {
    status: Status.LOADING
};
if (Status.LOADING === apiStatus.status) {
    console.log("Loading.....");
}
var result;
var literal;
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
var page1 = {
    title: "The awesome page",
    likes: 100,
    accounts: ["Max", "Anton", "Nikita"],
    status: "open",
    details: {
        createAt: "2021-01-01",
        updateAt: "2021-05-01"
    }
};
var page2;
page2 = {
    title: "Python or Js",
    likes: 5,
    accounts: ["Alex"],
    status: "close"
};
