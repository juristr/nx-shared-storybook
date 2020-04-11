import { addDecorator, addParameters } from '@storybook/angular';
import { withKnobs } from '@storybook/addon-knobs';
import { setCompodocJson } from '@storybook/addon-docs/angular';

import compodocJson from '../../../../docs/libs/shared/ui-greeter/documentation.json';

setCompodocJson(compodocJson);

addDecorator(withKnobs);
