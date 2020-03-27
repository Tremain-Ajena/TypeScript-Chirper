import * as React from 'react';
import { useState } from 'react';
import {useHistory} from 'react-router';

const Compose: React.SFC<ComposeProps> = () => {

    const history = useHistory ();

    const [name, setName] = useState<string>('');
    const [message, setMessage] = useState<string>('');

    const handleAuthorChange = (e: React.ChangeEvent<HTMLInputElement>) => setName( e.target.value );
    const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => setMessage( e.target.value );

    const postChirp = async () => {
        // console.log({name, message})
        let res = await fetch('/api/chirps', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name, message})
        })
        if (res.ok) {
            history.push('/');

        } else {
            console.log('something went wrong :(')
        }
    }




    return (
        <main className="container">
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
                    <button onClick={postChirp} className="btn btn-info btn-block mt-3 w-75 mx-auto shadow-sm" id='post-btn'>Post</button>
                </div>
            </div>
        </main>

    );
}

interface ComposeProps { }
export default Compose