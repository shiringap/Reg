const firebaseConfig = {
    apiKey: "AIzaSyAt6butExn5bCmK6I0VaFxFpSU_1Ze7cOU",
    authDomain: "regform-6809d.firebaseapp.com",
    databaseURL: "https://regform-6809d-default-rtdb.firebaseio.com",
    projectId: "regform-6809d",
    storageBucket: "regform-6809d.appspot.com",
    messagingSenderId: "52968220054",
    appId: "1:52968220054:web:1854ae607063a74a6a69b7"
  };
  
  firebase.initializeApp(firebaseConfig);
  var contactFormDB = firebase.database().ref("contactForm");
  
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  function submitForm(e){
    e.preventDefault();
    var name = getElementVal('name');
    var emailId = getElementVal('emailId');
    var msgContent = getElementVal('msgContent');
    saveMsgs(name, emailId, msgContent);
    // console.log(name, emailId, msgContent);
    document.querySelector(".alert").style.display ="block";
    setTimeout(() => {
        document.querySelector(".alert").style.display ="none";
    }, 3000);
    document.getElementById("contactForm").reset();
  };
  const saveMsgs=(name, emailId, msgContent)=>{
    var newContactForm = contactFormDB.push();
    newContactForm.set({
        name: name,
        emailId: emailId,
        msgContent: msgContent,
    })
  }
  const getElementVal = (id)=>{
    return document.getElementById(id).value;
  };