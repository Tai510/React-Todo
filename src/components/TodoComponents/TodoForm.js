import React from 'react';

function TodoForms({inputText,handleChange,clearComplete,addTask}) {
  return (
  <form onSubmit={addTask} autocomplete="off" className='form-section'>
        <h3>Add Item</h3>
   <div className='input-section'>
     <input className="form-input" type="text" name="inputText"
     value={inputText} onChange={handleChange}/>
     <i onClick={addTask} class="fas fa-plus-circle"></i>
     <i onClick={clearComplete}  class="fas fa-minus-circle"></i>
     {/* <i onClick={clearComplete} class="fas fa-trash-restore-alt"></i> */}
     {/* <button>Add</button> */}
   </div>  
  </form>
  )
}

export default TodoForms