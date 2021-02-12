import { DatepickerComponent } from './datepicker.component';
import { text } from '@storybook/addon-knobs';

export default {
  title: 'DatepickerComponent',
  component: DatepickerComponent
};

export const primary = () => ({
  moduleMetadata: {
    imports: []
  },
  component: DatepickerComponent,
  props: {
    eventName: text('eventName', 'Easter')
  }
});
