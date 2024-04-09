import { Component, Input } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent {
  @Input() course!: Course;
  
  /**
   * Note simply doing @Input() course: Course; will require 
   * course to be initialized. This could be fixed by 
   * using ! after the property name as seen above.
   */
}
