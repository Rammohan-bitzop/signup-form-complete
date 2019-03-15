function validatefields() {
  var first = document.getElementById("first").value;
  var last = document.getElementById("last").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  var address = document.getElementById("address").value;
  var city = document.getElementById("city").value;
  var state = document.getElementById("state").value;

  //regex expressions for validation
  const regname = /^[a-zA-Z]{3,20}$/;
  const regphone = /^[6-9][0-9]{9}$/;
  const regemail = /^([a-z0-9\.-]+)@([a-z0-9-]{3,30})\.([a-z]{2,8})(\.[a-z]{2,8})?$/i;
  //	userid/name	@ domainname 	.  extension    .anotherextension(optional)  case-insensitive
  const regaddress = /^[a-zA-Z0-9][a-zA-Z0-9\/\-:,\. ]{10,180}$/i;
  const regcity = /^[a-zA-Z ]{4,35}$/i;
  const regstate = /^[a-zA-Z ]{4,40}$/i;

  //var result = regname.test(first);
  //console.log(result);

  //validation
  if (regname.test(first)) document.getElementById("frst").innerHTML = "";
  else {
    document.getElementById("frst").innerHTML =
      "**strictly alphabet & should be atleast 3 and less than 20 char in length";
    return false;
  }

  if (regname.test(last)) document.getElementById("lst").innerHTML = "";
  else {
    document.getElementById("lst").innerHTML =
      "**strictly alphabet & should be atleast 3 and less than 20 char in length";
    return false;
  }

  if (regphone.test(phone)) document.getElementById("phn").innerHTML = "";
  else {
    document.getElementById("phn").innerHTML = "**Invalid phone number";
    return false;
  }

  if (regemail.test(email)) document.getElementById("eml").innerHTML = "";
  else {
    document.getElementById("eml").innerHTML = "**Invalid email";
    return false;
  }

  if (regaddress.test(address)) document.getElementById("addr").innerHTML = "";
  else {
    document.getElementById("addr").innerHTML =
      "**strictly alphanumeric and these symbols(-; .,)";
    return false;
  }

  if (regcity.test(city)) document.getElementById("cty").innerHTML = "";
  else {
    document.getElementById("cty").innerHTML =
      "**strictly alphabet & should be less than 36 char in length";
    return false;
  }

  if (regstate.test(state)) document.getElementById("stat").innerHTML = "";
  else {
    document.getElementById("stat").innerHTML =
      "**strictly alphabet &  less than 41 char in length";
    return false;
  }
}
