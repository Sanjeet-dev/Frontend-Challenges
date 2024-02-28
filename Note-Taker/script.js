let notes = JSON.parse(localStorage.getItem("notes")) || [];
const inputTitle = document.querySelector("#noteTitle");
const inputContent = document.querySelector("#noteContent");

displayNotes();

function saveNote(){
    console.log("click working fine");
    
    let note={
        title:inputTitle.value.trim(),
        content:inputContent.value.trim()
    }
    if(note.title !== "" && note.content !== ""){
    notes.push(note);
    localStorage.setItem("notes",JSON.stringify(notes));
    
    
    //clear the fields
    inputTitle.value="";
    inputContent.value="";
    
    displayNotes();
    }

}

function displayNotes(){
    const notesListDiv = document.querySelector("#notesList");
    const noteTemplate = document.querySelector("#noteTemplate");
    
    notesListDiv.innerHTML = "";
    // iterating over notes
    notes = JSON.parse(localStorage.getItem("notes")) ? JSON.parse(localStorage.getItem("notes")) : []; 
    notes.forEach((note, index)=>{
        // let templateChild = document.importNode(noteTemplate.content,true);
        let templateChild = noteTemplate.content.cloneNode(true);

        // template.querySelector(".note-checkbox")
        templateChild.querySelector(".note-checkbox");
        templateChild.querySelector(".note-title").textContent=note.title;
        templateChild.querySelector(".note-content").textContent=note.content;
        
        notesListDiv.appendChild(templateChild);
    });
    
}

function deleteNote(){
    let checkboxes = document.querySelectorAll(".note-checkbox:checked");

    checkboxes.forEach((checkbox) =>{
        let noteDiv = checkbox.parentElement;
        console.log(noteDiv);

        //This line finds the index of the note container within its parent's children 
        //(all note containers). It converts the parent's children (HTMLCollection) to 
        //an array using Array.from(), and then finds the index of the note container in that array using indexOf()
        let noteIndex = Array.from(noteDiv.parentElement.children).indexOf(noteDiv);
        console.log(noteIndex);

        notes = notes.filter((note,id)=> id !== noteIndex);

        localStorage.setItem("notes", JSON.stringify(notes));
        noteDiv.remove();

    })

}

// clear all the notes from the display
function clearAllNotes(){
    localStorage.removeItem("notes");
    notes.length = 0;
    displayNotes();
}

function searchNotes(){
    let searchInput = document.getElementById("search").value.toLowerCase();

    let filteredNotes = notes.filter((note) => {
        return note.title.toLowerCase().includes(searchInput) || note.content.toLowerCase().includes(searchInput);
    });

    displayFilteredNotes(filteredNotes);
}

function displayFilteredNotes(filteredNotes){
    const notesListDiv = document.querySelector("#notesList");
    const noteTemplate = document.querySelector("#noteTemplate");

    notesListDiv.innerHTML = "";

    // Iterating over filtered notes
    filteredNotes.forEach((note,index) => {
        // let templateChild = document.importNode(noteTemplate.content, true);
        let templateChild = noteTemplate.content.cloneNode(true);

        templateChild.querySelector(".note-title").textContent = note.title;
        templateChild.querySelector(".note-content").textContent = note.content;

        notesListDiv.appendChild(templateChild);
    });
}
