// dom elements
const wordDom = document.getElementById('word')
const definitionDom = document.getElementById('definition')
const pronunciationDom = document.getElementById('pronunciation')

const getWord = async () => {
    await fetch('https://random-words-api.vercel.app/word') // fetch random word
        .then((res) => res.json())
        .then((json) => {
            wordDom.innerText = json[0].word
            definitionDom.innerText = json[0].definition
            pronunciationDom.innerText = `"${json[0].pronunciation}"` // add quote marks around the pronunciation
        })
}
getWord()
