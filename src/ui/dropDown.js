export function addDropDown(divName, options) {
    document.getElementById(divName).innerHTML = "";
      var newdiv = document.createElement("select");
      newdiv.id='dropDown'
      newdiv.innerHTML = '<option selected="selected" value="">Selecte Your Answer</option>'
      for (var i = 0; i < options.length; i++) {
      newdiv.innerHTML +=  '<option id="btn'+ i +'" value="'+ options[i] +'">'+ '<i>' + options[i] + '</i>'+'</option>'
      document.getElementById(divName).appendChild(newdiv);
    }
  }
  


