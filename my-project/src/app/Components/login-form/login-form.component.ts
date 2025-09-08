import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  loginForm: FormGroup;
  isSubmitted: boolean = false
  users = [
  { id: "00b461", name: "Tjziyinv", email: "abc@gmail.com", mobileNo: "8439849499", password: "admin", token: "zL4>-uFe%6-KjKKT,SO5" },
  { id: "00b462", name: "Dzlmkqpl", email: "dzlmkqpl@example.com", mobileNo: "1188744539", password: "S(W)p-(~S<", token: "hF:|Q`r}.Ok{oa{xQJ=e" },
  { id: "00b463", name: "Wvatfsas", email: "wvatfsas@example.com", mobileNo: "9335821809", password: "255</>{l{+", token: "_C*yJJk##@SYyL7O~??3" },
  { id: "00b464", name: "Xtawgabp", email: "xtawgabp@example.com", mobileNo: "9201887422", password: "sXc?=Z|GjZ", token: "P2Y6n0?yyAdtRCi4Y..}" },
  { id: "00b465", name: "Adqcnflw", email: "adqcnflw@test.com", mobileNo: "9415199946", password: "L/\"tFt(fh7", token: "rlbD7}4*2wM;9p[c|G%1" },
  { id: "00b466", name: "Rrujfnzj", email: "rrujfnzj@mail.com", mobileNo: "8799657328", password: "g!MLykwOS{", token: "::$C9\"M\\'!<wn`v\\&O]p>" },
  { id: "00b467", name: "Bteytvlw", email: "bteytvlw@mail.com", mobileNo: "1978219249", password: "SROB6yHdM[", token: "T@G]iD~'l}G'S>S'+8zj" },
  { id: "00b468", name: "Yrzcmtuz", email: "yrzcmtuz@example.com", mobileNo: "5286812862", password: "-ik|*3]zp}", token: "WOMo2{JEPMOODRf[!&Rx" },
  { id: "00b469", name: "Pjoqltfw", email: "pjoqltfw@test.com", mobileNo: "9392314016", password: ":hv?T?YVtZ", token: "Iz-CqpuWt=E1`1y|G1((" },
  { id: "00b4610", name: "Szdwqulx", email: "szdwqulx@test.com", mobileNo: "2796732598", password: "rv4Gy5lwr{", token: "XzsA^lf!v&rm|hO5`hM<" },
  // ... and so on for the rest of the users
];


  constructor(private router: Router,private toster:ToastrService) {
    this.loginForm = new FormGroup({
      emailAddress: new FormControl("abc@gmail.com", [Validators.required]),
      password: new FormControl("admin", [Validators.required])
    });
    
  }

  get loginFormData() {
    return this.loginForm
  }

  onSubmit() {
    this.isSubmitted = true;
    if (this.loginForm.valid) {
      const formvalue: any = this.loginForm.value;
      this.userValidation(formvalue);
    }
  }

  userValidation(formData: any) {
    const user = this.users.find((user: any) => {
      if (user.email.toLowerCase() == formData.emailAddress.toLowerCase() && user.password == formData.password) {
        return user
      }
    });
    if (user != undefined) {
      this.toster.success('Login successful');

      //navigate to dashboard
      localStorage.setItem('token',user.token)
      this.router.navigate(["/poc/product"])
    } else {
     
      this.toster.error('Please enter valid login cradential');
    }

  }
}
