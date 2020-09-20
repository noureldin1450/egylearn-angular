import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'iframe'
})

export class IframePipe implements PipeTransform {

  constructor(private Sanitizer: DomSanitizer){}

  transform(value: string):any {
    return this.Sanitizer.bypassSecurityTrustHtml(`
      <iframe src="${value}"" frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope picture-in-picture"
        allowfullscreen>
      </iframe>
    `);
  }

}
