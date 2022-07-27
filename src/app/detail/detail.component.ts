import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
student: any
  id: any
  constructor(private httpClient: HttpClient, private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      // @ts-ignore
      this.id = +paramMap.get('id');
      this.getStudent(this.id)



  }

  );
}

  getStudent(id: number) {
    this.httpClient.get('http://localhost:3000/students/' + id)
      .subscribe((data) => {
        this.student = data;
      },
      (error) => {
        console.log(error);
      }
      );
  }}
