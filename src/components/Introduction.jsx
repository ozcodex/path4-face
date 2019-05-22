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
         <p className="text-center" style={{color: 'white',fontWeight: 'bold',fontSize:'40px'}}>Path 4: There are 4 directions when we stand at a crossing,so we could use path4 to choose a good direction.<br></br> Also, we want to provide you with the best public transportation app experience by suggesting the best way(Path) for(4) you.</p>
        </div>
    );


  }
}

export default Introduction;


