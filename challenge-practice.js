var password = "main12"

if(password.length >= 12 && password.includes("!")) {
  console.log("That is a mighty strong password!")
} else if( password.length >= 8 || password.includes("!") ) {
  console.log("That password is strong enough")
} else {
  console.log("That is not a valid password.")
}