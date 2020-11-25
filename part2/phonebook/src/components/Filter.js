import React from 'react';

const Filter = (props) => {
    
    return (
        <div>
            Filter by name : <input onChange={props.onChangeHandler} type="text"/>
        </div>
    );
};

export default Filter;