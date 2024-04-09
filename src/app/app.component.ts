import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CourseCardComponent } from './course-card/course-card.component';
import { COURSES } from './data/course-data';
import { Course } from './model/course';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CourseCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  csci160 = COURSES[0];
  csci161 = COURSES[1];
  csci213 = COURSES[2];
}
