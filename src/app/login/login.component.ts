import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

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

 

  constructor(private router:Router,private ds: DataService) { }

  ngOnInit(): void {
  }


login(){
var acnum=this.acno
var psw=this.psw 

 const result=this.ds.login(acnum,psw)
 if (result){
  alert('login sucess')
  this.router.navigateByUrl('dashboard')
 }


// let userDetails=this.userDetails
// if(acnum in userDetails){
//   if(psw==userDetails[acnum]['password']){
//     alert('login sucess')
//     //redirection
// this.router.navigateByUrl('dashboard')

//   }
//   else{
//     alert('user not exist or incorrect password')
//   }
}

// login(a:any,b:any){
// console.log(a.value);
// console.log(b.value);





//   var acnum=a.value
//   var psw=b.value
//   let userDetails=this.userDetails
//   if(acnum in userDetails){
//     if(psw==userDetails[acnum]['password']){
//       alert("login sucess")
//     }
//     else{
//       alert("user not exist or incorrect password")
//     }
//   }
  

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

