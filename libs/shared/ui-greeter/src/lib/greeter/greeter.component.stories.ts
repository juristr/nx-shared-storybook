
import { GreeterComponent } from './greeter.component';
import { text } from '@storybook/addon-knobs';

export default {
  title: 'GreeterComponent',
  component: GreeterComponent
};

export const primary = () => ({
  moduleMetadata: {
    imports: []
  },
  component: GreeterComponent,
  props: {
    name: text('name', 'The Doctor')
  }
});
