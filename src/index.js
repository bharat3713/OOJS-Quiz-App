import { QuizController } from "./framework/QuizController";
import { QuestionController } from "./framework/QuestionController";
import { Data } from "./data/Data";
import { base } from "./ui/base";

// Creating UI
var div = document.getElementById("root");
div.appendChild(base());

// Creating Controller
var control = new QuizController();
var score = 0;
var counter = control.counter;
let start;

// Setting correct answer and state
for (let i = 0; i < Data.length; i++) {
  let _id = Data[i].id;
  let _ans = Data[i].correctAns;
  control.correctAns.push({
    id: _id,
    answer: _ans
  });
  control.state.push({
    attempted: false
  });
}

// Rendring Application
function App() {
  start = new QuestionController(
    Data[counter].title,
    Data[counter].options,
    Data[counter].type
  );

  start.render();

  control.showProgress(counter);

  control.getUserInput(
    Data[counter].options,
    Data[counter].type,
    counter,
    Data
  );

  control._prev.disabled = true;
  control._next.disabled = true;
}

// Handling next question
control._next.onclick = function() {
  counter++;

  control._prev.disabled = false;

  start = new QuestionController(
    Data[counter].title,
    Data[counter].options,
    Data[counter].type
  );

  start.render();
  control.getUserInput(
    Data[counter].options,
    Data[counter].type,
    counter,
    Data
  );
  control.checkAttempted(Data[counter].type, counter);
  control.showProgress(counter);

  let _attempted = control.state[counter].attempted;

  if (_attempted != false) {
    control._next.disabled = false;
  } else {
    control._next.disabled = true;
  }

  if (_attempted != false && counter == Data.length - 1) {
    control._next.disabled = true;
    control._submit.style.opacity = "1";
  }
};

// Handling previous question
control._prev.onclick = function() {
  counter--;

  if (counter == 0) {
    control._prev.disabled = true;
  }

  start = new QuestionController(
    Data[counter].title,
    Data[counter].options,
    Data[counter].type
  );

  start.render();

  control.getUserInput(
    Data[counter].options,
    Data[counter].type,
    counter,
    Data
  );

  control.checkAttempted(Data[counter].type, counter);
  control.showProgress(counter);
  control._next.disabled = false;
  control._submit.style.opacity = "0";
};

// Handling result
control._submit.onclick = function() {
  control.showResult();
};

App();
