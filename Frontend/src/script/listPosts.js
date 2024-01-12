if (sessionStorage.getItem("isloggedin")) {
  if (document.querySelector(".login-link")) {
    let Loginlink = document.querySelector("#login-link");
    Loginlink.classList.toggle("invisible");
    Loginlink.classList.toggle("position-absolute");
  }
}
if (sessionStorage.getItem("type")) {
  if (document.querySelector(".accounts")) {
    let acc = document.querySelector(".accounts");
    acc.classList.toggle("invisible");
    acc.classList.toggle("position-absolute");
  }
}

//Displaying Agency Posts
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
    clone.querySelector(".id").innerText = i._id;
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
    clone.querySelector(".date").innerHTML = readableCreatedAt;
  });
}

function request(event) {
  event.preventDefault();
  sessionStorage.setItem("fromrequest", "true");
  if (sessionStorage.getItem("isloggedin")) {
    window.location.replace("../HTML Sebawi User/ServiceRequest.html");
  } else {
    window.location.replace("../HTML Sebawi User/Login.html");
  }
}

//deleting posts
function deletePost(event) {
  let tbd = event.target.parentElement.parentElement.parentElement;
  tbd.remove();
  let name = tbd.querySelector(".id");
  id = name.innerHTML;
  console.log(id);
  fetch(`http://localhost:3000/posts/${id}`, {
    method: "DELETE",
    cache: "default",
  });
}

function updatePost(event) {}
