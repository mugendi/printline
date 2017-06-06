

module.exports =  function printLine(msg){

  process.stdout.clearLine();  // clear current text
  process.stdout.cursorTo(0);  // move cursor to beginning of line
  process.stdout.write(msg+'');  // write text
  
}
