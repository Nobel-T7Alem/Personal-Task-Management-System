if (sessionStorage.getItem("type")) {
  if (document.querySelector(".accounts")) {
    let acc = document.querySelector(".accounts");
    acc.classList.toggle("invisible");
    acc.classList.toggle("position-absolute");
  }
  document.getElementById("agency/name").innerText = "Agency Posts";
}
fetch("http://localhost:3000/posts", {
  method: "GET",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  cache: "default",
})
  .then(function (response) {
    return response.json();
  })
  .then(function (json) {
    var posts = json;
    if (sessionStorage.getItem("type")) displayPosts(posts);
    else {
      for (i in posts) {
        console.log(i);
        let user = sessionStorage.getItem("username");
        let userID = posts[i];
        console.log(userID);
        // fetch(`http://localhost:3000/user/${userID}`, {
        //   method: "GET",
        //   headers: {
        //     Accept: "application/json",
        //     "Content-Type": "application/json",
        //   },
        //   cache: "default",
        // }).then((response) => response.json())
        // .then((json) => {
        //   res = json;
        //   console.log(res.username);
        // })
        if (user && user == posts[i].username) {
          console.log(user);
        }
      }
    }
  });

document.getElementById("agency/name").innerText = "Your Posts";

function displayPosts(p) {
  p.forEach(function (i) {
    var _a;
    var card = document.getElementById("to-be-duplicated");
    var clone = card.cloneNode(true);
    clone.classList.toggle("invisible");
    clone.classList.toggle("position-absolute");
    (_a = document.querySelector(".row")) === null || _a === void 0
      ? void 0
      : _a.appendChild(clone);
    clone.querySelector(".agency").innerHTML = i.name;
    clone.querySelector(".service").innerHTML = i.description;
    clone.querySelector(".location").innerHTML = i.contact;
    clone.querySelector(".id").textContent = i._id;
    clone.querySelector(".userid").textContent = i.user;
    var createdAt = new Date(i.createdAt);
    var dateOptions = { year: "numeric", month: "long", day: "numeric" };
    var timeOptions = {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    };
    var readableCreatedAt = ""
      .concat(createdAt.toLocaleDateString(), " \n      ")
      .concat(createdAt.toLocaleTimeString());
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
  var _a, _b, _c;
  var tbd =
    (_c =
      (_b =
        (_a = event.target.parentElement) === null || _a === void 0
          ? void 0
          : _a.parentElement) === null || _b === void 0
        ? void 0
        : _b.parentElement) === null || _c === void 0
      ? void 0
      : _c.parentElement;
  tbd === null || tbd === void 0 ? void 0 : tbd.remove();
  var name = tbd === null || tbd === void 0 ? void 0 : tbd.querySelector(".id");
  var id = name === null || name === void 0 ? void 0 : name.innerHTML;
  console.log(id);
  fetch("http://localhost:3000/posts/".concat(id), {
    method: "DELETE",
    cache: "default",
  });
}
function TogglePost(event) {
  var _a, _b;
  var parent =
    (_b =
      (_a = event.target.parentElement) === null || _a === void 0
        ? void 0
        : _a.parentElement) === null || _b === void 0
      ? void 0
      : _b.parentElement;
  var name =
    parent === null || parent === void 0 ? void 0 : parent.querySelector(".id");
  var id = name === null || name === void 0 ? void 0 : name.innerHTML;
  var tbu =
    parent === null || parent === void 0
      ? void 0
      : parent.querySelector("#update-input");
  tbu === null || tbu === void 0 ? void 0 : tbu.classList.toggle("invisible");
  tbu === null || tbu === void 0
    ? void 0
    : tbu.classList.toggle("position-absolute");
}
function updatePost(event) {
  var _a, _b;
  var parent =
    (_b =
      (_a = event.target.parentElement) === null || _a === void 0
        ? void 0
        : _a.parentElement) === null || _b === void 0
      ? void 0
      : _b.parentElement;
  var name =
    parent === null || parent === void 0 ? void 0 : parent.querySelector(".id");
  var id = name === null || name === void 0 ? void 0 : name.innerHTML;
  event.preventDefault();
  var updatedPost = {
    name: event.target.fullname.value,
    description: event.target.service.value,
    contact: event.target.contact.value,
  };
  fetch("http://localhost:3000/posts/".concat(id), {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedPost),
    cache: "default",
  }).then(function (response) {
    if (response.ok) {
      var tbu =
        parent === null || parent === void 0
          ? void 0
          : parent.querySelector("#update-input");
      tbu === null || tbu === void 0
        ? void 0
        : tbu.classList.toggle("invisible");
      tbu === null || tbu === void 0
        ? void 0
        : tbu.classList.toggle("position-absolute");
      setTimeout(function () {
        location.reload();
      }, 2000);
    }
  });
}
