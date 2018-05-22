import {sandboxOf} from 'angular-playground';
import {CanvasComponent} from './canvas.component';

export default sandboxOf(CanvasComponent)
  .add('Canvas component', {
    template: `<app-canvas></app-canvas>`
  });

