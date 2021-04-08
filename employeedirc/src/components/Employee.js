import React from "react";

//create a table for employees 
// employee data should include first name, last name, phone number, email
function EmployeeDirc() {
    const table = (props) => {
        return (
 
          <tr>

            <td className="align-middle">
                <img src={props.employee.img} alt="Employee Picture" />
            </td>
            <td className="text-center align-middle">
                {props.employee.firstName + " " + props.employee.lastName}
            </td>
            <td className="text-center align-middle">
                {props.employee.phone}
            </td>
            <td className="text-center align-middle">
                {props.employee.mobile}
            </td>
            <td className="text-center align-middle">
                {props.employee.email}
            </td>

          </tr>

        );
    };

    return (
        <div className="wrapper">
          <table className="table">
  <thead className="thead-light">
    <tr>
      <th scope="col">Image</th>
      <th scope="col">Name</th>
      <th scope="col">Phone</th>
      <th scope="col">Email</th>
      <th scope="col">DOB</th>
    </tr>
  </thead>
</table>
        </div>
    )
 }



// filter employee data by name

export default EmployeeDirc;