//---------------------------------display the user full information--------------------
let showMoreInformation=async function(id){
    let fetchingUserById= await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    let user=await fetchingUserById.json();
    let mainDiv=document.querySelector(".usersData")
    //------------------user address-------
    let userAddress=user.address;
    let addressGeo=userAddress.geo;
    // //-------------user company
    let company=user.company
     let html='';
  //---------------------appending data------------------------------
  html +=`
  <div class="grid-1x3">
  <div class="userdetails">
  <img class="userimage1" src="avatar-3637425_960_720.png">
  <div class="addresslabel">
  <label class="userlab">User Details</label>
  </div>
    <label class="lab">UserId:-</label>
    <span class="details">${user.id}</span>
    <label class="lab">User Name:-</label>
    <span class="details">${user.name}</span>
    <label class="lab">User Username:-</label>
    <span class="details">${user.username}</span>
    <label class="lab">User Email:-</label>
    <span class="details">${user.email}</span>
    <label class="lab">User Phone No.:-</label>
    <span class="details">${user.phone}</span>
    </div>
    
    <div class="second">
    <div class="Address">
    <div class="addresslabel">
    <label>User Address</label>
    </div>
    <br>
    <label class="lab">Street:-</label>
    <span class="details">${userAddress.street}</span>
    <label class="lab">Suite:-</label>
      <span class="details">${userAddress.suite}</span>
      <label class="lab">City:-</label>
      <span class="details">${userAddress.city}</span>
      <label class="lab">ZipCode:-</label>
      <span class="details">${userAddress.zipcode}</span>
      <label class="lab">Latitude:-</label>
      <span class="details">lat:${addressGeo.lat}</span>
      <label class="lab">Longitude:-</label>
      <span class="details">lng:${addressGeo.lng} </span>
      </div>
      <br>
      <div class="Company">
      <div class="addresslabel">
      <label>User Company</label>
      </div>
      <br>
      <label class="lab">Name:-</label>
    <span class="details">${company.name}</span>
    <label class="lab">catchPhrase:-</label>
      <span class="details">${company.catchPhrase}</span>
      <label class="lab">bs:-</label>
      <span class="details">${company.bs}</span>
         </div>
  </div>
  </div>
  <div class="btndiv">
<a class="submit2" href="index.html">Go back</a>
    </div>`
  mainDiv.innerHTML = html;
  }
        //---------------------getting the value of url search path------------------
       let urlData=window.location.href;
       let url=new URL(urlData);
       let id=url.searchParams.get("id");
       let name=url.searchParams.get("name");
 showMoreInformation(id);
