Array.from(document.querySelectorAll('.open-details')).forEach(e => {
    // Add a data-attribute to store the current item data-related value.
    e.dataset.dataRelatedValue = e.getAttribute('data-related'); // gets the attribute value.
    e.onclick = ""; // this is to avoid an event call.
    e.addEventListener('click', openRelatedProjectData);
});

Array.from(document.querySelectorAll('.close-details')).forEach(e => {
    e.onclick = "";
    e.addEventListener('click', closeRelatedProjectData);
});

function openRelatedProjectData() {
    // console.log(this.dataset.dataRelatedValue);
    var relatedContent = document.getElementById(this.dataset.dataRelatedValue);
    // console.log(relatedContent);
    relatedContent.style.display = 'block';
}

function closeRelatedProjectData() {
    // console.log(this.parentElement);
    this.parentElement.style.display = 'none';
}
