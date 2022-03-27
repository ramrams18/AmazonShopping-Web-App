function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("pass").value;
    if(username == null || username == "")
    {
        alert("please enter the username");
    }
    if(password == null || password == "")
    {
        alert("please enter the password");
    }
    else if(password.length < 6)
    {
        alert("password should contain minimum of 6 characters");
    }

}