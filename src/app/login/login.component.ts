import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  

  aim='Your perfect banking partner'
  acnt='enter your ac number'
  acno=''
  psw=''

  userDetails:any={
    1000:{acno:1000,username:"amal",password:123,balance:100000},
    1001:{acno:1002,username:"anu",password:123,balance:200000},
    1002:{acno:1002,username:"appu",password:123,balance:150000},
    1003:{acno:1003,username:"anju",password:123,balance:10000},


  }

  constructor() { }

  ngOnInit(): void {
  }


// login(){
// var acnum=this.acno
// var psw=this.psw 
// let userDetails=this.userDetails
// if(acnum in userDetails){
//   if(psw==userDetails[acnum]['password']){
//     alert("login sucess")
//   }
//   else{
//     alert("user not exist or incorrect password")
//   }
// }

login(a:any,b:any){
console.log(a.value);
console.log(b.value);





  var acnum=a.value
  var psw=b.value
  let userDetails=this.userDetails
  if(acnum in userDetails){
    if(psw==userDetails[acnum]['password']){
      alert("login sucess")
    }
    else{
      alert("user not exist or incorrect password")
    }
  }
  

//   alert('login clicked')
// }

// acnoChange(event:any){
//   this.acno=event.target.value
//   console.log(this.acno)
// }

// pswChange(event:any){
//   this.psw=event.target.value
//   console.log(this.psw)
// }
}
}
