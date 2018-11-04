function countChar(word, letter) {
   let counter = 0;
   for(var i = 0; i < word.length; i++) {
       let char = word.charAt(i);
       if(char === letter) {
          counter++;
       }
   }
   return counter;
}

console.log("K letter appear " + countChar("Król Karol kupił królowej Karolinie korale koloru kolorowego.", 'K') + " times.");
