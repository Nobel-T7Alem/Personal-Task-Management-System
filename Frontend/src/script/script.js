function Login(event) {
  event.preventDefault();
  let pass = document.getElementById("password");
  let user = document.getElementById("username");
  const isAgency = document.getElementById("loginAsAgency").checked;
  const url = isAgency
    ? "http://localhost:3000/agency"
    : "http://localhost:3000/volunteer";
  const loginData = {
    name: "ebd",
    email: "ebd",
    username: "asdfuser",
    description: "efsadf",
    password: "passfdasfds",
  };
  console.log(pass.value, user.value, isAgency);
  fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(loginData),
    cache: "default",
  });
  // .then((response) => response.json())
  // .then((data) => {
  //   console.log(data); // Handle the response data here
  // })
  // .catch((error) => {
  //   console.error(error); // Handle any errors that occur during the request
  // });
}
// AOS.init({
//   disable: "mobile",
// });

function serviceRequest(e) {
  e.preventDefault(event);
  const fileInput = document.getElementById("imageInput");
  const file = fileInput.files;
  console.log(file);
  fetch("http://localhost:3000/agency/upload", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: file,
    cache: "default",
  });
}
