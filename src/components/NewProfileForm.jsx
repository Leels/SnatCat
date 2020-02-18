import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';


function NewProfileForm(props){
  let _name = null;
  let _image = null;
  let _status = null;

  function handleNewProfileFormSubmission(event) {
    event.preventDefault();
    props.onNewTicketCreation({name: _name.value, image: _image.value, status: _status.value, id: v4()});
    _name.value = '';
    _image.value = '';
    _status.value = '';
  }

  return (
    <div>
    <form onClick={handleNewProfileFormSubmission}>
    <input
    type='text'
    id='name'
    placeholder='Garfield'
    ref={(input) => {_name = input;}}/>
    <input
    type='text'
    id='image'
    placeholder='Image URL'
    ref={(input) => {_image = input;}}/>
    <textarea
    id='status'
    placeholder='Mondays.....Am I right?!?'
    ref={(textarea) => {_status = textarea;}}/>
    <button type='submit'>¡Meow!</button>
    </form>
    </div>
  );
}
NewProfileForm.propTypes = {
  onNewProfileCreation: PropTypes.func
};


export default NewProfileForm;
