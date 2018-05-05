let remain = 2
let start = 0
let timer_id = 0

function timedisp() {
  document.close()
  var current = new Date()
  document.writeln(current.toLocaleTimeString())
  document.write("<br />")
  document.writeln(start.toLocaleTimeString())

  document.write("<br />")
  
  var diff = (current.getTime() - start.getTime()) / 1000
  document.writeln(diff)

  if (diff > 10) {
    clearInterval(timer_id)
    document.write("<br />")
    document.write("Finish")
  }  
}


window.onload = function() {
  start = new Date()
  timer_id = window.setInterval('timedisp()', 1000);
}
