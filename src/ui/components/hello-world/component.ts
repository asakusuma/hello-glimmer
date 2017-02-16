import Component from '@glimmer/component';

export default class HelloWorld extends Component {
  list: Array<string>;
  constructor(args) {
    console.log('HelloWorld constructor', args);
    super(args);
    this.list = ['tom', 'robbie'];
  }
};
