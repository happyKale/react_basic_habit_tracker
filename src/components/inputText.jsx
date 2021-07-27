import React, { memo } from 'react';

const InputText = memo((props) => {
    const inputRef = React.createRef();
    const formRef = React.createRef();

    const onSubmit = (event) => {
        event.preventDefault();
        const name = inputRef.current.value;
        name && props.onAdd(name);
        inputRef.current.value = '';
    };
    return (
        <form ref={formRef} onSubmit={onSubmit}>
            <input
              ref={inputRef}
              className="input-habit"
              type="text" 
              placeholder="Habit"/>
            <button className="btn-add">Add</button>
        </form>
    );
});

export default InputText;
