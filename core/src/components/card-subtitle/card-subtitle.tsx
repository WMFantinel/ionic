import { Component, Prop } from '@stencil/core';
import { Color, Mode } from '../../interface';
import { createColorClasses } from '../../utils/theme';

@Component({
  tag: 'ion-card-subtitle',
  styleUrls: {
    ios: 'card-subtitle.ios.scss',
    md: 'card-subtitle.md.scss'
  },
  shadow: true
})
export class CardSubtitle {
  /**
   * The color to use for the text color.
   */
  @Prop() color?: Color;

  /**
   * The mode determines which platform styles to use.
   * Possible values are: `"ios"` or `"md"`.
   */
  @Prop() mode!: Mode;

  hostData() {
    return {
      class: createColorClasses(this.color),
      'role': 'heading',
      'aria-level': '3'
    };
  }

  render() {
    return <slot></slot>;
  }
}
