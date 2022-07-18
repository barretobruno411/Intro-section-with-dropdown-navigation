import React from 'react';
import databiz from "../images/client-databiz.svg";
import audiophile from "../images/client-audiophile.svg";
import meet from "../images/client-meet.svg";
import maker from "../images/client-maker.svg";
function Main(props){
    return(
        <main className='mainContainer'>
            <h1>Make remote work</h1>
            <p>
                Get your team in sync, no matter your location.
                Streamline processes, create team rituals, and 
                watch productivity soar.
            </p>

            <button>
                Learn more
            </button>
            <footer className='foooter'>
                <img src={databiz} alt="databiz" />
                <img src={audiophile} alt="audiophile" />
                <img src={meet} alt="meet" />
                <img src={maker} alt="maker" />
            </footer>
        </main>
    )
}

export default Main;