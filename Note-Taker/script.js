let notes = JSON.parse(localStorage.getItem("notes")) || [];
const inputTitle = document.querySelector("#noteTitle");
const inputContent = document.querySelector("#noteContent");

displayNotes();

function saveNote(){
    console.log("click working fine");
    
    let note={
        title:inputTitle.value,
        content:inputContent.value
    }
    notes.push(note);
    localStorage.setItem("notes",JSON.stringify(notes));
    
    //clear the fields
    inputTitle.value="";
    inputContent.value="";
    
    displayNotes();
}

function displayNotes(){
    const notesListDiv = document.querySelector("#notesList");
    const noteTemplate = document.querySelector("#noteTemplate");
    
    notesListDiv.innerHTML = "";
    // iterating over notes
    notes.forEach((note)=>{
        let templateChild = document.importNode(noteTemplate.content,true);

        // template.querySelector(".note-checkbox")
        templateChild.querySelector(".note-checkbox");
        templateChild.querySelector(".note-title").textContent=note.title;
        templateChild.querySelector(".note-content").textContent=note.content;
        
        notesListDiv.appendChild(templateChild);
    });
    
}