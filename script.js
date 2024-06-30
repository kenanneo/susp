function addNote() {
    var noteInput = document.getElementById("noteInput");
    var noteList = document.getElementById("noteList");

    if (noteInput.value.trim() === "") {
        alert("Please enter a note!");
        return;
    }

    var li = document.createElement("li");
    var textarea = document.createElement("textarea");
    textarea.value = noteInput.value;
    textarea.setAttribute("readonly", true);
    li.appendChild(textarea);

    var editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.onclick = function() {
        toggleEditMode(textarea);
    };
    li.appendChild(editButton);

    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function() {
        deleteNote(li);
    };
    li.appendChild(deleteButton);

    noteList.appendChild(li);

    noteInput.value = "";
}

function toggleEditMode(textarea) {
    textarea.toggleAttribute("readonly");
    if (!textarea.getAttribute("readonly")) {
        textarea.focus();
    }
}

function deleteNote(li) {
    li.remove();
}
