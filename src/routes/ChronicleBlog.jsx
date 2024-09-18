import '../styles/ChronicleBlog.css';
import freddyimg from '../assets/freddy_vega.png';

function ChronicleBlog() {
    
    return (
        <section className='chronicle'>
            <h2>Evidencia GA2-240202501-AA1-EV03: Chronicle.</h2>
            <p>This is a written chronicle about Fredy Vega, CEO of Platzi, an iconic figure in the software industry and online education, featuring the most important events and the most relevant situations in the professional career of this individual.</p>
            
            <div className='container-chronicle'>
                <h3 className='container-chronicle__title'>PROFESIONAL CAREER OF JHON FREDDY VEGA</h3>
                <p className='container-chronicle__body'>
                    <img className='chronicle-img' src={freddyimg} alt="Freddy Vega Character" />
                    Freddy Vega, an innovative Colombian entrepreneur, he has left an indelible mark on digital education in Latin America as CEO of Platzi.
                    Freddy began his career in technology at a very young age. From his early   years, he showed a great interest in software development and programming. At 13 he could not afford a computer, but he learned to program with a CASIO calculator borrowed from a schoolmate, Your first language: BASIC. At the age of 15, he created a multimedia CD-ROM with Flash for the Inter-American
                    Development and Bank Boston, teaching bankers and NGOs about money
                    laundering detection and accounting management. Thousands of CDs were
                    distributed but at the age of 16 he founded Cristalab in 2004, an online    community
                    focused on web design and development, which quickly gained popularity in   Latin
                    America.
                </p>
                <p>
                    Cristalab not only became the first significant step in Fredy is career as an
                    entrepreneur.
                    The real transformation in Fredy is career occurred when, together with Christian Van
                    Der Henst, he co-founded Platzi in 2011. The idea arose from the need for an
                    educational platform that offered high-quality online courses in Spanish, something
                    that was lacking at the time
                    Under Freddy is leadership, Platzi has grown exponentially, expanding his
                    educational offerings. The platform has attracted hundreds of thousands of students
                    from all over Latin America.
                </p>
                <p>
                    In addition to his success with Platzi, Freddy is a well-known speaker and advocate
                    for accessible education. He has participated in numerous events and conferences,
                    promoting the importance of continuing education and adaptation to new
                    technologies.
                </p>
            </div>
        </section>
    )
}

export {ChronicleBlog}