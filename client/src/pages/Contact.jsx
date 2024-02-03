import { Link } from 'react-router-dom';
import React, { useState } from 'react';

const Contact = () => {

  
        return (
            <div>
                <form>
                    <input
                        className='form-input'
                        placeholder='First Name'
                        name="firstName"
                    />
                    <input
                        className='form-input'
                        placeholder='Last Name'
                        name='lastName'
                    />
                    <input
                        className = "form-input"
                        placeholder = "Name@email.com"
                        name = "email"
                        type = "email"
                        // value={formState.email}
                        // onChange={handleChange}
                    />
                    <input
                        className = "form-input"
                        placeholder = "Message me here..."
                        name="message"
                        style={{width: "300px", height: "100px"}}
                        // value={formState.password}
                        // onChange={handleChange}
                    />                                
                    <button
                        className = "btn btn-block btn-info"
                        // style = {{ cursor: 'pointer '}}
                        type = 'submit'
                    >
                        Submit
                    </button>
                </form>
            </div>
        )
};

export default Contact;
