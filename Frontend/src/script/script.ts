document.addEventListener('DOMContentLoaded', () => {
  const navbarToggler = document.querySelector('.navbar-toggler') as HTMLElement;
  const navbarCollapse = document.querySelector('.navbar-collapse') as HTMLElement;

  navbarToggler.addEventListener('click', () => {
    navbarCollapse.classList.toggle('show');
  });
});
//Login Function
//Login Function
async function logIn(e: Event): Promise<void> {
  e.preventDefault();
  const loginData: { username: string; password: string } = {
    username: (e.target as HTMLFormElement).username.value,
    password: (e.target as HTMLFormElement).password.value,
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
        let user = (e.target as HTMLFormElement).username.value;
        sessionStorage.setItem("username", user);

        sessionStorage.setItem("isloggedin", "true");
        document.querySelector(".correct")!.classList.toggle("invisible");
        document
          .querySelector(".correct")!
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
        document.querySelector(".incorrect")!.classList.toggle("invisible");
        document
          .querySelector(".incorrect")!
          .classList.toggle("position-absolute");
        setTimeout(() => {
          location.reload();
        }, 2000);
      }
      return response.json(); // Return the parsed JSON from the response
    })
    .then((json) => {
      const res = json;
      let status = res.status;
      if (status == "admin") sessionStorage.setItem("type", "admin");
      let token = res.token;
      console.log(token, typeof token);
      sessionStorage.setItem("tok", String(token));
    });
}
//Signup Function
function signUp(e: Event): void {
  e.preventDefault();
  const signUpData: {
    name: string;
    username: string;
    email: string;
    password: string;
  } = {
    name: (e.target as HTMLFormElement).fullname.value,
    username: (e.target as HTMLFormElement).username.value,
    email: (e.target as HTMLFormElement).email.value,
    password: (e.target as HTMLFormElement).password.value,
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
        let user = (e.target as HTMLFormElement).username.value;
        sessionStorage.setItem("username", user);
        sessionStorage.setItem("isloggedin", "true");
        const storedData = sessionStorage.getItem("fromrequest");
        const successDiv = document.getElementById("scorrect")!;
        successDiv.classList.toggle("invisible");
        successDiv.classList.toggle("position-absolute");
        setTimeout(() => {
          window.location.href = "../HTML Sebawi User/Login.html";
        }
          , 2000);
      } else {
        return response.json().then((errorData) => {
          document.getElementById("sincorrect")!.innerHTML = "";
          const err = errorData.message;
          console.log(err);
          let errorDiv = document.getElementById("sincorrect")!;
          if (typeof err == "string") {
            const newdiv = document.createElement("div");
            newdiv.innerText = err;
            errorDiv.appendChild(newdiv);
            errorDiv.classList.remove("invisible");
            errorDiv.classList.remove("position-absolute");
          } else {
            for (const i in err) {
              const e = err[i];
              console.log(e);
              const newdiv = document.createElement("div");
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
function serviceRequest(e: Event): void {
  e.preventDefault();
  const newPost: {
    name: string;
    description: string;
    contact: string;
  } = {
    name: (e.target as HTMLFormElement).centerName.value,
    description: (e.target as HTMLFormElement).serviceDescription.value,
    contact: (e.target as HTMLFormElement).contactInfo.value,
  };
  let token = sessionStorage.getItem("tok");
  fetch(`http://localhost:3000/posts`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(newPost),
    cache: "default",
  }).then((response) => {
    if (response.ok) {
      document.querySelector("#correct")!.classList.toggle("invisible");
      document.querySelector("#correct")!.classList.toggle("position-absolute");
      setTimeout(() => {
        window.location.href = "../HTML Sebawi User/Home.html";
      }, 2000);
    }
  });
}


