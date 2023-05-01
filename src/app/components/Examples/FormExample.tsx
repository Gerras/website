import Button from '../../../design-library/components/Button/Button';
import Form from '../../../design-library/components/Form/Form';
import FormInput from '../../../design-library/components/Form/Input/FormInput';
import FormItem from '../../../design-library/components/Form/FormItem/FormItem';
import FormLabel from '../../../design-library/components/Form/Label/FormLabel';
import React from 'react';
import Typography from '../../../design-library/components/Typography/Typography';

interface FormShape {
  text?: string;
  text2?: string;
  drone?: 'huey' | 'dewey' | 'louie';
}

const FormExample: React.FC = () => {
  const handleOnSubmit = (formValues: FormShape) => {
    // TODO: testing. remove
    console.log('formValues', formValues);
  };

  return (
    <>
      <Typography variant="h1" gutterBottom>
        Forms
      </Typography>
      <Form<FormShape>
        initialState={{
          text: 'hello',
          drone: 'dewey'
        }}
        onSubmit={handleOnSubmit}
      >
        <FormItem>
          <FormLabel htmlFor="textExample">Let's submit some text</FormLabel>
          <FormInput id="textExample" type="text" name="text" />
        </FormItem>
        <FormItem>
          <FormLabel htmlFor="textExample2">Let's submit some text2</FormLabel>
          <FormInput id="textExample2" type="text" name="text2" />
        </FormItem>
        <FormItem>
          <FormLabel htmlFor="huey">Huey</FormLabel>
          <FormInput type="radio" id="huey" name="drone" value="huey" />
          <FormLabel htmlFor="dewey">Dewey</FormLabel>
          <FormInput type="radio" id="dewey" name="drone" value="dewey" />
          <FormLabel htmlFor="louie">Louie</FormLabel>
          <FormInput type="radio" id="louie" name="drone" value="louie" />
        </FormItem>
        <div>
          <Button
            directStyles={{ marginLeft: 0 }}
            variant="secondary"
            type="reset"
          >
            reset
          </Button>
          <Button directStyles={{ marginLeft: 0 }} type="submit">
            submit
          </Button>
        </div>
      </Form>
    </>
  );
};

export default FormExample;
