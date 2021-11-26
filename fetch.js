//---------------------------fetching the user data--------------------------------------------------------
let fetchUser=async function(){
    const response=await fetch('https://jsonplaceholder.typicode.com/users');
    var users=await response.json();
    users.forEach((user) => user);
        return users;
}
//----------------------------------------------------------------------------------------------------------
//-------------------------------for displaying the user data-------------------
let displayUserCard= async function(){
    let mainDiv=document.querySelector(".main");
    let users=await fetchUser();
     users.forEach((user)=>{
//----------------------------appending data--------------------------------------
        let cardDiv=document.createElement('div');
  cardDiv.classList.add('card');
  mainDiv.appendChild(cardDiv);
  //--------------------------
        let upperDiv=document.createElement('div');
  upperDiv.classList.add('upper');
  cardDiv.appendChild(upperDiv);
  //--------------------
  let myImg=document.createElement('img');
  myImg.classList.add('images');
  myImg.src='avatar-3637425_960_720.png'
  upperDiv.appendChild(myImg);
  // ------------------
  let lowerDiv=document.createElement('div');
  lowerDiv.classList.add('lower');
  cardDiv.appendChild(lowerDiv);
  //----------------
  let myHeading=document.createElement('h1');
  myHeading.id="heading";
  myHeading.textContent=user.username;
  lowerDiv.appendChild(myHeading);
  //-------------------------
  let myParagraph=document.createElement('p');
  myParagraph.classList.add('p1');
  myParagraph.textContent=user.email;
  lowerDiv.appendChild(myParagraph);
  //------------------------
  let submitButton=document.createElement('button');
  submitButton.classList.add('submit');
  submitButton.type='submit';
  lowerDiv.appendChild(submitButton);
  //-------------------------
  let anchorTag=document.createElement('a');
  anchorTag.id="click"
  anchorTag.href=`user.html`;
  //-----------------sending the username to the url search path------------------------
  anchorTag.search=`${user.id}`
  console.log(anchorTag);
  anchorTag.textContent="More Information";
  submitButton.appendChild(anchorTag);
  //-------------------------
});
}
displayUserCard();

//----------------------------------------------------------------------------------------------------------
//---------------------------------display the user full information--------------------
let showMoreInformation=async function(id){
  let users= await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  let userId=await users.json();
  let mainDiv=document.querySelector(".usersData")
  //------------------user address-------
  let userAddress=userId.address;
  let addressGeo=userAddress.geo;
  // //-------------user company
  let company=userId.company
   console.log(userId);
   let html='';
//---------------------appending data------------------------------
html +=`
<div class="grid-1x3">
<div class="userdetails">
<img class="userimage1" src="avatar-3637425_960_720.png">
<div class="addresslabel">
<label class="userlab">User Details</label>
</div>
  <label class="lab">UserId</label>
  <span class="email">${userId.id}</span>
  <label class="lab">User Name</label>
  <span class="email">${userId.name}</span>
  <label class="lab">User Username</label>
  <span class="email">${userId.username}</span>
  <label class="lab">User Email</label>
  <span class="email">${userId.email}</span>
  <label class="lab">User Phone No.</label>
  <span class="email">${userId.phone}</span>
  </div>
  
  <div class="second">
  <div class="Address">
  <div class="addresslabel">
  <label>User Address</label>
  </div>
  <br>
  <label class="lab">Street:</label>
  <span class="email">${userAddress.street}</span>
  <label class="lab">Suite:</label>
    <span class="email">${userAddress.suite}</span>
    <label class="lab">City:</label>
    <span class="email">${userAddress.city}</span>
    <label class="lab">ZipCode:</label>
    <span class="email">${userAddress.zipcode}</span>
    <label class="lab">Latitude:</label>
    <span class="email">lat:${addressGeo.lat}</span>
    <label class="lab">Longitude:</label>
    <span class="email">lng:${addressGeo.lng} </span>
    </div>
    <br>
    <div class="Company">
    <div class="addresslabel">
    <label>User Company</label>
    </div>
    <br>
    <label class="lab">Name:</label>
  <span class="email">${company.name}</span>
  <label class="lab">catchPhrase:</label>
    <span class="email">${company.catchPhrase}</span>
    <label class="lab">bs:</label>
    <span class="email">${company.bs}</span>
       </div>
</div>
</div>
<div class="btndiv">
    <button class="submit2"><a href="index.html">Go back</a></button>
  </div>`
mainDiv.innerHTML = html;
}
      //---------------------getting the value of url search path------------------
      var id=window.location.search.slice(1);
      console.log(id);
showMoreInformation(id);
