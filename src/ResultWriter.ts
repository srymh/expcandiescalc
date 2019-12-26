export default class ResultWriter {
  static addNewLine(text: string) {
    (<HTMLElement>document.getElementById("results")).innerText = text;
  }
}
