export default class Message {
  constructor(
    public name: string,
    public text: string,
    public timestamp: number,
    public uid: string,
  ) {}
}
