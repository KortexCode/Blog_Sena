import '../styles/EntryCriticalThinking.css';
import criticalImg from '../assets/critical.png';

function EntryCriticalThinking() {
    
    return (
        <section className='critical-thinking'>
            <h2>CRITICAL THINKING AND MEDIA LITERACY</h2> 
            <img className='chronicle-img' src={criticalImg} alt="img about the theme" />
            <div className='container-critical-thinking'>
                <p>
                    Information circulates around the world to any place thanks to technological advancements, reaching everyone through devices connected to this robust information system, such as cell phones, tablets, and computers. It is now common for everyone to have one of these devices, and through them, each person is exposed to all kinds of messages that appear on their screens. People share their data or receive data from others, and while this is a great advancement, it also opens the door to manipulative, malicious, defamatory content, and other things that can cause harm. All these messages can play with people&apos;s emotions and make them believe that what they see is true, even when it is not. That is why critical thinking and media literacy are needed.
                </p>
                <h3 className='container-critical-thinking__title'>Critical Thinking</h3>
                
                <p>
                   Critical thinking is the ability to analyze, evaluate, and judge information in a logical and objective way. It involves questioning and examining arguments, beliefs, and sources of information, avoiding accepting ideas without proper analysis. People with critical thinking skills consider multiple perspectives, identify biases, evaluate the quality of evidence, and seek well-founded conclusions.
                </p>
                <h3>Media Literacy</h3>
                <p>
                   When we talk about media literacy we say that it is the ability to access, analyze, evaluate, and create content in different media forms. In a world dominated by a constant flow of information (news, social media, videos, etc.), media literacy allows individuals to understand how media influences society and personal opinions.
                </p>
                <h3>Conclusion</h3>
                <p>
                   With the advent of artificial intelligence, it has become much more difficult to know if news, videos, images, or other media can be true. We don&apos;t know if a recording is real or if an image of someone is authentic; now, it is more important to think carefully before trusting a source of information or data found on the internet or shared via chat channels. Additionally, nowadays, there is an effort to manipulate people&apos;s opinions on various topics by manipulating data and presenting it as reality. This topic is truly vast, and there are many examples.
                </p>
                <p>
                    If some advice can be given, we should stay well-informed and not be swayed by emotions, compare information from multiple sources, verify the sources provided by the media, and analyze the context of everything.
                </p>
                
            </div>
        </section>
    )
}

export {EntryCriticalThinking}