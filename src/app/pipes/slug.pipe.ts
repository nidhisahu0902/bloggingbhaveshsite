import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'slug'
})
export class SlugPipe implements PipeTransform {

  transform(input: string): string {
    return input.toString().toLowerCase()
      .replace(/\s+/g, '_')           // Replace spaces with  _
  }
}
