function myMovedown() {
    var elem = document.getElementById("elevator");   
    var pos = 0;
    var id = setInterval(frame, 5);
    function frame() {
      if (pos == 350) {
        clearInterval(id);
      } else {
        pos++; 
        elem.style.top = pos + 'px';
      }
    }
  }
  
  function myMoveup1() {
    var elem = document.getElementById("elevator");   
    var pos = 450;
    var id = setInterval(frame, 5);
    function frame() {
      if (pos == 350) {
        clearInterval(id);
      } else {
        pos--; 
        elem.style.top = pos + 'px';
      }
    }
  }
  function myMoveup2() {
    var elem = document.getElementById("elevator");   
    var pos = 350;
    var id = setInterval(frame, 5);
    function frame() {
      if (pos == 250) {
        clearInterval(id);
      } else {
        pos--; 
        elem.style.top = pos + 'px';
      }
    }
  }
  function myMoveup3() {
    var elem = document.getElementById("elevator");   
    var pos = 250;
    var id = setInterval(frame, 5);
    function frame() {
      if (pos == 150) {
        clearInterval(id);
      } else {
        pos--; 
        elem.style.top = pos + 'px';
      }
    }
  }
  function myMoveup4() {
    var elem = document.getElementById("elevator");   
    var pos = 150;
    var id = setInterval(frame, 5);
    function frame() {
      if (pos == 0) {
        clearInterval(id);
      } else {
        pos--; 
        elem.style.top = pos + 'px';
      }
    }
  }