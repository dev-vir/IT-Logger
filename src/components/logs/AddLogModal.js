import React, {useState} from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addLog } from '../../actions/logActions'
import M from 'materialize-css/dist/js/materialize.min.js'

const AddLogModal = ({addLog}) => {

    const [message, setMessage] = useState('');
    const [attention, setAttention] = useState(false);
    const [tech, setTech] = useState('');

    const onChange = e => {
        setMessage(
            e.target.value
        )
    }

    const onSelect = e => {
        setTech(
            e.target.value
        )
    }

    const onCheck = e => {
        setAttention(!attention)
    }

    const onSubmit = e => {
        if(message === '' || tech === '') {
            M.toast({html: 'Please Enter a message and Tech'})
        } else {
            const newLog = {
                message,
                attention,
                tech,
                date: new Date()
            }

            addLog(newLog);

            M.toast({html: `Log added by ${tech}`})
            // Clear Fields
            setMessage('');
            setAttention(false);
            setTech('');
        }
    }

    return (
        <div id='add-log-modal' className='modal' style={modalStyle}>
            <div className="modal-content">
                <h4>Enter System Log</h4>
                <div className="row">
                    <div className="input-field">
                        <input 
                            type="text" 
                            name='message' 
                            value={message} 
                            onChange={onChange} 
                        />
                        <label htmlFor="message" className='active'>Log Message</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <select 
                            name="tech" 
                            value={tech} 
                            className='browser-default' 
                            onChange={onSelect}
                        >
                            <option value="" disabled>
                                Select Technician
                            </option>
                            <option value="John Doe">John Doe</option>
                            <option value="Rick Martin">Rick Martin</option>
                            <option value="Jane Doe">Jane Doe</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <p>
                            <label>
                                <input 
                                    type="checkbox" 
                                    className='filled-in' 
                                    checked={attention} 
                                    value={attention} 
                                    onChange={onCheck}
                                />
                                <span>Needs Attention</span>
                            </label>
                        </p>
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

AddLogModal.propTypes = {
    addLog: PropTypes.func.isRequired,
}

const modalStyle = {
    width: '75%',
    height: 'auto%'
};

export default connect(null, {addLog})(AddLogModal);
