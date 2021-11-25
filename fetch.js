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
  anchorTag.search=`${user.username}`
  console.log(anchorTag);
  anchorTag.textContent="More Information";
  submitButton.appendChild(anchorTag);
  //-------------------------
});
}
displayUserCard();

//----------------------------------------------------------------------------------------------------------
//---------------------------------display the user full information--------------------
let showMoreInformation=async function(username){
  let unorderList=document.querySelector(".userList")
  let information=await fetchUser();
  let index=information.findIndex((info)=>info.username===username)
  let userFullInformation=information[index];
  //------------------user address-------
  let userAddress=userFullInformation.address;
  let addressGeo=userAddress.geo;
  //-------------user company
  let company=userFullInformation.company
  //  console.log(company);
// ---------------------appending data------------------------------
       let userList=document.createElement('li')
        userList.classList.add("list");
        unorderList.appendChild(userList)
        let myDiv=document.createElement('div');
        myDiv.classList.add("details");
        userList.appendChild(myDiv);
        //------------------------------------------
        let span1=document.createElement('span');
        span1.classList.add('email')
        span1.textContent=`User Id:--- ${userFullInformation.id}`;
      //------------------------------------------
        myDiv.appendChild(span1);
        let span2=document.createElement('span');
        span2.classList.add('email')
        span2.textContent=`Name:--- ${userFullInformation.name}`;
        myDiv.appendChild(span2);
    //------------------------------------------
        let span3=document.createElement('span');
         span3.classList.add('email')
        span3.textContent=`UserName:--- ${userFullInformation.username}`;
        myDiv.appendChild(span3);
        //-----------------------------------------------
        let span4=document.createElement('span');
         span4.classList.add('email')
        span4.textContent=`User Email:--- ${userFullInformation.email}`;
        myDiv.appendChild(span4);
    //-----------------------appending user address----------------------------
        let span5=document.createElement('span');
         span5.classList.add('email')
        span5.textContent=`Address:---  street:${userAddress.street},suite:${userAddress.suite},
        city:${userAddress.city},zipcode:${userAddress.zipcode},
        lat:${addressGeo.lat},lng:${addressGeo.lng}  `;
        myDiv.appendChild(span5);
        //----------------------appending company address---------------------------
        let span6=document.createElement('span');
         span6.classList.add('email')
        span6.textContent=`Company:---  Name:${company.name},catchPhrase:${company.catchPhrase},
        bs:${company.bs} `;
        myDiv.appendChild(span6);
        //--------------------------------
        let submitButton=document.createElement('button');
        submitButton.classList.add('submit2');
        submitButton.type='submit';
        myDiv.appendChild(submitButton);
        //-------------------------
        let anchorTag=document.createElement('a');
        anchorTag.href="index.html";
        anchorTag.textContent="Go Back";
        submitButton.appendChild(anchorTag);
      }
      //---------------------getting the value of url search path------------------
      var username=window.location.search.slice(1);
      console.log(username);
showMoreInformation(username);
