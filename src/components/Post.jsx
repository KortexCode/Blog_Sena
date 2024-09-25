import '../styles/Post.css';
import PropTypes from 'prop-types';
import { Link} from "react-router-dom";

function Post(props){
    const {title, content, route} = props;
    return (
        <section className="post">
            <h2>{title}</h2>
            <p>{content}</p>
            <Link rel="stylesheet" href="" to={route}>Read More</Link>
        </section>
    )
}
//Validando tipado de props
Post.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    route: PropTypes.string.isRequired
};

export {Post}