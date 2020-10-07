import React from 'react'

// Functional Component
// const About = () => {
//     const message = 'Hello Nextjs';
//     return React.createElement('div', null, 'This is a test')
// }

// Class Component
class About extends React.Component {
    render() {

        return (
            <h1>Hello from class component</h1>
        )
    }
}

export default About
