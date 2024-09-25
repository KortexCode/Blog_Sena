import { Post } from "./Post";
import info from "../utils/post_data";

function Main() {
    
    return (
        <main>
            <div className="container_blogs">
                {info.map(item => (
                    <Post key={item.post_title} title={item.post_title} content={item.post_contend} route={item.post_route} />
                ))}
            </div>
        </main>
    )
}

export {Main}