//Login Function
res = {};
loggedin = false
async function logIn(e) {
  e.preventDefault();
  const loginData = {
    username: e.target.username.value,
    password: e.target.password.value,
  };
  const url = `http://localhost:3000/auth/login?username=${encodeURIComponent(
    loginData.username
  )}&password=${encodeURIComponent(loginData.password)}`;
  await fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    cache: "default",
  })
    .then((response) => {
      if (response.ok) {
        document.querySelector(".correct").classList.toggle("invisible");
        document
          .querySelector(".correct")
          .classList.toggle("position-absolute");
        setTimeout(() => {
          window.location.href = "../HTML Volunteer/Home.html";
          console.log(response.body);
        }, 2000);
        loggedin = true;
      } else {
        document.querySelector(".incorrect").classList.toggle("invisible");
        document
          .querySelector(".incorrect")
          .classList.toggle("position-absolute");
        setTimeout(() => {
          location.reload();
        }, 2000);
      }
    })
    .then((json) => {
      res = json;
    });
  // return res.token;
}
console.log(res);
//Signup Function
function signUp(e) {
  e.preventDefault();
  const signUpData = {
    name: e.target.name.value,
    username: e.target.username.value,
    email: e.target.email.value,
    password: e.target.password.value,
  };

  console.log(signUpData);
  fetch("http://localhost:3000/post", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(signUpData),
    cache: "default",
  });
  console.log("success!");
}

//Service Request
function serviceRequest(e) {
  console.log(res.token);
  e.preventDefault();
  const newPost = {
    name: e.target.centerName.value,
    description: e.target.serviceDescription.value,
    contact: e.target.contactInfo.value,
  };
  fetch("http://localhost:3000/posts", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPost),
    cache: "default",
  });
}
