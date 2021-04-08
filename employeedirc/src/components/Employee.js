import React from "react";

//create a table for employees 
// employee data should include first name, last name, DOB, phone number
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
            <table className="table table-striped table-hover">
                <thread className="thread-dark">

                </thread>
            </table>
        </div>
    )
 }



// filter employee data by name