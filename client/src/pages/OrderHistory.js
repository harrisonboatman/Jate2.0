import React from "react";
import { Link } from "react-router-dom";

import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../utils/queries";

function OrderHistory() {
  const { data, error, isLoading } = useQuery(QUERY_USER);
  let user;

  if (data) {
    user = data.user;
  }
  console.log(user);
  console.log(data);

  return (
    <div className="flex justify-center md:flex-row mt-24 sm:flex-col ">
      <div className="container mt-24">
        {user ? (
          <>
            <h2 className="text-xl font-bold">
              Order History for {user.firstName} {user.lastName}
            </h2>
            {user?.orders.map((order) => (
              <div key={order._id} className="my-2">
                <h3 className="mb-10 font-bold">
                  {new Date(parseInt(order.purchaseDate)).toLocaleDateString()}
                </h3>
                <div className="flex flex-row ">
                  {order?.products.map(({ _id, image, name, price }, index) => (
                    <div>
                      <div
                        key={index}
                        className="p-2 card w-1/2 flex-col bg-white rounded-lg shadow-lg overflow-hidden"
                      >
                        <Link to={`/products/${_id}`}>
                          <img
                            alt={name}
                            className="rounded object-cover h-48 w-96"
                            src={`/images/${image}`}
                          />
                          <p>{name}</p>
                        </Link>
                        <div>
                          <span>${price}</span>
                        </div>
                      </div>
                      <div class="pt-12">
                        <hr class="w-full h-px my-12 bg-gray-400 border-1 dark:bg-gray-900"></hr>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </>
        ) : null}
      </div>
    </div>
  );
}

export default OrderHistory;
