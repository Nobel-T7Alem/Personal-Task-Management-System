function Login(event) {
  event.preventDefault();
  let pass = document.getElementById("password");
  let user = document.getElementById("username");
  const isAgency = document.getElementById("loginAsAgency").checked;
  const url = isAgency
    ? "http://localhost:3000/agency"
    : "http://localhost:3000/volunteer";
  const loginData = {
    name: "e",
    email: "e",
    username: "user",
    description: "e",
    password: "pass",
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
