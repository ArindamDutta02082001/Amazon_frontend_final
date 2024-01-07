/*
note_no  - to provide uniue id to every new note created | keeps total new note created irrespective of how many deleted
note_desc - contains note description and associated note id

startFunction(); will run at the start of the index.html
JS file execution starts here
*/

startFunction();

function startFunction() {
  const note_no = JSON.parse(localStorage.getItem("note_no"));
  const note_desc = JSON.parse(localStorage.getItem("note_desc"));

  if (note_no == null || note_desc == null) {
    last.innerText = "Please Insert Notes ! Nothing to show . . . ";
    localStorage.setItem("note_no", "0");
  } else if (note_no != null && note_desc != null) {
    // to render the notes from localStorage
    displayItems();
  }
}

/************************************
display function for rendereing notes from localStorage

name attributes are attached to tags to give them their unique id
in <p> tag it is attached in differet format i.e in tags where name is not a default attr 
we pass this.getAttribute('name')
 but 
in <button> tag , name is default attr we can pass   this.name

**************************************/
function displayItems() {
  const noteDescriptionArray = JSON.parse(localStorage.getItem("note_desc"));
  const last = document.getElementById("last");
  for (let i = 0; i < noteDescriptionArray.length; i++) {
    last.insertAdjacentHTML(
      "beforebegin",
      `<div class="${
        noteDescriptionArray[i]?.id
      }"><h1 style="font-family: 'Kaushan Script', cursive;
      ">Note:${i + 1}</h1>
      <p style="font-family: 'Kaushan Script', cursive; color:black; text-align: center;  margin:1rem;        background:linear-gradient(170deg,white,white,	rgb(255, 191, 0));
    width:60%;margin:auto;" 
    id ="${noteDescriptionArray[i]?.id}" 
    name ="${
      noteDescriptionArray[i]?.id
    }"  onclick="printNote(this.getAttribute('name'))"  >
    ${noteDescriptionArray[i]?.desc}
    </p> 
    <button name="${
      noteDescriptionArray[i]?.id
    }" onclick="deleteNote(this.name)">Delete Note${i + 1}</button>
    <button name="${
      noteDescriptionArray[i]?.id
    }" onclick="edit_n(this.name)" >Edit Note${i + 1}</button>
    </div>`
    );
  }
}
// testing purpose
function printNote(ele) {
  console.log(ele);
}

/*******************
 to delete a note given a id , passed in parameter
  using filter function that note is deleted
 ******************/

function deleteNote(id) {
  let noteDescriptionArray = JSON.parse(localStorage.getItem("note_desc"));
  noteDescriptionArray = noteDescriptionArray.filter((desc) => desc.id != id);
  localStorage.setItem("note_desc", JSON.stringify(noteDescriptionArray));

  window.location.reload();
}

/*
adding a new node with a description and a id
*/
function addNewNote() {
  // to keep track of total no of notes created , irresective of deleted ones
  const totalNoOfNote = JSON.parse(localStorage.getItem("note_no"));
  let N = totalNoOfNote;
  N = N + 1;
  localStorage.setItem("note_no", N);

  // new note created
  const noteDescriptionArray = JSON.parse(localStorage.getItem("note_desc"));

  if (noteDescriptionArray == null) {
    const new_desc = [];
    const newNoteObject = {
      desc: `${document.getElementById("write_area").value}`,
      id: `note1`,
    };
    new_desc.push(newNoteObject);
    localStorage.setItem("note_desc", JSON.stringify(new_desc));
  } else {
    const tempobj2 = {
      desc: `${document.getElementById("write_area").value}`,
      id: `note${N}`,
    };
    noteDescriptionArray.push(tempobj2);
    localStorage.setItem("note_desc", JSON.stringify(noteDescriptionArray));
  }

  document.getElementById("write_area").value = "";
  window.location.reload();
}

/*
editing  a note with a given id
*/

function edit_n(id) {
  let wrt = document.getElementById("write_area");
  wrt.value = `${document.getElementById(`${id}`)?.textContent}`;
  document
    .getElementById(`${id}`)
    .insertAdjacentHTML(
      "afterend",
      `<button name="${id}" onclick="overWriteDescription(this.name)">Overwrite</button>`
    );
}

function overWriteDescription(id) {
  let noteDescriptionArray = JSON.parse(localStorage.getItem("note_desc"));

  noteDescriptionArray = noteDescriptionArray.map((item) => {
    if (item.id == id) {
      item.desc = document.getElementById("write_area").value;
    }
    return item;
  });
  localStorage.setItem("note_desc", JSON.stringify(noteDescriptionArray));
  location.reload();
}

// to print the notes in screen
function printNotes() {
  window.print();
}

// clear entire localStorage
function deleteAll() {
  localStorage.clear();
  startFunction();
  location.reload();
}
