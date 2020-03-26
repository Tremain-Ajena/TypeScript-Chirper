import React from 'react';
import { useParams } from 'react-router-dom';

const Admin: React.SFC<AdminProps> = () => {

    const { id } = useParams();

    return (
        <div>
            <h1 className="text-center">Admin Options {id}</h1>
        </div>
    );
};

interface AdminProps { }

export default Admin;