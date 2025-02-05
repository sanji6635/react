import React from "react";
import { toast } from "react-hot-toast";

const useSignup = () => {
  const signup = async (email, password) => {
    const isValidUser = validateUser(email , password) ;
    if(!isValidUser) return ;
    try{
      const responce = await fetch("http://localhost:5000/auth/signup" , {
        headers : {"Content-Type":"application/json"} ,
        method :"POST",
        body : JSON.stringify({email , password}) 
      });
      if(!responce.ok){
        console.log("there was an something wrong in the backend") ;
        toast.error("someting went wrong") ;
        throw err ;
      }

      const data = await responce.json() ;
      if(!data.sucessInSignup){
        console.log("something wrong at this line ")
      } ;

      toast.success(data.message) ;
      console.log("data is => ", data)



    }catch(err){
      console.log(`there was an error is signup hook => ${err.message} `) ;
      toast.error("Error occured") ;
    }
  };
};

const validateUser = (email, password) => {
  if(!email || !password){
    toast.error("please fill out all the fields");
    return false;
  }else if(password.length < 6 ){
    toast.error("password must be at least 8 character long") ;
    return false ;
  }

  return true
};

export default useSignup;
