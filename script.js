function addWord() {
    let saveWord = document.getElementById("getWord").value;
    const dictionaryWord = localStorage.getItem(saveWord);
    if (saveWord !== dictionaryWord) {
        localStorage.setItem(saveWord, saveWord);
    } else {
        alert("The word already exists in the dictionary..");
    }
}

function searchWord() {
    const word = document.getElementById("checkWord").value;
    const dictionaryWord = localStorage.getItem(word);
    if (word === dictionaryWord) {
        alert("Word found!");
    } else {
        alert("Word not found!");
    }     
}

function resetDictionary() {
    localStorage.clear();
    alert("Dictionary library has been reset!");
}