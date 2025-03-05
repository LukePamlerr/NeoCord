export default {
  name: "HelloWorld",
  description: "Adds a hello message to chat.",
  start: () => {
    document.querySelector(".chat").innerHTML += "<p>Hello from NeoCord!</p>";
  },
  stop: () => {
    console.log("HelloWorld stopped.");
  }
};
