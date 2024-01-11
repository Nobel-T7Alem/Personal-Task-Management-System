
async function logIn(e) {
  e.preventDefault();
  const loginData = {
    username: e.target.username.value,
    password: e.target.password.value,
  };
  const url = `http://localhost:3000/auth/login?username=${encodeURIComponent(
    loginData.username
  )}&password=${encodeURIComponent(loginData.password)}`;
  console.log(url);
  console.log(
    "http://localhost:3000/auth/login?username=Joshua Taye&password=joshuataye"
  );
  const response = await fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    cache: "default",
  });
  if (response.ok) {
    document.querySelector(".correct").classList.toggle("invisible");
    document.querySelector(".correct").classList.toggle("position-absolute");
    setTimeout(() => {
      window.location.href = "../HTML Volunteer/Home.html";
    }, 2000);
  } else {
    document.querySelector(".incorrect").classList.toggle("invisible");
    document.querySelector(".incorrect").classList.toggle("position-absolute");
    setTimeout(() => {
      location.reload();
    }, 2000);
  }
}

function signUp(e) {
  e.preventDefault();
  const signUpData = {
    name: e.target.name.value,
    username: e.target.username.value,
    email: e.target.email.value,
    password: e.target.password.value,
  };

  console.log(signUpData);
  fetch("http://localhost:3000/auth/signup", {
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
