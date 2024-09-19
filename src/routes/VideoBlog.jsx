import '../styles/VideoBlog.css';

function VideoBlog() {
    
    return (
        <section className='videoblog'>
            <h2>Product evidence: GA1-240202501-AA1-EV02 Video</h2>
            <p>In accordance with the topic studied in the first level, choose a family member or a friend to introduce them through a short video using your webcam in English, in order to orally identify personal characteristics such as age, nationality, place of residence, hobbies, and some relevant information about their daily activities.</p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/2ctVh_BtUW8?si=GQJt0Tj7J5O4yI77" title="Presentation" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </section>
    )
}

export {VideoBlog}