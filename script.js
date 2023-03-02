const searchBtn = document.querySelector('#searchbtn');
const searchInput = document.querySelector('#searchinput');

const dictionary = (word) => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '1587d4744dmsh8fa0b4be60181a3p134dedjsn22d486462f24',
            'X-RapidAPI-Host': 'dictionary-by-api-ninjas.p.rapidapi.com'
        }
    };

    fetch('https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=' + word, options)
        .then(response => response.json())
        .then((response) => {
            console.log(response);

            wordheading.innerHTML = "Meaning Of: " + response.word;
            definition.innerHTML = response.definition.replace('2.', '<br>2.').replace('3.', '<br>3.').replace('4.', '<br>4.');
        })
        .catch(err => console.error(err));
}

searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    dictionary(searchinput.value)
})