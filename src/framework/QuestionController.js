import { addRadio } from "../ui/radio";
import { addDropDown } from "../ui/dropDown";

export class QuestionController {
  constructor(question, options, type) {
    this.question = question;
    this.options = options;
    this.type = type;
  }

  // rendring question input
  render() {
    document.getElementById("QuesDiv").innerHTML = this.question;
    let opt;
    document.getElementById("AnsDiv").innerHTML = "";
    if (this.type == "radiogroup") {
      opt = addRadio(this.options);
      document.getElementById("AnsDiv").innerHTML = opt;
    }
    if (this.type == "dropdown") {
      addDropDown("AnsDiv", this.options);
    }
  }
}
