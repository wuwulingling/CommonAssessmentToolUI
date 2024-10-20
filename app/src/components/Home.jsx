import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const Home = () => {
    const [info, setInfo] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3030/form-submissions')
            .then(result => {
                setInfo(result.data); // Assuming result.data is an array of objects
            })
            .catch(err => {
                console.log(err.message);
            });
    }, []);

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        info.map((item) => {
                            return (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.age}</td>
                                    <td>{item.gender}</td>
                                    <td>
                                        <button className="btn btn-primary">Update</button>
                                    </td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}
export default Home;