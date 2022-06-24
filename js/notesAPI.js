export default class notesAPI {
  static getAllNotes() {
    const notes = JSON.parse(localStorage.getItem("notes-app") || "[]");
    return notes.sort((a,b)=>{
        return new Date(a.updated) > new Date(b.updated) ? -1 : 1
    });
  }

  static saveNote(noteToSave) {
    const notes = notesAPI.getAllNotes();
    const existing = notes.find((note) => note.id === noteToSave.id);

    if (existing) {
      existing.title = noteToSave.title;
      existing.body = noteToSave.body;
      existing.updated = new Date().toUTCString();
    } else {
      noteToSave.id = Math.floor(Math.random() * 100000);
      noteToSave.updated = new Date().toUTCString();
      notes.unshift(noteToSave);
    }
    localStorage.setItem("notes-app", JSON.stringify(notes));
  }

  static deleteNote(id) {
    const notes = notesAPI.getAllNotes();
    const newNotes = notes.filter(note => note.id != id);
    localStorage.setItem("notes-app", JSON.stringify(newNotes));
  }
}
