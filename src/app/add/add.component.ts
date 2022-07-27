import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  formAdd = new FormGroup({
    name: new FormControl(),
    description: new FormControl(),
    action: new FormControl(),

  });

  constructor(private httpClient: HttpClient, private router: Router) { }

  ngOnInit(): void {

  }

  addStudent() {
    this.httpClient.post('http://localhost:3000/students', this.formAdd.value)
      .subscribe((data) => {
          this.router.navigate(['/']);

        },
        (error) => {
          console.log(error);
        }
      );
  }

}
