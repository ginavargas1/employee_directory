import React from "react";
import "./employeeDirc.css"


//create a table for employees 
// employee data should include first name, last name, phone number, email, DOB
function EmployeeDirc(props) {

    const Row = (props) => {
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
                {props.employee.cell}
            </td>
            <td className="text-center align-middle">  
                {props.employee.email}
            </td> 

        </tr>

    );
    
};
    // add onClick per 
    return (
        <div className="wrapper">
            <table className="table table-striped table-hover">
                <thead className="thead-light">
                    <tr>
                        <th data-name="img" onClick={props.sortTable}></th>
                        <th data-name="name" onClick={props.sortTable}>Name</th>
                        <th data-name="phone" onClick={props.sortTable}>Phone</th>
                        <th data-name="cell" onClick={props.sortTable}>Cell</th>
                        <th data-name="email" onClick={props.sortTable}>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {props.employees.map((x, i) =>(
                    <Row employee={x} key={i + "-empRow"} />
                    ))}
                </tbody>
            </table>
        </div>
    );

}

// filter employee data by name
export default EmployeeDirc;