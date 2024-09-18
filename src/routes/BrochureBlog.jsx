import '../styles/BrochureBlog.css';
import brochure from '../assets/brochure.png';

function BrochureBlog() {
    
    return (
        <section className='brochurePage'>
            <h2>Product evidence: GA1-240202501-AA1-EV03. Brochure</h2>
            <p>Based on the data, concepts, and research obtained from their training program, a brochure in English with the information and characteristics of their training program must be created.</p>
            <img className='brochure-img' src={brochure} alt="brochure about software analysis and development" />
        </section>
    )
}

export {BrochureBlog}