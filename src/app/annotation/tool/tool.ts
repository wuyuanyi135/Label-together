namespace Annotation {

  export interface Tool {
    name: string;

    /**
     * Convert the label object to a renderable SVG object
     * @param {Annotation.Label} label
     * @returns {SVGElement[]}
     */
    render(label: Label): SVGElement[];

    /**
     * Handle the mouse event when the tool is activated
     * @param {MouseEvent}
     */
    mouseEvents(e: MouseEvent);

    /**
     * Handle the keyboard event when the tool is activated
     * @param {KeyboardEvent} e
     */
    keyboardEvents(e: KeyboardEvent);

    /**
     * Convert the label to the standard annotation form for annotation output
     * @param {Annotation.Label} label
     * @returns {string[]}
     */
    toAnnotation(label: Label): string[];
  }
}
