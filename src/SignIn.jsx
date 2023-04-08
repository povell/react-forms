import { useState } from 'react';
import { TextInput } from './TextInput';

export function SingIn() {
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });

  const resetHandler = (e) => {
    setInputs({});
  }
  
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(inputs);
    e.target.reset();
  }

  const changeHandler = (e) => {
    setInputs((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      }
    });
  }
  
  return (
    <div className='sign-in_wrapper'>
      <form className="sign-in_form"
        onSubmit={submitHandler}
        onChange={changeHandler}
        onReset={resetHandler}
      >
        <h3>Sign in</h3>
        <div className='sign-in_inputs'>
          <TextInput
            name="email"
            type="email"
            placeholder="email"
            label="email"
            // radius={10}
            withAsterisk
            // size="xl"
            // error='error message'
            // variant='unstyled'
          />
          <TextInput
            type="password" 
            name="password"
            placeholder="password"
            label="password"
            withAsterisk
          />
        </div>
        <button>Войти</button>
      </form>
    </div>
  )
}
