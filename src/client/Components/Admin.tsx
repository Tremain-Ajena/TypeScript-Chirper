import * as React from 'react';
import { useParams } from 'react-router-dom';
import {useState, useEffect} from 'react';
import{useHistory} from 'react-router-dom';


const Admin: React.SFC<AdminProps> = () => {

    const history = useHistory ();

    const { id } = useParams();

    const [name, setName] = useState<string>('');
    const [message, setMessage] = useState<string>('');

    const handleAuthorChange = (e: React.ChangeEvent<HTMLInputElement>) => setName( e.target.value );
    const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => setMessage( e.target.value );

    useEffect(() => {
        (async () => {
            let res = await fetch(`/api/chirps/${id}`);
            let chirp = await res.json();
            console.log(chirp);
            setName(chirp.name);
            setMessage(chirp.message);

        }) ();
    }, [id]);

    const saveEdit = async () => {
        console.log({name, message})
        let res = await fetch(`/api/chirps/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name, message})
        })
        if (res.ok) {
            history.push(`/details/${id}`);

        } else {
            console.log('something went wrong :(')
        }
    }

    const deleteChirp = async () => {
        console.log({name, message})
        let res = await fetch(`/api/chirps/${id}`, {
            method: 'DELETE',
            
        })
        if (res.ok) {
            history.push('/');

        } else {
            console.log('something went wrong :(')
        }
    }

    return (
        <main className="container">
            <div>
                <h1 className="text-center">Admin Options {id}</h1>
            </div>
            <div className="card m-4 shadow border rounded">
                <h5 className="card-header ">What's on Your Mind?</h5>
                <div className="card-body">
                    <label htmlFor="name">Name</label>
                    <input
                        className='input-group input-group-lg col-10 mx-3 my-3'
                        placeholder='Name'
                        value={name}
                        onChange={handleAuthorChange}
                    />
                    <label htmlFor="name">Message</label>
                    <textarea
                        className='input-group input-group-lg col-10 mx-3 my-3'
                        name="message"
                        id="message"
                        rows={4}
                        placeholder='Message'
                        value={message}
                        onChange={handleMessageChange}
                    />
                    <button onClick={saveEdit} className="btn btn-outline-success btn-block mt-3 w-75 mx-auto shadow-sm" id='post-btn'>Save</button>
                    <button onClick={deleteChirp} className="btn btn-outline-danger btn-block mt-3 w-75 mx-auto shadow-sm" id='post-btn'>Delete</button>
                </div>
            </div>
        </main>
    );
};

interface AdminProps { }

export default Admin;