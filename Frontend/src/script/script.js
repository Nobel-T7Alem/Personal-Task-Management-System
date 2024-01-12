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
        sessionStorage.setItem("isloggedin", "true");
        document.querySelector(".correct").classList.toggle("invisible");
        document
          .querySelector(".correct")
          .classList.toggle("position-absolute");
        setTimeout(() => {
          const storedData = sessionStorage.getItem("fromrequest");
          if (storedData) {
            window.location.href = "../HTML Sebawi User/ServiceRequest.html";
          } else {
            window.location.href = "../HTML Sebawi User/Home.html";
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
      let status = res.status;
      if (status == "admin") sessionStorage.setItem("type", "admin");
      let token = res.token;
      console.log(token, typeof token);
      sessionStorage.setItem("tok", String(token));
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

  fetch("http://localhost:3000/auth/signup", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(signUpData),
    cache: "default",
  })
    .then((response) => {
      if (response.ok) {
        sessionStorage.setItem("isloggedin", "true");
        const storedData = sessionStorage.getItem("fromrequest");
        successDiv = document.getElementById("scorrect");
        successDiv.classList.toggle("invisible");
        successDiv.classList.toggle("position-absolute");
        setTimeout(() => {
          if (storedData) {
            window.location.href = "../HTML Sebawi User/ServiceRequest.html";
          } else {
            window.location.href = "../HTML Sebawi User/Home.html";
          }
        }, 2000);
      } else {
        return response.json().then((errorData) => {
          document.getElementById("sincorrect").innerHTML = "";
          err = errorData.message;
          console.log(err);
          let errorDiv = document.getElementById("sincorrect");
          if (typeof err == "string") {
            newdiv = document.createElement("div");
            newdiv.innerText = err;
            errorDiv.appendChild(newdiv);
            errorDiv.classList.remove("invisible");
            errorDiv.classList.remove("position-absolute");
          } else {
            for (i in err) {
              e = err[i];
              console.log(e);
              newdiv = document.createElement("div");
              newdiv.innerText = e;
              errorDiv.appendChild(newdiv);
            }
            errorDiv.classList.toggle("invisible");
            errorDiv.classList.toggle("position-absolute");
          }
        });
      }
    })
    .catch((error) => {
      console.error("Error:", error.message);
    });
}

//Service Request
function serviceRequest(e) {
  e.preventDefault();
  const newPost = {
    name: e.target.centerName.value,
    description: e.target.serviceDescription.value,
    contact: e.target.contactInfo.value,
  };
  let token = sessionStorage.getItem("tok");
  console.log(token);
  fetch(`http://localhost:3000/posts/${token}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPost),
    cache: "default",
  }).then((response) => {
    if (response.ok) {
      document.querySelector(".correct").classList.toggle("invisible");
      document.querySelector(".correct").classList.toggle("position-absolute");
      setTimeout(() => {
        window.location.href = "../HTML Sebawi User/Home.html";
      }, 2000);
    }
  });
}
