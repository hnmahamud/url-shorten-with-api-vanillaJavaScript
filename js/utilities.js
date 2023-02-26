const loader = document.getElementById('loader');
const cardContainer = document.getElementById('card-container');
const alert = document.getElementById('alert');
const inputLink = document.getElementById('input-link');

// Display data from API
const displayData = (data) => {
    loader.classList.add('hidden');
    cardContainer.classList.add('border');
    cardContainer.innerHTML = `
    <div class="card-body">
        <div class="flex">
            <p id="link-field">${data.result.full_short_link}</p>
            <div class="tooltip" data-tip="Copy Link">
                <button onclick="copyLink()" class="btn btn-xs"><i class="fa-solid fa-copy"></i></button>
            </div>
        </div>
    </div>
    `
}