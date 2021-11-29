//---------------------------fetching the user data--------------------------------------------------------
let fetchUsers = async function () {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  let users = await response.json();
  return users;
}
//----------------------------------------------------------------------------------------------------------
//-------------------------------for displaying the user data-------------------
let displayUserCard = async function () {
  let mainDiv = document.querySelector(".main");
  let html = '';
  let users = await fetchUsers();
  users.forEach((user) => {
    //making new url
    let url = new URL(`http://127.0.0.1:5500/user.html?id=${user.id}&name=${user.name}`);
    //getting value of id and name
    let params = new URLSearchParams(url.search);
    html += `<div class="card">
    <div class="upper">
    <img class="images" src="avatar-3637425_960_720.png" alt="" />
    </div>
    <div class="lower">
    <h1>${user.username}</h1>
    <p class="p1">${user.email}</p>
    <a class="submit" " href="user.html?${params}">More Information</a>
    </div>
    </div> `
  });
  mainDiv.innerHTML = html;
}
displayUserCard();

//----------------------------------------------------------------------------------------------------------
