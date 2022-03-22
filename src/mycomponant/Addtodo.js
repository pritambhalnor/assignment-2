import React, { useState } from 'react'

export default function Addtodo(prop) {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const submit = (e) => {
    e.preventDefault();
    if (!firstname || !lastname) {
      alert("First Name $ Last Name not defined");
    }
    else {
      prop.addTodo(firstname, lastname);
      setfirstname("");
      setlastname("");
    }
  }

  return (
    <div className='container my-3'>
      <h3 className='text-center my-5'>Assignment 2</h3>

      <form action="" onSubmit={submit}>
        <div className="mb-3 row">
          <label htmlFor="tittle" className="col-sm-2 col-form-label">First Name</label>
          <div className="col-sm-10">
            <input type="text" value={firstname} onChange={(e) => { setfirstname(e.target.value) }} className="form-control" id="tittle" />

          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="lastname" className="col-sm-2 col-form-label">Last Name</label>
          <div className="col-sm-10">
            <input type="text" value={lastname} onChange={(e) => { setlastname(e.target.value) }} className="form-control" id="lastname" />
          </div>
        </div>
        <button className='btn-sm btn-success'>Submit</button>
      </form>
    </div>
  )
}
