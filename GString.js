
module.exports.upper = ((source,index)=>{
  let frontPart=source.substring(0,index)
  let lastPart=source.substring(index+1)
  let upperCharacter=source.substring(index,index+1)
  return frontPart+upperCharacter+lastPart
})