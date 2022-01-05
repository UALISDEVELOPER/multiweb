export const validate = data =>{

    const errors = {};

    if(!data.name.trim()){
        errors.name= "user name is required"
    }else if(data.name.length < 5){
        errors.name="user name is short"
    }else{
        delete errors.name
    }
    //user name validation
    if(!data.email.trim()){
        errors.email= "E-mail is required";
    }else if (data.email.indexOf("@")=== -1 || data.email.indexOf(".")=== -1 || data.email.indexOf("com")=== -1 ){
        errors.email= "E-mail is invalid";
    }else{
        delete errors.email;
    }
    //email validation

    if(!data.password.trim()){
        errors.password ="password required"
    }else if (data.password.length < 8){
        errors.password = "password must be at least 8 characters"
    }else{
        delete errors.password;
    }
    //password validation

    if(!data.confirmPassword.trim()){
        errors.confirmPassword="confitm your password"
    }else if(data.confirmPassword.length < 8){
        errors.confirmPassword="password must be at least 8 characters"
    }else if(!(data.confirmPassword === data.password)){
        errors.confirmPassword="password does not match"
    }else{
        delete errors.confirmPassword;
    }
    //password confimation validation

    if(!data.agreementStatus){
        errors.agreementError="accept terms of privacy"
    }else{
        delete errors.agreementError
    }
    //terms of privacy
    return errors;
}