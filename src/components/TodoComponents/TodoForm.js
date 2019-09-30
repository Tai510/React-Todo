import React from 'react';

function TodoForms({inputText,handleChange,clearComplete,addTask}) {
  return (
  <form className='form-section'>
   <div>
     <input className="form-input" placeholder="Add Item" type="text" name="inputText"
     value={inputText} onChange={handleChange}/>
   </div>
   <div className='buttons-div'>
     <div>
     <button onClick={addTask}>Add Todo</button>
     </div>
     <div>
     <button onClick={clearComplete}>Clear Completed</button>
     </div>
    </div> {/* buttons-div end */}
     
  </form>
  )
}

export default TodoForms