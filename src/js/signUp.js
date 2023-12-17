const signUpurl = "http://localhost:8001/api/users/register";
const loginUrl = "http://localhost:8001/api/users/login";

const loginBtn = document.getElementById("loginBtn");
var accessToken;

const signUp = (event) => {
    event.preventDefault();
    const username=document.getElementById("exampleUsername").value;
  const loginEmail = document.getElementById("exampleInputEmail1").value;
  const loginPassword = document.getElementById("exampleInputPassword1").value;
  try {
    fetch(signUpurl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username:username,
        email: loginEmail,
        password: loginPassword,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        login(loginEmail,loginPassword);
      })
      .catch((err) => console.log(err));
  } catch (err) {
    console.log(err);
  }
};

const login = (email,password) => {
    try {
      fetch(loginUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          accessToken = data.accessToken;
          setAccessTokenWithExpiry(accessToken, 15)
          window.location.href = "../public/dashBoard.html";
        })
        .catch((err) => console.log(err));
    } catch (err) {
      console.log(err);
    }
  };

function setAccessTokenWithExpiry(accessToken, expiresInMinutes) {
  const now = new Date();
  const expirationTime = now.getTime() + expiresInMinutes * 60 * 1000; 
  localStorage.setItem('accessToken', JSON.stringify({
    token: accessToken,
    expiry: expirationTime
  }));
}

loginBtn.addEventListener("click", signUp);
