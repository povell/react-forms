import { useState } from 'react';
import { TextInput } from './TextInput';
import { IconAt } from '@tabler/icons-react';

export function SingUp() {
  const [inputs, setInputs] = useState({
    name: '',
    nickname: '',
    email: '',
    gender: 'male',
    password: '',
    repeatPassword: '',
  });

  const resetHandler = (e) => {
  }
  
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(inputs);
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
    <div className='sign-up_wrapper'>
      <form className="sign-up_form"
        onSubmit={submitHandler}
        onChange={changeHandler}
        onReset={resetHandler}
      >
        <h3>Sign up</h3>
        <div className='sign-up_inputs'>
          <TextInput
            name="name"
            placeholder="name"
            label="name"
            withAsterisk
          />
          <TextInput
            name="nickname"
            placeholder="nickname"
            label="nickname"
            withAsterisk
            icon={<IconAt size="0.8rem" />}
          />
          <TextInput
            name="email"
            type="email"
            placeholder="email"
            label="email"
            withAsterisk
          />
          <fieldset className="sign-up_radio-inputs">
            <legend>пол</legend>
            <TextInput
              name="gender"
              type="radio"
              label="мужской"
              value="male"
            />
            <TextInput
              name="gender"
              type="radio"
              label="женский"
              value="female"
            />
          </fieldset>
          <TextInput
            name="password"
            type="password"
            placeholder="password"
            label="password"
            withAsterisk
          />
          <TextInput
            name="repeatPassword"
            type="password"
            placeholder="repeat password"
            label="repeat password"
            withAsterisk
          />
        </div>
        <button>Войти</button>
      </form>
    </div>
  )
}