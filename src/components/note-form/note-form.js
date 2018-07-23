import React from 'react';
import PropTypes from 'prop-types';

const defaultState = {
  title: '',
  content: '',
  completed: false,
  editing: false,
};

export default class NoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.note ? props.note : defaultState;
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleComplete(this.state);
    this.setState(defaultState);
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const buttonText = this.props.note ? 'Update Note' : 'Create Note';
    return (
      <form onSubmit={ this.handleSubmit } data-cy="note-form">
      <input
        type="text"
        name="title"
        placeholder="Note title"
        value={ this.state.title }
        onChange={ this.handleChange }
        data-cy="title"
      />
      <textarea 
        cols="60" 
        rows="5"
        name="content"
        placeholder="Write your note here"
        value={ this.state.content }
        onChange={ this.handleChange }
        data-cy="content"
      />
      <button type="submit">{buttonText}</button>
      </form>
    );
  }
}

NoteForm.propTypes = {
  handleComplete: PropTypes.func,
  handleRemoveNote: PropTypes.func,
  note: PropTypes.object,
};
