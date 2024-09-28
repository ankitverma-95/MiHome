import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { UserService } from '../../service/user.service';


@Component({ templateUrl: './login.component.html', styleUrls: ["./login.component.scss"] })
export class LoginComponent implements OnInit {
    form!: FormGroup;
    loading = false;
    submitted = false;
    err: boolean = false;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private userService: UserService,
    ) { }

    ngOnInit() {
        this.form = this.formBuilder.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    // convenience getter for easy access to form fields
    // get f() { return this.form.controls; }

    redirectToRegister() {
        this.router.navigate(["./register"])
    }

    onSubmit() {
        this.submitted = true;

        // reset alerts on submit
        // this.alertService.clear();

        // stop here if form is invalid
        if (this.form.invalid) {
            return;
        }
        this.err = false;        
        this.loading = true;
        this.userService.login(this.form.value).subscribe((res) => {
            console.log(res);
            this.router.navigate(["./rooms"]);
        }, err => {
            this.err = true;
            this.loading = false;
            console.error(err);
        })
    }
}