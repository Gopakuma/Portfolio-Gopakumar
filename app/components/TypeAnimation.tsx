'use client';

import { TypeAnimation } from 'react-type-animation';

const ExampleComponent = () => {
    return (
        <TypeAnimation
            sequence={[
                'I AM GOPAKUMAR', // Types 'One'
                2000, // Waits 1s
                'I AM A SOFTWARE DEVELOPER', // Deletes 'One' and types 'Two'
                2000, // Waits 2s
                'I AM OPEN TO WORK',
                2000, // Types 'Three' without deleting 'Two'
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
        />
    );
};

export default ExampleComponent;