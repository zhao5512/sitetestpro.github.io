// var和let声明变量
// let myHeading = document.querySelector('h1'); // 获取对标题h1的引用
// myHeading.textContent = 'Hello world!';
let myImage = document.querySelector('img');
myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/app程序.jpg'){
        myImage.setAttribute('src', 'images/siteimages2.jpg');
    }
    else{
        myImage.setAttribute('src', 'images/app程序.jpg');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
    let myName = prompt('请输入你的名字');
    if(!myName){
        setUserName();
    }else{
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Mozilla 酷毙了，'+myName;
    }
}
if(!localStorage.getItem('name'))
{
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla酷毙了，'+storedName;
}
myButton.onclick = function(){
    setUserName();
}