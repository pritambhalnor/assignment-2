import React from 'react'

export default function Todo({todo}) {
  return (
    <div className='my-2'>
      <table>
        <tbody className='text-capitalize'>
        <tr>
          <td>First Name : </td>
          <td>{todo.firstname}</td>
        </tr>
        <tr>
          <td>Last Name : </td>
          <td>{todo.lastname}</td>
          </tr>
        </tbody>
      </table>
       
       </div>
  )
}
