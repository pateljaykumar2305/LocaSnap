import React , {useCallback , useState} from "react";
import Input from "../../shared/component/FormElements/Input";
import { VALIDATOR_REQUIRE , VALIDATOR_MINLENGTH} from "../../shared/util/validator";
  

import './NewPlace.css';

const NewPlace = () => {
    
    const [formState, setFormState] = useState({
        title: '',
        description: '',
        address: '',
        isValid: false
      });
    
      const inputHandler = useCallback((id, value, isValid) => {
        setFormState(prevState => {
          // We can do advanced form validity checks here
          let formIsValid = true;
          // For a quick example, check if each field is valid
          // In a real app, you'd handle all fields systematically
          if (id === 'title') {
            // We know the user changed the title field
            formIsValid = formIsValid && isValid && prevState.description.length > 0 && prevState.address.length > 0;
          }
          // etc. for other fields or do a more robust approach
    
          return {
            ...prevState,
            [id]: value,
            isValid: formIsValid
          };
        });
      }, []);


    const placeSubmitHandler = event => {
    event.preventDefault();
    // Log data to the console
    console.log('Form submitted!');
    console.log('Title:', formState.title);
    console.log('Description:', formState.description);
    console.log('Address:', formState.address);
  };
      
    return(
       <form className="place-form" onSubmit={placeSubmitHandler}>
        <h2>Add a New Place</h2>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        placeholder="Enter title"
        validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid title (min. 5 characters)."
        onInput={inputHandler}
      />

      <Input
        id="description"
        element="textarea"
        label="Description"
        placeholder="Describe the place"
        validators={[VALIDATOR_MINLENGTH(10)]}
        errorText="Please enter at least 10 characters."
        onInput={inputHandler}
      />

      <Input
        id="address"
        element="input"
        type="text"
        label="Address"
        placeholder="Address"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid address."
        onInput={inputHandler}
      />

      <button type="submit">ADD PLACE</button>
       </form>
    );
};

export default NewPlace;