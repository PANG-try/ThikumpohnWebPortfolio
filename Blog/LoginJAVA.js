
const queryString = window.location.search;
const urlParameter = new URLSearchParams(queryString)

const usernameRegisted = urlParameter.get("username")
const passwordRegisted = urlParameter.get("password")
window.onload = loginLoad;
function loginLoad(){
	document.getElementById("login").onsubmit = checkLogin;
}

function checkLogin(){
    var username = document.forms["login"]["username"]
    var password = document.forms["login"]["password"]
    if(username.value!=usernameRegisted||password.value!=passwordRegisted){
        alert("Username or Passwork Incorrect")
		return false;

    }
    else{
        alert("Login Complete!");
		return true;
    }
	//ถ้าตรวจสอบแล้วพบว่ามีการ login ไม่ถูกต้อง ให้ return false ด้วย
}

// window.onload = pageLoad;
// function pageLoad()
// {
// 	var regisForm = document.getElementById("register")
//     regisForm.onsubmit = validateForm;
// }

// function validateForm() 
// {
//     //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย
//     var password = document.forms["Register"]["password"];
//     var retypePassword = document.forms["Register"]["retypepassword"]
//     if(password.value != retypePassword.value)
//     {
//         alert("Password not match")
//         return false;
//     }
//     else
//     {
//         alert("Register Complete.")
//         return true;
//     }
// }
