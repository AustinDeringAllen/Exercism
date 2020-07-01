//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {
  let tempMessage = message.trim();
  let regex = /[A-Za-z]+/;
  console.log(tempMessage.match(regex));

  if(tempMessage.match(regex) !== null && tempMessage.toUpperCase() === tempMessage && tempMessage.indexOf("?") === tempMessage.length-1) {
    return "Calm down, I know what I'm doing!";
  } else if(tempMessage.match(regex) !== null && tempMessage.toUpperCase() === tempMessage) {
    return "Whoa, chill out!";
  } else if(tempMessage.indexOf("?") !== -1 && tempMessage.indexOf("?") === (tempMessage.length-1)) {
    console.log(tempMessage);
    console.log(tempMessage.indexOf("?"));
    return "Sure.";
  } else if(tempMessage === "") {
    return "Fine. Be that way!";
  } else {
    return "Whatever.";
  }
};
