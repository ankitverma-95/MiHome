import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../service/user.service';


@Component({ templateUrl: './register.component.html', styleUrl: "./register.component.scss" })
export class RegisterComponent implements OnInit {
    form!: FormGroup;
    loading = false;
    submitted = false;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private userService: UserService,
    ) { }

    ngOnInit() {
        this.form = this.formBuilder.group({
            name: ['', Validators.required],
            phoneNumber: ['', Validators.required],
            address: ['', Validators.required],
            emailId: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
    }

    // convenience getter for easy access to form fields

    redirectToCancel() {
        this.router.navigate(["./login"]);
    }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.form.invalid) {
            return;
        }
        this.userService.addUser(this.form.value).subscribe((res) => {
            this.router.navigate(["./login"]);
        }, err => {
            console.error(err);
        })

        // this.loading = true;
        // this.accountService.register(this.form.value)
        //     .pipe(first())
        //     .subscribe({
        //         next: () => {
        //             this.alertService.success('Registration successful', { keepAfterRouteChange: true });
        //             this.router.navigate(['../login'], { relativeTo: this.route });
        //         },
        //         error: error => {
        //             this.alertService.error(error);
        //             this.loading = false;
        //         }
        //     });
    }
}