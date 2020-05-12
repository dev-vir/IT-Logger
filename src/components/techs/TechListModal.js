import React, { useEffect, useState } from 'react'
import TechItem from './TechItem';

const TechListModal = () => {

    const [techs, setTech ] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getTechs();

        // eslint-disable-next-line
    }, []);

    const getTechs = async () => {
        setLoading(true);

        const res = await fetch('/techs');
        const data = await res.json();

        setTech(data);
        setLoading(false);
    }

    // if(loading) {
    //     return <Preloader />
    // }

    return (
        <div id="tech-list-modal" className='modal'>
            <div className="modal-content">
                <h4>
                    Technicians List
                </h4>
                <ul className="collection">
                    {!loading && techs.map(tech => (
                        <TechItem tech={tech} key={tech.id} />
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default TechListModal
