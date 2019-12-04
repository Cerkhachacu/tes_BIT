var dict = ['pro', 'gram', 'merit', 'program', 'it', 'programmer'];

function split() {
    let word = prompt("Input a word");
    let kata = word.split('');
    let syllables = [];
    let i = 0;
    let a = 0;
    let k = '';
        while(i<kata.length){
          k = '';
            for(let h = a; h<kata.length; h++){
              k+=kata[h]
              let j = 0;
                while(j<word.length){
                  if(dict[j]==k) {
                    syllables.push(k);
                  }
                j+=1
                }
            }
          a+=1;
          i+=1;
        }
    
    return console.log(syllables)
}

split();