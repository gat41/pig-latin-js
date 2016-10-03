function isVowel(c) {
   return ['a', 'e', 'i', 'o', 'u'].indexOf(c.toLowerCase()) !== -1;
}

function getPigLatin() {

var str = document.getElementById('word').value;
console.log(str)
    
  //split the string and return an array
  var array = str.split('');
  
  //get the length of the array
  var array_length = array.length;
  
  var consonants;
  
  //find where the first vowel occur
  var found_vowel = -1;
  var i=0;
  while (found_vowel != 1) {
    found_vowel = isVowel(array[i]);
    i = i + 1;
    if ( i === array.length ) { i = -1; break; } //if all letters are consonants
  }
  
  var vowel_index = i-1;
  if ( i === -1) {
    str = "no vowels are found. cannot latinfied.";
  }
  else if ( vowel_index === 0 ) {
   array.push("way");
   str = array.join('');  
  }
  else {
    
    //get the consonants
    consonants = array.slice(0, vowel_index);
    consonants = consonants.join('');
    
    //remove the consonant (or consonant) cluster before the first vowel
    array = array.slice(vowel_index, array_length);
    
    //put consonants to the back 
   array.push(consonants);
    
   //add "ay" after ^ 
   array.push("ay");
    
   //join the array so that it becomes  
   str = array.join('');
  
  } 

 document.getElementById("pig-latin-word").innerHTML = str;

}
function latinFunc() {
    eventBtn = document.getElementById('event-btn');
    eventBtn.addEventListener("click", getPigLatin);
}
document.addEventListener('DOMContentLoaded', latinFunc);



