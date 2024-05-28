export class ReactFlag {
  raised = false;
  constructor() {
    /* */
  }

  public On(callback: () => void) {
    console.log('checking');
    if (this.raised === true) {
      callback();
    }
    this.raised = false;
  }

  public Raise() {
    console.log('setting to true');
    this.raised = true;
  }
}
