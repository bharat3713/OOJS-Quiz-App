export function addRadio(options) { 
  let newdiv='';
  for (var i = 0; i < options.length; i++) {
    newdiv += "<input  name='radioName' type='radio' value='"+ options[i] +"' id='Radio_" + i + "'><label>" + options[i]+"</label></input><br>";
  }
  return newdiv;
}
