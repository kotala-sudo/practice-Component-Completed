import { Course } from "../model/course";

export const COURSES: Course[] = [

    {
        id: 1,
        title : "CSci 160: Computer Science - I",
        url: 'https://www.ndsu.edu/themes/ndsu/logo.svg',
        description: "A introductory programming class",
        level: '100 level',
        credits: 4
    },
    {
        id: 2,
        title: "CSci 161: Computer Science - II",
        url: 'https://www.ndsu.edu/themes/ndsu/logo.svg',
        description: "Introduction to data structures, algorithms and program complexity",
        level: '100 level',
        credits: 4
    },

    {
        id: 3,
        title: 'CSci 213: Modern Software Development ',
        description: "Introduction to modern software developemnt. C#",
        url: 'https://www.ndsu.edu/themes/ndsu/logo.svg',
        level: '200 level',
        credits: 3
    },

    {
        id: 4,
        title: "CSci 313: Advanced Software Development",
        url: 'https://www.ndsu.edu/themes/ndsu/logo.svg',
        description: "Introduction to modern software frameworks",
        level: '200 level',
        credits: 3
    },
    {
        id: 5,
        title: 'CSci 222: Discrete Math',

        url: 'https://www.ndsu.edu/themes/ndsu/logo.svg',
        description: "Discrete Math",
        level: '200 level',
        credits: 3
    },
    {
        id: 6,
        title: 'CSci 374: Computer Organization',
        url: 'https://www.ndsu.edu/themes/ndsu/logo.svg',
        description: 'Computer Architecture and organization',
        level: '300 level',
        credits: 3
    },
 
];


export function findCourseById(courseId:number) {
    return COURSES.find(course => course.id === courseId);
}