function addWord() {
    var wordCount = localStorage.length + 1;
    localStorage.setItem(document.getElementById("word").value, wordCount);
}

function searchWord() {
    const word = document.getElementById("searchWord").value;
    for (var i = 1; i <= localStorage.length; ++i) {
        let search = localStorage.getItem(i);
        if (search === word) {
            alert("The searched word exists in your dictionary.")
            break;
        }
    }
}