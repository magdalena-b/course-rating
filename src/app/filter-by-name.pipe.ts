import { Pipe, PipeTransform } from '@angular/core';
import { Course } from './course';

@Pipe({
  name: 'filterByName'
})
export class FilterByNamePipe implements PipeTransform {

  transform(courses: Course[], searchText: string): Course[] {
    
    if(!courses){
      return [];
    }

    if(!searchText){
      return courses;
    }

    searchText = searchText.toLowerCase();
    return courses.filter(course => {
      return course.name.toLowerCase().includes(searchText);
    });
  }

}
