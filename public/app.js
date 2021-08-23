var emailEl = document.getElementById('email')
var passwordEl = document.getElementById('password')
var userEl = document.getElementById('username')
var resnameEl = document.getElementById('resname')
var resEmailEl = document.getElementById('resemail')
var resPassEl = document.getElementById('respassword')
var countdropEl = document.getElementById('countrydrop')
var citydropEl = document.getElementById('citydrop')

var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function signup(){
    firebase.auth().createUserWithEmailAndPassword(emailEl.value, passwordEl.value)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    console.log(user, userCredential);
    window.location.href = 'resturants.html'
     var dataToSave = {
         email: user.email,
         userName: userEl.value,
         UID: user.uid,
         city: user.citydropEl
     }

    saveUserInFirestore(dataToSave);
    let db = firebase.firestore();
    function saveUserInFirestore(userToSave){
    db.collection('users').doc(userToSave.uid).set(userToSave); }
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage)
    // ..
  });
if(userEl.value === '' || userEl.value === null){
    ('Please fill Name correctly')
}
if(emailEl.value.match(mailformat))
{

}
else
{
alert("You have entered an invalid email address!");
return false;
}

if(passwordEl.value.length <= 5){
    alert('Password must be longer than 5 character')
}

}



function ressign(){
    firebase.auth().createUserWithEmailAndPassword(resEmailEl.value, resPassEl.value)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    console.log(user, userCredential);
    window.location.href = 'WorkPartner.html'
     var dataToSave = {
         email: user.email,
         userName: resnameEl.value,
         UID: user.uid

     }

    saveUserInFirestore(dataToSave);
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage)
    // ..
  });
if(resnameEl.value === '' || resnameEl.value === null){
    ('Please fill Name correctly')
}
if(resEmailEl.value.match(mailformat))
{

}
else
{
alert("You have entered an invalid email address!");
return false;
}

if(resPassEl.value.length <= 5){
    alert('Password must be longer than 5 character')
}

}

function login() {
    firebase.auth().signInWithEmailAndPassword(emailEl.value, passwordEl.value)
        .then((userCredential) => {
            console.log(userCredential);
            window.location.href = 'resturants.html'
            
            // saveUserInFirestore();
        })
        .catch((error) => {
            console.error(error);
        })

        if(emailEl.value.match(mailformat))
{

}
else
{
alert("You have entered an invalid email address!");
return false;
}

if(passwordEl.value.length <= 5){
    alert('Wrong Password!')
}

}

function signout() {
    firebase.auth().signOut().then(() => {
        console.log ("Sign-out successful.")
        window.location.href = 'index.html'
      }).catch((error) => {
        // An error happened.
      });
}

let storage = firebase.storage()
let fileEl = document.getElementById("pics")

function uploadImage() {
    let file = fileEl.files[0]
    let displayPicRef = storage.ref().child('items/' + file.name)

    displayPicRef.put(file)
    .then(() => {
        displayPicRef.getDownloadURL()
        .then((url) => {
            console.log(url)
        })
    })
}





//////////////////// add to cart //////////


var adItemID = 0 
function addCart(item){
  adItemID += 1
  var selectedItem = document.createElement('div')
  selectedItem.classList.add('cartImg')
  selectedItem.setAttribute('id', adItemID)
  var img = document.createElement('img')
  img.setAttribute('src', item)
  selectedItem.append(img)
  var cartItem = document.getElementById('title')
  cartItem.append(selectedItem)

}