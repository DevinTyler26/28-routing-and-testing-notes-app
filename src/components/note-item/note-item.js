import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../modal/modal';
import NoteForm from '../note-form/note-form';
import './note-item.scss';

export default class NoteItem extends React.Component {
  render() {
    const { note, handleRemoveNote, handleUpdateNote} = this.props;
    const showModal = () => handleUpdateNote({ ...note, editing: true});
    const hideModal = () => handleUpdateNote({ ...note, editing: false});
    const updateAndClose = (updatedNote) => {
      return handleUpdateNote({ ...updatedNote, editing: false });
    };
    return (
      <div className="note-item" data-cy="note-item">
      <strong className="note-title">{note.title}</strong>
      <p className="note-content">{note.content}</p>
      <div className="flex-buttons">
      <button
          className="note-buttons"
          onClick = {() => handleRemoveNote(note)} 
          data-cy="note-item-btn">
          Delete
      </button>
      <button 
          className="note-buttons"      
          onClick={showModal}
          data-cy="note-item-btn">
          Update
        </button>
        </div>
        <Modal 
          show={note.editing}
          handleClose={hideModal}
        >
          <h3>Editing {note.title}</h3>
          <NoteForm 
            handleComplete={updateAndClose}
            note={note}
          />
        </Modal>
      </div>
    );
  }
}
