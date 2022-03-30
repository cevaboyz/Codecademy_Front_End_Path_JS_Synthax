// Write your function here:

function howOld(age, year) {
  var thisYear =  new Date().getFullYear()
  if(year > thisYear){
    var diff = year - thisYear
    var old = age + diff
    return `You will be ${old} in the year ${year}`
  }else if(thisYear > year){
    var diff = thisYear - year
    var old = Math.abs(age - diff)
    if(diff > age){
      return `The year  ${year} was ${old} years before you were born`
    }else if(age > diff){
      var old = Math.abs(age - diff)
      return `You were ${old} in the year ${year}`
    }
    
  }else{
    return "Error!"
    

  }


}
