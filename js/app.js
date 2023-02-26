// Load data from API
const loadData = async() => {
    alert.classList.add('hidden');
    cardContainer.classList.remove('border');
    cardContainer.innerHTML = '';
    loader.classList.remove('hidden');
    try {
        const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${inputLink.value}`);
        const data = await res.json();
        if(data.ok === true) {
            alert.classList.add('hidden');
            displayData(data);
        }
        else {
            loader.classList.add('hidden');
            alert.classList.remove('hidden');
        }
    }
    catch (error) {
        console.log(error);
    }
}

// Enter Button to submit
inputLink.addEventListener('keyup', (event) => {
    if(event.key === 'Enter') {
        loadData();
    }
})

// Button click to copy data
const copyLink = () => {
    const linkField = document.getElementById('link-field');
    const link = linkField.innerText;
    navigator.clipboard.writeText(link);
}