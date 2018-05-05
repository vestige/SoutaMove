let remain = 20
let start = 0
let timer_id = 0

function anotherdisp() {
  console.log("out")
}

function timedisp() {
  document.close()
  var current = new Date()
  document.writeln(current.toLocaleTimeString())
  document.write("<br />")
  document.writeln(start.toLocaleTimeString())
  document.write("<br />")
  
  var diff = (current.getTime() - start.getTime()) / 1000
  var disp = remain - Math.floor(diff)  
  var disp2 = Math.ceil(disp / 10)  

  document.writeln(disp)
  document.write("<br />")
  document.writeln(disp2)


  if (diff > remain) {
    clearInterval(timer_id)
    clearInterval(another_id)
    
    document.write("<br />")
    document.write("Finish")
  }  
}


window.onload = function() {
  start = new Date()
  timer_id = window.setInterval('timedisp()', 200);
  another_id = window.setInterval('anotherdisp()', 500)

}
