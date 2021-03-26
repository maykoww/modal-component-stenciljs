import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'button-component',
  styleUrl: 'button-component.css',
  shadow: true,
})
export class ButtonComponent {
  @Prop() text: string;
  @Prop() appearance: string;

  render() {
    return (
      <button type="button" class={`btn ${this.appearance}`}>
        {this.text}
      </button>
    );
  }
}
