namespace Annotation {
  export class pointTool implements Tool {
    name = 'Point';

    keyboardEvents(e: KeyboardEvent) {
    }

    mouseEvents(e: MouseEvent) {
    }

    render(label: Annotation.Label): SVGElement[] {
      return undefined;
    }

    toAnnotation(label: Annotation.Label): string[] {
      return undefined;
    }
  }
}
