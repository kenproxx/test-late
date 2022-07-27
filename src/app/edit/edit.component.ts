import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id: any
  studentForm: FormGroup= new FormGroup({

    name: new FormControl(),
    description: new FormControl(),
    action: new FormControl(),

  }
  );

  constructor(private httpClient: HttpClient, private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id');
    });
    this.httpClient.put('http://localhost:3000/students/' + this.id, this.studentForm).subscribe(
      (response) => {
        this.studentForm.setValue(response);
        this.router.navigate(['/']);

      }
    );
  }
  onSubmit() {
    this.httpClient.put('http://localhost:3000/students/' + this.id, this.studentForm.value).subscribe(
      (response) => {
        this.router.navigate(['/']);
      }
    );
  }

}
