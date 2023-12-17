const loginurl = "http://localhost:8001/api/users/login";
const getUserDetailsUrl = "http://localhost:8001/api/users/current";

const loginBtn = document.getElementById("loginBtn");
var accessToken;

const login = (event) => {
  event.preventDefault();
  const loginEmail = document.getElementById("exampleInputEmail1").value;
  const loginPassword = document.getElementById("exampleInputPassword1").value;
  try {
    fetch(loginurl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: loginEmail,
        password: loginPassword,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        accessToken = data.accessToken;
        localStorage.setItem("accessToken", accessToken);
        getUserDetails(accessToken);
      })
      .catch((err) => console.log(err));
  } catch (err) {
    console.log(err);
  }
};

const getUserDetails = (accessToken) => {
//   accessToken.preventDefault();
  fetch(getUserDetailsUrl, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      localStorage.setItem("userDetails",  data.id);
      window.location.href = "./public/dashBoard.html";
    });
};
loginBtn.addEventListener("click", login);
