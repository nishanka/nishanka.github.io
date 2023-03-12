let binaryArray = Array.from({length: 100}, () => Math.floor(Math.random() * 100000000).toString(2));

for (i = 0; i < binaryArray.length; i++) {
    console.log(binaryArray[i]);
    document.getElementById("binaryAnimation").innerHTML += 
    '<span id="binary-animation-'+ [i] + 
    '" class="binary-number"><span>' + 
    binaryArray[i].split('').join('</span><span>') + 
    '</span></span>';
}