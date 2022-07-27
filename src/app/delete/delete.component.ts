import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
student: any
  id: any
  constructor(private httpClient: HttpClient, private router: Router,
              private activatedRoute: ActivatedRoute ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      // @ts-ignore
      this.id = +paramMap.get('id');
      this.deleteStudent(this.id)
    })

  }
  deleteStudent(id: number) {
    this.httpClient.delete('http://localhost:3000/students/' + id)
      .subscribe((data) => {
          this.student = data;
          this.router.navigate(['/']);
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
