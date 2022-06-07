

  function receivesAFunction(callback){
    callback();
   
  }
  function returnsANamedFunction() {
      return  function named(){
          console.log('named function example')
      }
}
function returnsAnAnonymousFunction(){
    return function() {
        console.log("an anonymous function example")
    }
}