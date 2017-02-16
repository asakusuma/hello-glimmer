import Component from '@glimmer/component';
import { bar } from './foo';

export default class HelloWorld extends Component {
  constructor(args) {
    console.log('HelloWorld constructor', args);
    super(args);
  }
};
