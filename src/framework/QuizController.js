export class QuizController {
  constructor() {
    this.correctAns = [];
    this.userAns = [];
    this.currentState = [];
    this.state = [];
    this.counter = 0;
    this._next = document.getElementById("nextBtn");
    this._prev = document.getElementById("previousBtn");
    this._submit = document.getElementById("submit");
  }

  //Showing Result
  showResult() {
    this.score = 0;
    for (let i = 0; i < this.correctAns.length; i++) {
      let _tempC = JSON.stringify(this.correctAns[i].answer);
      let _tempU = JSON.stringify(this.userAns[i].answer);
      if (_tempC == _tempU) {
        this.score++;
      }
    }
    document.getElementById("QuesDiv").style.display = "none";
    document.getElementById("AnsDiv").style.display = "none";
    document.getElementById("ControllerDiv").style.display = "none";
    document.getElementById("progressBar").style.display = "none";
    document.getElementById("score").style.display = "block";
    document.getElementById("score").innerHTML = `Your Score Is: ${this.score}`;
  }

  //Saving user selected  answer
  saveUserAnswer(index, id, ans) {
    const found = this.userAns.some(el => el.id === id);
    if (!found) {
      this.userAns.push({ id, answer: ans });
    } else {
      this.userAns[index].answer = ans;
    }
  }

  //Saving user provided input
  getUserInput(opt, type, counter, Data) {
    let _self = this;
    if (type == "radiogroup") {
      for (let i = 0; i < opt.length; i++) {
        document.getElementById("Radio_" + i).onclick = function() {
          _self._next.disabled = false;
          if (counter == Data.length - 1) {
            _self._submit.style.opacity = "1";
            _self._next.disabled = true;
          } else {
            _self._submit.style.opacity = "0";
          }
          _self.saveUserAnswer(counter, Data[counter].id, this.value);
          _self.state[counter].attempted = "Radio_" + i;
        };
      }
    } else if (type == "dropdown") {
      var button = document.getElementById("dropDown");
      button.onchange = function() {
        _self._next.disabled = false;
        if (counter == Data.length - 1) {
          _self._submit.style.opacity = "1";
          _self._next.disabled = true;
        } else {
          _self._submit.style.opacity = "0";
        }
        let ans = this.options[this.selectedIndex].value;
        _self.saveUserAnswer(counter, Data[counter].id, ans);

        _self.state[counter].attempted = "option_" + button.selectedIndex;
      };
    }
  }

  //Setting state on UI
  checkAttempted(type, counter) {
    if (type == "radiogroup") {
      for (let i = 0; i < this.state.length; i++) {
        if (this.state[counter].attempted != false) {
          document.getElementById(this.state[counter].attempted).checked = true;
        }
      }
    } else if (type == "dropdown") {
      if (this.state[counter].attempted != false) {
        var getIndex = this.state[counter].attempted.split("_");
        document.getElementById("dropDown").selectedIndex = getIndex[1];
      }
    }
  }

  //Showing progress
  showProgress(counter) {
    return (document.getElementById(
      "progressBar"
    ).innerHTML = `Question ${counter + 1} of ${this.correctAns.length}`);
  }
}
