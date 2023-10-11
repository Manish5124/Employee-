// Home.js

import React from "react";

function Home() {
    // const { skills } = props; // Destructure the skills prop

    return ( 
        <>

        <div><h1>Hello world</h1></div>
            <div>
                <ul>
                    {skills.map((skill) => {
                        return <li key={skill}>{skill}</li>
                    })}
                </ul>
            </div>        
        </>
    );
}

export default Home;
