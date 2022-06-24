//import notesAPI from './notesAPI.js'
// import notesView from './notesView.js'
import App from './App.js'


const root = document.getElementById('app')
const app = new App(root)

// notesAPI.saveNote({
//     title:'correct note',
//     body:'hello there my freind'
// })

 //notesAPI.deleteNote(45609)

// console.log(notesAPI.getAllNotes())



// const view = new notesView(app,{
//     onNoteAdd(){
//         console.log('Note has been added..')
//     },
//     onNoteSelect(id){
//         view.updateActiveNote(notes[0])
//         view.updateNotesViewVisibility(true)
//     },
//     onNoteDelete(id){
        
//         console.log('note deleted..',id)
//     },
//     onNoteEdit(newTitle,newBody){
//         console.log(newTitle,newBody)
//     }
// })


// const notes = notesAPI.getAllNotes()


// view.updateNoteList(notes)
// view.updateActiveNote(notes[1])