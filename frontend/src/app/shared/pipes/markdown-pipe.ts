import { Pipe, PipeTransform } from '@angular/core';
import { marked } from 'marked';

@Pipe({
  name: 'markdown',
  standalone: true
})
export class MarkdownPipe implements PipeTransform {

  constructor() {
    marked.setOptions({
      gfm: true, // GitHub Flavored Markdown (soporta tablas, listas de tareas, etc.)
      breaks: true // Respeta los saltos de línea simples sin requerir doble espacio
    });
  }

  transform(value: string | undefined | null): string {
    if (!value) return '';
        return marked.parse(value) as string;
  }
}