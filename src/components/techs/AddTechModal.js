import React, {useState} from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { addTech } from '../../actions/techActions';
import M from 'materialize-css/dist/js/materialize.min.js'

const AddTechModal = ({addTech}) => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const onChange = e => {
        setFirstName(
            e.target.value
        )
    }

    const changeLastName = e => {
        setLastName(
            e.target.value
        )
    }

    const onSubmit = e => {
        if(firstName === '' || lastName === '') {
            M.toast({html: 'Please Enter first name and last name'})
        } else {
            addTech({
                firstName, 
                lastName
            });

            M.toast({html: `${firstName} ${lastName} was added as a Tech`})

            // Clear Fields
            setFirstName('');
            setLastName('')
        }
    }

    return (
        <div id='add-tech-modal' className='modal'>
            <div className="modal-content">
                <h4>Add new Tech</h4>
                <div className="row">
                    <div className="input-field">
                        <input 
                            type="text" 
                            name='firstName' 
                            value={firstName} 
                            onChange={onChange} 
                        />
                        <label htmlFor="firstName" className='active'>First Name</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <input 
                            type="text" 
                            name='lastName' 
                            value={lastName} 
                            onChange={changeLastName} 
                        />
                        <label htmlFor="lastName" className='active'>Last Name</label>
                    </div>
                </div>
            </div>
            <div className="modal-footer">
                <a href="#!" onClick={onSubmit} className='modal-close waves-effect waves-dark red btn'>
                    Enter
                </a>
            </div>           
        </div>
    );
}

AddTechModal.propTypes = {
    addTech: PropTypes.func.isRequired,
}

export default connect(null, { addTech })(AddTechModal)
