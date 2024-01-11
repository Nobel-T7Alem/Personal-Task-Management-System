//Displaying Agency Posts
// let posts;
fetch("http://localhost:3000/posts", {
  method: "GET",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  cache: "default",
})
  .then((response) => response.json())
  .then((json) => {
    posts = json;
    displayPosts(posts);
    console.log(posts);
  });

function displayPosts(p) {
  p.forEach((i) => {
    var card = document.getElementById("to-be-duplicated");
    var clone = card.cloneNode(true);
    clone.classList.toggle("invisible");
    clone.classList.toggle("position-absolute");
    document.querySelector(".row").appendChild(clone);
    clone.querySelector(".agency").innerHTML = i.name;
    clone.querySelector(".service").innerHTML = i.description;
    clone.querySelector(".location").innerHTML = i.contact;
    const createdAt = new Date(i.createdAt);
    const dateOptions = { year: "numeric", month: "long", day: "numeric" };
    const timeOptions = {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    };
    const readableCreatedAt = `${createdAt.toLocaleDateString(
      undefined,
      dateOptions
    )} ${createdAt.toLocaleTimeString(undefined, timeOptions)}`;

    console.log(readableCreatedAt);
    clone.querySelector(".date").innerHTML = readableCreatedAt;
  });
  console.log(p);
  let card = document.querySelector(".agency");
}