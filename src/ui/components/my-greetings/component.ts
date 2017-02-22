import Component from '@glimmer/component';

export default class MyGreetings extends Component {
  names: Array<string>;
  constructor(args) {
    super(args);
    this.names = ['Tom'];
  }
};
