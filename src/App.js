import React, { useState } from 'react';
import FormWrapper from './components/Form/FormWrapper';
import SelectWrapper from './components/Form/SelectWrapper';
import InputWrapper from './components/Form/InputWrapper';
import './App.css';

function App() {
  const [formState, setFormState] = useState({});
  const [submitData, setSubmitData] = useState(null);

  const handleWatch = (data) => {
    setSubmitData(null);
    const { values, name, type } = data;
    setFormState(values);
  };

  const onSubmit = (data) => setSubmitData(data);

  return (
    <div className="App">
      <header className="App-header">
        <div className="w-3/4 px-2 py-2 mx-auto md:py-6">
          <div className="flex flex-row items-start justify-center space-x-6">
            <div>
              {!submitData && (
                <>
                  <h3>Form state:</h3>
                  <code>
                    <pre>{JSON.stringify(formState, false, '  ')}</pre>
                  </code>
                </>
              )}
              {submitData && (
                <>
                  <h3 className="text-success-200 font-bold">Submit data:</h3>
                  <code className="text-success-200">
                    <pre>{JSON.stringify(formState, false, '  ')}</pre>
                  </code>
                </>
              )}
            </div>
            <FormWrapper onSubmit={onSubmit} watchFields={handleWatch}>
              <SelectWrapper
                name="gender"
                label="Gender"
                rules={{
                  required: { value: true, message: 'Gender is required' },
                }}
                value={{ label: 'Other', value: 'other' }}
                options={[
                  { label: 'Female', value: 'female' },
                  { label: 'Male', value: 'male' },
                  { label: 'Other', value: 'other' },
                ]}
              />
              <SelectWrapper
                name="body"
                label="Body"
                rules={{
                  required: { value: true, message: 'Body is required' },
                }}
                options={[
                  { label: 'Fat ', value: 'fat' },
                  { label: 'Medium', value: 'medium' },
                  { label: 'Slim', value: 'slim' },
                ]}
              />

              <SelectWrapper
                name="hair"
                label="Hair"
                rules={{
                  validate: (value) => {
                    return (
                      (value && value.value === 'brown') ||
                      'Brown hair is required'
                    );
                  },
                }}
                options={[
                  { label: 'Black', value: 'black' },
                  { label: 'Brown', value: 'brown' },
                  { label: 'Blond', value: 'blond' },
                ]}
              />

              <SelectWrapper
                isVisible={Boolean(
                  formState.hair && formState.hair.value == 'brown'
                )}
                rules={{
                  required: { value: true, message: 'Eyes is required' },
                }}
                name="eyes"
                label="Eyes"
                options={[
                  { label: 'Green', value: 'green' },
                  { label: 'Blue', value: 'blue' },
                  { label: 'Brown', value: 'brown' },
                ]}
              />

              <InputWrapper
                name="height"
                label="Height"
                adornment="cm"
                type="number"
                rules={{
                  required: { value: true, message: 'Height is required' },
                  min: {
                    value: 50,
                    message: 'Min height 50cm',
                  },
                  max: {
                    value: 290,
                    message: 'Max height 290 cm',
                  },
                }}
              />

              <InputWrapper
                isVisible={Boolean(
                  formState.body && formState.body.value === 'medium'
                )}
                name="weight"
                label="Weight"
                adornment="kg"
                type="number"
                rules={{
                  required: { value: true, message: 'Weight is required' },
                  min: {
                    value: 1,
                    message: 'Min weight 1 kg',
                  },
                  max: {
                    value: 1000,
                    message: 'Max weight 1000 kg',
                  },
                }}
              />
              <button
                type="submit"
                className="bg-primary-400 text-primary-700 w-1/4 font-bold rounded-lg p-4 hover:bg-primary-500 hover:text-primary-800">
                Submit
              </button>
            </FormWrapper>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
