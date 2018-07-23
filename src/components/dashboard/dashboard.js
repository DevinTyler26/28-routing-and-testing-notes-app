import React from 'react';
import uuid from 'uuid/v4';
import NoteForm from '../note-form/note-form';
import NoteItem from '../note-item/note-item';
import { renderIf } from '../../lib/utils';
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

  handleRemoveNote = (noteToRemove) => {
    this.setState((previousState) => {
      return {
        notes: previousState.notes.filter(note => note._id !== noteToRemove._id),
      };
    });
  }

  handleUpdateNote = (noteToUpdate) => {
    return this.setState((previousState) => {
      return {
        notes: previousState.notes.map(note => (note._id === noteToUpdate._id ? noteToUpdate : note)),
      };
    });
  }
   
  handleNotesList = () => {
    return (
      <div className="notes-container">
        {
          this.state.notes.map((note) => {
            return (
              <div key={note._id} className="note-post">
              <NoteItem
                  note={note}
                  handleRemoveNote={this.handleRemoveNote}                  
                  handleUpdateNote={this.handleUpdateNote}
              />
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
        <NoteForm handleComplete={ this.handleAddNote } />
        {
          renderIf(this.state.error && <h2 className="error">You must enter a note title.</h2>)
        }
        { this.handleNotesList() }
      </section>
    );
  }
}
