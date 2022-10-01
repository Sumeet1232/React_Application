import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = () => {
    const [users, setUser] = useState([]);


    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:3003/users");
        setUser(result.data.reverse());
        
    };
    const deleteUser = async id => {
        await axios.delete(`http://localhost:3003/users/${id}`);
        loadUsers();
    };
    return (
        <div className="container">
            <div className="py-4">
                <h1 style={{ textAlign: "center" }}>List Of Users</h1>
                <table class="table border shadow">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">No</th>
                            <th scope="col">Name</th>
                            <th scope="col">UserName</th>
                            <th scope="col">Email</th>
                            <th>Action</th>


                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((users, index) => (
                                <tr><th scope="row">{index + 1}</th>
                                    <td>{users.name}</td>
                                    <td>{users.username}</td>
                                    <td>{users.email}</td>
                                    <td>
                                        <Link class="btn btn-primary mr-2" exact to={`/ViewUser/${users.id}`}>
                                            View
                                        </Link>
                                        <Link class="btn btn-outline-primary" to={`/EditUser/${users.id}`}>Edit</Link>
                                        <Link class="btn btn-danger" onClick={() => deleteUser(users.id)}>
                                            Delete
                                        </Link>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Home;