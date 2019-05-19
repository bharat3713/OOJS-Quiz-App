export function base() {
  var App = document.createElement("div");
  App.id = "App";
  var QuesDiv = document.createElement("div");
  QuesDiv.id = "QuesDiv";
  var AnsDiv = document.createElement("div");
  AnsDiv.id = "AnsDiv";
  var ControllerDiv = document.createElement("div");
  ControllerDiv.id = "ControllerDiv";
  ControllerDiv.innerHTML = " <button id='previousBtn'>Previous</button><button id='nextBtn'>Next</button><button id='submit'>Submit</button>";
  
  var progressBar = document.createElement("div");
  progressBar.id = "progressBar";
  var score = document.createElement("div");
  score.id = "score";
  
  App.appendChild(progressBar);
  App.appendChild(QuesDiv);
  App.appendChild(AnsDiv);
  App.appendChild(ControllerDiv);
  App.appendChild(score);

  return App;
}
