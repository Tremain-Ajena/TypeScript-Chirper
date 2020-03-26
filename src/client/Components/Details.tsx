import React from 'react';
import { useParams } from 'react-router-dom';

class Details extends React.Component<DetailsProps> {
    constructor(props) {
        super(props);

        this.state = {
            chirps: [
                {
                    name: 'Josh',
                    message: 'Hey!!!',
                  
                },
                {
                    name: 'Justin',
                    message: 'How are you friend!?',
                   
                },
                {
                    name: 'Frank',
                    message: 'Yo, yo, yo! How are my best trolls?',
                }
            ],
            newMessageText: '',
            newName: '',
            images: ["https://m.media-amazon.com/images/M/MV5BZGQ2ZDc1MzYtNWRlNi00YjFjLTk4YTctZTNhYWExMzhhNzk1XkEyXkFqcGdeQXVyMTg2NjYzOA@@._V1_.jpg", "https://img.huffingtonpost.com/asset/5b3a38212000004200b95ef9.jpeg?cache=s4vypl87zq&ops=scalefit_630_noupscale", "https://m.media-amazon.com/images/M/MV5BNjE3ZTdmNTctZmYzZi00MDRmLTgzNjUtYTc1MjBiOTdjNjJlXkEyXkFqcGdeQXVyNjExODE1MDc@._V1_.jpg"],
            imgIndex: 0,
        }
    }



    handleAuthorInput(e) {
        this.setState({ newName: e.target.value });
    }

    handleMessageInput(e) {
        this.setState({ newMessageText: e.target.value })
    }

    handleClick() {
        const newChirp = {
            name: this.state.newName,
            message: this.state.newMessageText,
            // chirpBody: this.state.newChirpBody
        };
        this.setState({ chirps: [...this.state.chirps, newChirp] });
    }

    
    // const { id } = useParams();
    render() {

        return (
            <React.Fragment>

                <div>
                    <h1 className="text-center">Details View</h1>
                </div>

                <div>
                    {this.state.chirps.map(chirp => {

                        return (
                            <React.Fragment>
                                <div className="card mb-3 text-white bg-secondary" style={{ maxWidth: '540px' }}>
                                    <div className="row no-gutters">
                                        <div className="col-md-4">
                                            <img src={this.state.images[2]} className="card-img" alt="Kablam" />
                                        </div>
                                        <div className="col-md-8 text-left">
                                            <div className="card-header">
                                                <h5 className="card-title">{chirp.name}</h5>
                                            </div>
                                            <div className="card-body text-center">
                                                <p className="card-text">{chirp.message}</p>
                                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                                {/* <button className="btn btn-warning">
                                <Link to= {'/details'}>Admin Options</Link>
                                </button> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </React.Fragment>
                        )
                    })}
                </div>
            </React.Fragment>
        );
    }
};

interface DetailsProps { }

export default Details;