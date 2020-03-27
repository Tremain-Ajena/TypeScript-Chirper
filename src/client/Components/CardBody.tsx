import * as React from 'react';
import {IChirp} from '../utilities/types';
import {Link} from 'react-router-dom';


const CardBody: React.FC<CardBodyProps> = props => {
    
    return (

        <div className="card mb-3 text-white bg-secondary" style={{ maxWidth: '540px' }}>
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src= "https://m.media-amazon.com/images/M/MV5BNjE3ZTdmNTctZmYzZi00MDRmLTgzNjUtYTc1MjBiOTdjNjJlXkEyXkFqcGdeQXVyNjExODE1MDc@._V1_.jpg" className="card-img" alt="Kablam" />
                </div>
                <div className="col-md-8 text-left">
                    <div className="card-header">
                        <h5 className="card-title">@{props.chirp.name}</h5>
                    </div>
                    <div className="card-body text-center">
                        <p className="card-text">{props.chirp.message}</p>
                        <button className="btn btn-warning">
                            <Link to={`/details/${props.chirp.id}`}>Admin Options</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

interface CardBodyProps {
    chirp: IChirp
};

export default CardBody;