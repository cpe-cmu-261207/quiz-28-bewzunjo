const genderTag = document.getElementById("span-gender-icon");
const imgTag = document.getElementById("img-profile");
const nameTag = document.getElementById("p-name");
const addressTag = document.getElementById("p-address");
const emailTag = document.getElementById("p-email");
const btnRandom = document.getElementById("btn-random");
const maincard = document.getElementById("div-user-card");
const loadcard = document.getElementById("div-loading-card");

btnRandom.onclick = () => {
  callApi();
  maincard.style.display = "";
  loadcard.style.display = "none";
};

async function callApi() {
  const resp = await axios.get("https://randomuser.me/api/");
  if (resp.data.results[0].gender == "female") {
    genderTag.innerText = "👩";
  } else {
    genderTag.innerText = "👨";
  }
  imgTag.src = resp.data.results[0].picture.large;
  nameTag.innerText =
    resp.data.results[0].name.first + " " + resp.data.results[0].name.last;
  emailTag.innerText = resp.data.results[0].email;
  addressTag.innerText =
    resp.data.results[0].location.city +
    " " +
    resp.data.results[0].location.state +
    " " +
    resp.data.results[0].location.country +
    " " +
    resp.data.results[0].location.postcode;
  console.log(resp.data.results[0]);
}

btnRandom.onload = () => {
  maincard.style.display = "none";
  loadcard.style.display = "";
};
