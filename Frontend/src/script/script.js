//Login Function
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
          const storedData = sessionStorage.getItem("fromrequest");
          if (storedData) {
            window.location.href = "../HTML Agency/ServiceRequest.html";
          } else {
            window.location.href = "../HTML Volunteer/Home.html";
          }
        }, 2000);
      } else {
        document.querySelector(".incorrect").classList.toggle("invisible");
        document
          .querySelector(".incorrect")
          .classList.toggle("position-absolute");
        setTimeout(() => {
          location.reload();
        }, 2000);
      }
      return response.json(); // Return the parsed JSON from the response
    })
    .then((json) => {
      res = json;
      sessionStorage.setItem("isloggedin", "true");
    });
}

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
  setTimeout(() => {
    const storedData = sessionStorage.getItem("fromrequest");
    if (storedData) {
      window.location.href = "../HTML Agency/ServiceRequest.html";
    } else {
      window.location.href = "../HTML Volunteer/Home.html";
    }
  }, 2000);
}

//Service Request
function serviceRequest(e) {
  e.preventDefault();
  const storedData = sessionStorage.getItem("token");
  console.log(storedData);
  
  // const newPost = {
  //   name: e.target.centerName.value,
  //   description: e.target.serviceDescription.value,
  //   contact: e.target.contactInfo.value,
  // };
  // fetch("http://localhost:3000/posts", {
  //   method: "POST",
  //   headers: {
  //     Accept: "application/json",
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify(newPost),
  //   cache: "default",
  // });
}
