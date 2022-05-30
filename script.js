let addBtn = document.getElementById('addBtn');


var noteObj = '';
addBtn.addEventListener("click", function (e) {

    let addTxt = document.getElementById('addTxt');

    let note = localStorage.getItem("note");
    if (note == null) {
        noteObj = [];
    }
    else {
        noteObj = JSON.parse(note);
    }
    noteObj.push(addTxt.value);
    localStorage.setItem("note", JSON.stringify(noteObj));
    addTxt.value = "";
    showNotes();
});

function showNotes() {
    let note = localStorage.getItem("note");
    if (note == null) {
        noteObj = '';
    }
    else {
        noteObj == JSON.parse(note);
    }

    let html = '';

    noteObj.forEach(function (element, index) {
        html += `<div class="notes-card">
        <p class="cardText">${element}</p>
        <button id="deleteBtn"><ion-icon name="trash-outline"></ion-icon></button>
    </div>`;
    });

    let notes = document.getElementById("notes")
    if (noteObj.length != 0) {
        notes.innerHTML = html;
    }
    else {
        notes.innerHTML = `<p>Notes is Empty</p>`;
    }
}


