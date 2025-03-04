var button = document.createElement("button");

button.innerText = "This is the inserted button, click on me!";
button.onclick = async function () {
  console.log("button click");
  const response = await chrome.runtime.sendMessage({
    command: "click",
  });
  // do something with response here, not outside the function
  console.log(response);
};

document.body.prepend(button);
