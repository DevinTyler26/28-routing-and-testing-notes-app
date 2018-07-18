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
      <ul>
        {
          this.state.notes.map((note, index) => {
            return (
              <li key={note._id}>
                  <h2>{note.title}</h2>
                  {/* <h5>{note.createdOn}</h5> */}
                  <p>{note.content}</p>
                  <button className="remove" onClick = {this.removeNote.bind(this, index)}>Remove Note</button>
            </li>
            );
          })
        }
      </ul>
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
