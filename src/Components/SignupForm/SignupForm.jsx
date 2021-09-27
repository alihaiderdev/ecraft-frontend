import React, { useState } from 'react';
import { connect } from 'react-redux';
import { signup } from './../../Redux/auth/authActions';

const SignupForm = ({ signup }) => {
  var [name, setName] = useState('');
  var [email, setEmail] = useState('');
  var [password, setPassword] = useState('');
  var [passwordConfirm, setPasswordConfirm] = useState('');
  var [role, setRole] = useState('artist');

  const hanldeSubmit = (e) => {
    e.preventDefault();
    signup({ name, email, password, passwordConfirm, role });
  };
  return (
    <div>
      <form onSubmit={hanldeSubmit}>
        <input value={name} onChange={(e) => setName(e.target.value)} type='text' placeholder='Full name' />
        <input value={email} onChange={(e) => setEmail(e.target.value)} type='text' placeholder='Email' />
        <input value={password} onChange={(e) => setPassword(e.target.value)} type='text' placeholder='Password' />
        <input value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)} type='text' placeholder='Re-enter Password' />
        <select onChange={(e) => setRole(e.target.value)} value={role}>
          <option value='artist'>Artist</option>
          <option value='buyer'>Buyer</option>
        </select>
        <button type='submit'>sign-up</button>
      </form>
    </div>
  );
};

const actions = {
  signup,
};

export default connect(null, actions)(SignupForm);
