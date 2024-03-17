import React, { useState } from "react";


function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [details, setDetails] = useState("")
  const [category, setCategory] = useState("")

  
    function handleDetails(event) {
      setDetails(event.target.value)
    }
    function handleChangeCategory(event){
      setCategory(event.target.value)
    }
    const handleSubmit= (event) => {
      event.preventDefault()
      const newTask = {
        text: details,
        category: category
      }
      onTaskFormSubmit(newTask);
      setDetails("")
      setCategory(categories[0])
    }
  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input 
        type="text" 
        name="text" 
        value={details}
        onChange={handleDetails}
        />
      </label>
      <label>
        Category
        <select name="category" 
        value={category}
        onChange={handleChangeCategory}
        >
       {categories.map((category) => category !== "All" ? (
      <option key={category} value={category}>{category}</option>) : null)}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
