function forLoop(array){
  for(var i = 0; i < 25; i++){
    array.push(`"I am ${i} strange loop${i === 0 ? '' :'s'}."`)
  }
  return array
}

function whileLoop(n){
  var i = 0
  while(i < n){
    console.log(n)
    i++
  }
  return 'done'
}

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array){
  var i = 0
  do{
    array.splice(0,i)
    i++
  }while((0 < array.length) && (maybeTrue()))

  return array
}