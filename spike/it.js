window.onload = function() {
  window.setInterval(function() {
    document.close()
    var dd = new Date();
    document.writeln(dd.toLocaleString())
  }, 1000);
}
