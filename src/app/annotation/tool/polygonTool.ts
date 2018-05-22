namespace Annotation {
  import Tool = Annotation.Tool;

  class PolygonTool implements Tool {
    name = 'Polygon';

    keyboardEvents(e: KeyboardEvent) {
    }

    mouseEvents(e: MouseEvent) {
    }

    render(): SVGElement[] {
      return undefined;
    }

    toAnnotation(): string[] {
      return undefined;
    }

  }
}
