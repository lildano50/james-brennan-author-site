/*

THIS PAGE WAS SET UP USING GRAPHQL/MONGODB. JUMPING OFF POINT BUT JUST DEPENDS IF WE USE THAT TECH
OR NOT. LEAVING AS IS FOR NOW BUT BY NO MEANS A REQUIREMENT

*/


import { useState } from 'react';
import { Link } from 'react-router-dom';

// import { useMutation } from '@apollo/client';
// import { ADD_PROFILE } from '../utils/mutations';
// import Auth from '../utils/auth';

const Signup = () => {
    // const [formState, setFormState] = useState({
    //     firstName: '',
    //     lastName: '',
    //     email: '',
    //     password: '',
    // });
    // const [addProfile, { error, data }] = useMutation(ADD_PROFILE);

    // // updates the state based on the form input changes
    // const handleChange = (event) => {
    //     const { name, value } = event.target;

    //     setFormState({
    //         ...formState,
    //         [name]: value,
    //     });
    // };

    // // user's submission form
    // const handleFormSubmit = async (event) => {
    //     event.preventDefault();
    //     console.log(formState);

    //     try {
    //         const { data } = await addProfile({
    //             variables: { ...formState },
    //         });

    //         Auth.login(data.addProfile.token);
    //     } catch (e) {
    //         console.error(e);
    //     }
    // };

    return (
        <main className="flex-row justify-center mb-4">
            <div className="col-12 col-lg-10">
                <div className="card">
                    <h4 className="card-header bg-dark text-light p-2">Sign Up</h4>
                    <div className="card-body">
                        {/* {data ? (
                            <p>
                                Successfully signed up! You can now go {' '}
                                <Link to="/">to the homepage.</Link>
                            </p>
                
                        ): ( */}
                            {/* <form onSubmit={handleFormSubmit}> */}
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
                                    placeholder = "*****"
                                    name="password"
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
                        {/* )} */}

                        {/* { error && (
                            <div className = "my-3 p-3 bg-danger text-white">
                                {error.message}
                            </div>
                        )} */}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Signup;
