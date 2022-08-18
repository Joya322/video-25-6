document
  .getElementById("event-button")
  .addEventListener("mouseenter", function () {
    document.body.style.backgroundColor = "steelblue";
  });

document
  .getElementById("eventOnMove-button")
  .addEventListener("mousemove", function () {
    document.body.style.backgroundColor = "green";
    console.log("moving");
  });

document.getElementById("on-focus").addEventListener("focus", function () {
  console.log("focusing");
});

document.getElementById("on-blur").addEventListener("blur", function () {
  console.log("blur");
});

/* //if we don't pass parameter then it will not show what happens
document.getElementById("key-event").addEventListener("keydown", function () {
    console.log("typing")
}) */

/* //passing event parameter. event will show which key we press and details of this keyBoardEvent
document.getElementById("key-event").addEventListener("keydown", function (event) {
    console.log(event)
}) */

/* //it will show only full input field of the keyBoardEvent
document.getElementById("key-event").addEventListener("keydown", function (event) {
    console.log(event.target)
}) */

/* //it will show value of input field of the keyBoardEvent. but it will not show recent key value. key value will get after typing another key. because it is event type of keydown.
document
  .getElementById("key-event")
  .addEventListener("keydown", function (event) {
    console.log(event.target.value);
  }); */

/* //it will show value of input field of the keyBoardEvent. but it will not show recent key value. key value will get after typing another key. because it is event type of keydown.
document
  .getElementById("key-event")
  .addEventListener("keydown", function (event) {
    console.log(event.target.value);
  }); */

/* //it will show value of input field of the keyBoardEvent. but it will not show recent key value. key value will get after typing another key. because it is event type of keypress.
document
  .getElementById("key-event")
  .addEventListener("keypress", function (event) {
    console.log(event.target.value);
  }); */

//it will show value of input field of the keyBoardEvent. And it will show recent key value.
document
  .getElementById("key-event")
  .addEventListener("keyup", function (event) {
    console.log(event.target.value);
  });
