import React from "react";
// add css 


//create a table for employees 
// employee data should include first name, last name, phone number, email, DOB
function Table(props) {

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
                {props.employee.email}
            </td>
            <td className="text-center align-middle">  
                {props.employee.dob}
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
                        <th data-name="email" onClick={props.sortTable}>Email</th>
                        <th data-name="dob" onClick={props.sortTable}>DOB</th>
                    </tr>
                </thead>
                <tbody>
                    {props.employees.map((x, i) => (
                        <Row employee={x} key={i + "-empRow"} />
                    ))}
                </tbody>
            </table>
        </div>
    );

}

// filter employee data by name
export default Table;