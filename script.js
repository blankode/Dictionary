function addWord() {
    let saveWord = document.getElementById("getWord").value;
    const dictionaryWord = localStorage.getItem(saveWord);
    if (saveWord !== dictionaryWord) {
<<<<<<< HEAD
        document.getElementById("notification").innerHTML = `<div class="alert alert-warning" role="alert">
        Word <strong>`+ saveWord + `</strong> has been added to the dictionary!
        </div>`
        localStorage.setItem(saveWord, saveWord);
        setTimeout(function(){document.getElementById("notification").innerHTML = "";}, 3000);
    } else {
        document.getElementById("notification").innerHTML = `<div class="alert alert-danger" role="alert">
        The word <strong>`+ saveWord + `</strong> already exists in the dictionary..
        </div>`
        setTimeout(function(){document.getElementById("notification").innerHTML = "";}, 3000);
    }
    document.getElementById("getWord").value = "";
=======
        localStorage.setItem(saveWord, saveWord);
    } else {
        alert("The word already exists in the dictionary..");
    }
>>>>>>> 49d3cb7d778c1071869580276f517cf73b3d9b4d
}

function searchWord() {
    const word = document.getElementById("checkWord").value;
    const dictionaryWord = localStorage.getItem(word);
    if (word === dictionaryWord) {
<<<<<<< HEAD
        document.getElementById("notification").innerHTML = `<div class="alert alert-success" role="alert">
        Word <strong>`+ word + `</strong> has been found!
        </div>`
        setTimeout(function(){document.getElementById("notification").innerHTML = "";}, 3000);
    } else {
        document.getElementById("notification").innerHTML = `<div class="alert alert-danger" role="alert">
        The word <strong>`+ word + `</strong> was not found..
        </div>`
        setTimeout(function(){document.getElementById("notification").innerHTML = "";}, 3000);
    }
    document.getElementById("checkWord").value = "";
=======
        alert("Word found!");
    } else {
        alert("Word not found!");
    }     
>>>>>>> 49d3cb7d778c1071869580276f517cf73b3d9b4d
}

function resetDictionary() {
    localStorage.clear();
<<<<<<< HEAD
    document.getElementById("notification").innerHTML = `<div class="alert alert-secondary" role="alert">
    Dictionary library has been reset!
    </div>`
    setTimeout(function(){document.getElementById("notification").innerHTML = "";}, 3000);
=======
    alert("Dictionary library has been reset!");
>>>>>>> 49d3cb7d778c1071869580276f517cf73b3d9b4d
}