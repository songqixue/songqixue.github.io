let myIamges = document.querySelector('img');

myIamges.onclick = function(){
    let mySrc = myIamges.getAttribute('src');
    if(mySrc === 'firefox-icon.png'){
        myIamges.setAttribute('src','chrome-icon.jpg');
    }else{
        myIamges.setAttribute('src','firefox-icon.png')
    }
    }
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
    let myName = prompt('请输入你的名字。');
    if(!myName || myName === null) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.innerHTML = 'Mozilla 酷毙了，' + myName;
    }
  }
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
  }
  myButton.onclick = function() {
    setUserName();
 }