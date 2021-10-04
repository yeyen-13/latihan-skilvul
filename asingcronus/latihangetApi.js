let API = "https://api.github.com/users/yeyen1307 ";

const getDaptaAPIAs = async (API) => {
  //   fetch(API);
  let response = await fetch(API);
  response = await response.json();

  console.log(response);
  let dataNama = document.querySelector("#name");
  dataNama.innerHTML = response.login;
  let;
};
getDaptaAPIAs(API);

const API_POST = "https://jsonplaceholder.typeicode.com/posts";
const getpost = async (API) => {
  const response = await fetch(API);
  const result = await response.json();
  console.log(result);
};
