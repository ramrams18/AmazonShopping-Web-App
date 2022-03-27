function validate() {
    var name = document.getElementById("name").value;
    if(name == null || name == "")
    {
        alert("please enter the name");
    }
    else if(name.length < 6)
    {
        alert("username should be minimum of 6 letters");
    }
    var password = document.getElementById("pass").value;
    if(password == null || password == "")
    {
        alert("please enter the password");
    }
    else if(password.length < 6)
    {
        alert("password should contain minimum of 6 characters");
    }

}