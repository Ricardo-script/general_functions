// validação de email:

if (!( email.lastIndexOf("@") < email.lastIndexOf(".") &&  email.lastIndexOf("@") > 0 && email.indexOf("@@") == -1 && email.lastIndexOf(".") > 2 && email.length - email.lastIndexOf(".") > 2)){
	console.log("Email is not valid");
	return;
}


/* 

 if (typeof fields["email"] !== "undefined") {
      let lastAtPos = fields["email"].lastIndexOf("@");
      let lastDotPos = fields["email"].lastIndexOf(".");

      if (
        !(
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          fields["email"].indexOf("@@") == -1 &&
          lastDotPos > 2 &&
          fields["email"].length - lastDotPos > 2
        )
      ) {
        formIsValid = false;
        errors["email"] = "Email is not valid";
      }
    }

*/