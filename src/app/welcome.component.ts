import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Online Test</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class WelcomeComponent  {
  @Input() name: string;
}
