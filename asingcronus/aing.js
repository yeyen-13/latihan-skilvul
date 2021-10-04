// const proses1=()=>{
//     console.log('proses1 selesai')

// }
const getDaptaAPI = () => {
  const API = "https://jsonplaceholder.typicode.com/users ";
  fetch(API)
    .then((response) => response.json())
    .then((result) => console.log(result))
    .catch((error) => console.log(error));
};
getDaptaAPI();

// atau menggunakan asyn
const getDaptaAPIAsync = async () => {
  const API = "https://jsonplaceholder.typicode.com/users ";
  fetch(API);
  let response = await fetch(API);
  response = await response.json();
  console.log("ini hasil get api menggunakan asyn", response);
};
getDaptaAPIAsync();
