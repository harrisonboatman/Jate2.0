import React from "react";
import Orders from "../components/Orders"
import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';

function OrderManagement() {
  const { data } = useQuery(QUERY_USER);
  let user;
  let role;
  let manager;

  if (data) {
    user = data.user;
    role = data.user.userType

  }
  if (role === 'customer') {
    manager = false
  } else {
    manager = true
}
    
    return (
        <>
        <Orders />
        <p>welcome to the page</p>

        {user ? (<p>welcome {user.firstName} who is a {role}</p>): null}
        {manager ? (<p>yous a manager</p>): null}
        
        </>
    )
}

export default OrderManagement;