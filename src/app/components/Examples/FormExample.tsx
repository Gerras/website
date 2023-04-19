import Form from '../../../design-library/components/Form/Form';
import FormInput from '../../../design-library/components/Form/Input/FormInput';
import React from 'react';

const FormExample: React.FC = () => {
  return (
    <Form initialState={{}}>
      <div>
        <label htmlFor="example">Let's submit some text</label>
        <FormInput id="example" type="text" name="text" />
      </div>
      <div>
        <input type="submit" value="Send" />
      </div>
    </Form>
  );
};

export default FormExample;
