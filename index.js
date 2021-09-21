function scuberGreetingForFeet(ride){
   if (ride <= 400) {
    return 'This one is on me!';
   } else if (ride <= 2500) {
    return 'I will gladly take your thirty bucks.'
   } else {
     return 'No can do.'
   }
    
}

function ternaryCheckCity (destination) {
  if (destination = 'NYC') {
    return 'Ok, sounds good.';
  } else {
    return ('No go.')
  }
}