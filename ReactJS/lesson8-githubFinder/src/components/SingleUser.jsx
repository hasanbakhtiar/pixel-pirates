import Aos from "aos";
import { useEffect } from "react";
import 'aos/dist/aos.css';

const SingleUser = ({ image, name, profileUrl, node_id }) => {
    useEffect(() => {
        Aos.init();
    }, [])
    return (
        <div className='col-12 col-sm-6 col-md-4' data-aos="fade-up">
            <div className="card">
                <img src={image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{node_id}</p>
                    <a target="_blank" href={profileUrl} className="btn btn-dark">Go profile</a>
                </div>
            </div>

        </div>
    )
}

export default SingleUser