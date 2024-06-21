import React from "react";

export default function Dashboard() {
  const [database] = React.useState(
    localStorage.getItem("database")
      ? JSON.parse(localStorage.getItem("database"))
      : [],
  );
  const token = JSON.parse(localStorage.getItem("user"))?.token || false;
  return (
    <div>
      {token ? (
        <>
          <h1 className="text-2xl font-semibold mt-9">Dashboard</h1>
          <div className="w-4/12 mx-auto border mt-10">
            <ul className="flex flex-col gap-4 items-center justify-center">
              {database.map((data, index) => (
                <li key={index}>
                  <h3>{data.name}</h3>
                  <p>{data.email}</p>
                  <p>{data.message}</p>
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        <div>
          <h1>Not Authorized</h1>
          <p>Please login to view this page</p>
          <a href="/login">Login</a>
        </div>
      )}
    </div>
  );
}
