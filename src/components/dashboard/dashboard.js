import React from 'react';
import uuid from 'uuid/v4';
import NoteForm from '../note-form/note-form';
import './dashboard.scss';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [],
      error: null,
    };
  }

  handleAddNote = (note) => {
    if (note.title === '') {
      return this.setState({ error: true });
    }
    note.createdOn = new Date();
    note._id = uuid();
    return this.setState((previousState) => {
      return {
        notes: [...previousState.notes, note],
        error: null,
      };
    });
  }

  removeNote(index) {
    this.setState({
      notes: this.state.notes.filter((_, i) => i !== index),
    });
  }
  
  handleNotesList = () => {
    return (
      <div className="notes-container">
        {
          this.state.notes.map((note, index) => {
            return (
              <div key={note._id} className="note-post">
                  <h2 className="note-title">{note.title}</h2>
                  {/* <h5 className="note-date">Created on: {note.createdOn.toDateString(null)}<br />{note.createdOn.toLocaleTimeString('en-US')}</h5> */}
                  <p className="note-content">{note.content}</p>
                  <button className="note-remove" onClick = {this.removeNote.bind(this, index)}>Remove Note</button>
            </div>
            );
          })
        }
      </div>
    );
  }

  render() {
    return (
      <section className="dashboard">
        <NoteForm handleAddNote={ this.handleAddNote } />
        {
          this.state.error && <h2 className="error">You must enter a note title.</h2>
        }
        { this.handleNotesList() }
      </section>
    );
  }
}
