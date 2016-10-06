function isVowel(c) {
   return ['a', 'e', 'i', 'o', 'u'].indexOf(c.toLowerCase()) !== -1;
} //end of function isVowel()

function getPigLatin() {
  //get the word input by the user
  var str = document.getElementById("word").value;
  
  //this will output the variable to the console
  console.log(str);
    
  //split the string and return an array
  var array = str.split('');
  
  //get the length of the array
  var array_length = array.length;
  
  //find where the first vowel occura
  var found_vowel = -1;
  var i = 0;
  var stopLoop = 0;

  while (found_vowel != 1) {
    console.log(array[i]);
    found_vowel = isVowel(array[i]);    
    console.log(found_vowel);

    //if all letters are consonants, break the loop
    if ( i == (array.length - 1) ) { 
      i = i + 1;
      stopLoop = 1;
      break; 
    } 

    i = i + 1;
  }

  var vowel_index = i - 1;
  console.log(vowel_index);

  if ( vowel_index == 0 ) {
    //if the vowel is the first letter of the word, add "way" after the word
    array.push("way");
  }
  else if ( stopLoop == 1 && found_vowel == false ) {
       //if the word consists of all consonants, add "ay" after the word
    array.push("ay");
  }
  else {  
    //get the consonants
    var consonants = array.slice(0, vowel_index);
    console.log(consonants);
    consonants = consonants.join('');
    
    //remove the consonant (or consonant cluster) before the first vowel that occurs
    array = array.slice(vowel_index, array_length);
    
    //bring the consonant (or consonant clusters) to the end of the array 
    array.push(consonants);
    
    //append "ay" to the array 
    array.push("ay");
  }

  //join the array so that its elements is now a string
  str = array.join('');  

  //change the HTML content of a <p> element with id="pig-latin-word": 
  document.getElementById("pig-latin-word").innerHTML = str;

} //end of function getPigLatin()