export class OutputEmit {
  public file;
  public output = [];

  write(data) {
    this.output.push(data);
  }
}
