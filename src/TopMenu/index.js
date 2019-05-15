import React from 'react';
import {Link} from 'react-router';

const view =()=>{
    return (
        <div>
            <ul>
                <li style={liStyle}><Link to='/home'>Home</Link></li>
                <li style={liStyle}><Link to='/detail'>Detail</Link></li>
            </ul>
        </div>
    )
}

