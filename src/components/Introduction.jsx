import React from 'react';

import crossing from '../assets/crossing.png'

class Introduction extends React.Component {
  render() {
    return (
        <div>
         <img   style={{
    justifyContent: 'center',
    alignItems: 'center',
  }}  height="200" width="200" src={crossing} alt="crossing"/>
         {/* <p style={{color: 'red'}}>This is a paragraph.</p> */}
         <p className="text-center" style={{color: 'white',fontWeight: 'bold',fontSize:'40px'}}>Path 4: There are 4 directions when we stand at a crossing,so we could use path4 to choose the direction. Also, we have 4 winds in some culture</p>
        </div>
    );


  }
}

export default Introduction;


