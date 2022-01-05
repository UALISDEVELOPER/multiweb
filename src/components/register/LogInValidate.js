export const validate = data =>{

    const errors={};

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

    return errors;
}