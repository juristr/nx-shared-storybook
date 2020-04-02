
import { GreeterComponent } from './greeter.component';

export default {
  title: 'GreeterComponent'
}

export const primary = () => ({
  moduleMetadata: {
    imports: []
  },
  component: GreeterComponent,
  props: {
  }
})
