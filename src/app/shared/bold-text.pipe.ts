import { Pipe, PipeTransform } from '@angular/core';

export interface TextSegment {
  text: string;
  bold: boolean;
}

/** Splits a string containing `**bold**` markers into renderable segments. */
@Pipe({ name: 'boldText' })
export class BoldTextPipe implements PipeTransform {
  transform(value: string): TextSegment[] {
    if (!value) {
      return [];
    }
    return value.split(/(\*\*[^*]+\*\*)/g)
      .filter((part) => part.length > 0)
      .map((part) =>
        part.startsWith('**') && part.endsWith('**')
          ? { text: part.slice(2, -2), bold: true }
          : { text: part, bold: false },
      );
  }
}
