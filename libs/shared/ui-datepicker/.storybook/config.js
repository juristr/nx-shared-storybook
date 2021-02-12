import { configure, addDecorator, addParameters } from '@storybook/angular';
import { withKnobs } from '@storybook/addon-knobs';
import { DocsContainer, DocsPage } from '@storybook/addon-docs/blocks';
import { setCompodocJson } from '@storybook/addon-docs/angular';

import compodocJson from '../../../../docs/libs/shared/ui-datepicker/documentation.json';

addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
});
setCompodocJson(compodocJson);

addDecorator(withKnobs);
configure(require.context('../src/lib', true, /\.stories\.tsx?$/), module);
