import "./about.scss"
import Russell from './russell.jpg'

export default function About() {
    return (
        <div>
            <header>
                <img
                src = {Russell}
                alt="Alex Headshot"
                className="headshot"
                />
                <p>Hi, I'm Alex! I'm a Senior at Eagan and a developer as well.</p>
            </header>
        </div>
    );
}