import React from 'react';
import PropTypes from 'prop-types'; /*eslint-disable-line*/
import Modal from '../modal/modal';
import NoteForm from '../note-form/note-form';
import './note-item.scss';

export default class NoteItem extends React.Component {
  render() {
    const { note, handleRemoveNote, handleUpdateNote} = this.props; /*eslint-disable-line*/
    const showModal = () => handleUpdateNote({ ...note, editing: true}); /*eslint-disable-line*/
    const hideModal = () => handleUpdateNote({ ...note, editing: false}); /*eslint-disable-line*/
    const updateAndClose = (updatedNote) => {
      return handleUpdateNote({ ...updatedNote, editing: false });
    };
    return (
      <div className="note-item" data-cy="note-item" onDoubleClick={showModal}>
      <strong className="note-title">{note.title}</strong>
      <p className="note-content">{note.content}</p>
      <button
          className="note-buttons"
          onClick = {() => handleRemoveNote(note)} 
          data-cy="note-item-dlt-btn">
          Delete
      </button>
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
