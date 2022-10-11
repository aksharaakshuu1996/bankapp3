import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DeleteConfirmComponent } from '../delete-confirm/delete-confirm.component';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  user = ""

  acnum = ""
  pswrd = ""
  amnt = ""


  depositForm = this.fb.group({
    acnum: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    pswrd: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
    amnt: ['', [Validators.required, Validators.pattern('[0-9]+')]]


  })



  acnum1 = ""
  pswrd1 = ""
  amnt1 = ""




  withdrawalForm = this.fb.group({
    acnum1: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    pswrd1: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
    amnt1: ['', [Validators.required, Validators.pattern('[0-9]+')]]


  })

  ac_no: any

  constructor(private ds: DataService, private router: Router, private fb: FormBuilder) {
    this.user = this.ds.currentUser

  }

  ngOnInit(): void {
    if (!localStorage.getItem('currentAcno')) {

      alert('please login first')
      this.router.navigateByUrl('')

    }

  }


  deposit() {
    var acnum = this.acnum
    var pswrd = this.pswrd
    var amnt = this.amnt

    const result = this.ds.deposit(acnum, pswrd, amnt)
    if (this.depositForm.valid) {
      if (result) {
        alert(`${amnt} is credited,new balance  is ${result}`)

      }
    }

    else {
      alert('invalid')
    }
  }







  withdraw() {
    var acnum = this.acnum1
    var pswrd = this.pswrd1
    var amnt = this.amnt1
    const result = this.ds.withdraw(acnum, pswrd, amnt)
    if (this.withdrawalForm.valid) {

      if (result) {

        alert(`${amnt} is debited,new balance  is ${result}`)
      }
    }
    else {
      alert('invalid')
    }

  }


  logout() {

    localStorage.removeItem('currentUser')
    localStorage.removeItem('currentAcno')

    this.router.navigateByUrl('')
  }
  deleteconfirm() {
    this.ac_no = JSON.parse(localStorage.getItem('currentAcno') || '')
  }
}
