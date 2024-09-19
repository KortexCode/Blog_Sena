import '../styles/EntryCrimePusnishment.css';
import criticalImg from '../assets/crime.png';

function EntryCrimePusnishment() {
    
    return (
        <section className='Crime-Pusnishment'>
            <h2>CRIMEN AND PUNISHMENT</h2> 
            <img className='Crime-Pusnishment-img' src={criticalImg} alt="img about the theme" />
            <div className='container-Crime-Pusnishment'>
                <p>
                    The topic of &quot;crime and punishment&quot; addresses the various ways in which criminal behavior manifests in society and the different penalties applied to those who break the law. The most common crimes include property crimes, such as theft and burglary; violent crimes, such as murder or assault; and economic crimes, such as fraud or tax evasion. Each of these acts represents a violation of the social norms established to ensure order and safety within a community.
                </p> 
                <p>
                   Punishment, in turn, is the legal response imposed by the justice system to sanction these crimes. Penalties vary depending on the severity of the crime, the intent of the offender, and the effects on the victims. For minor offenses, sanctions often consist of fines, community service, or short-term imprisonment. However, for serious crimes like murder or sexual offenses, punishments tend to be harsher, including long prison sentences, life imprisonment, or, in some countries, the death penalty.
                </p>
                <p>
                   The relationship between crime and punishment also raises ethical and social questions about the fairness and effectiveness of the penal system. Some people believe that strict penalties deter future crimes, while others argue that punishment should focus more on the rehabilitation and reintegration of the offender into society. Additionally, there are debates about whether the penal system punishes all sectors of society fairly, or if there are disparities based on factors such as race, social class, or gender.
                </p>
                <h3>Conclusion</h3> 
                <p>
                    Crimes originated from the wickedness of people; envy and a thirst for power are just some of the conditions that promote wrongdoing against others. Some justify crime due to people&apos;s needs, but everyone can choose to act in a way that does not violate any laws or harm others. Unfortunately, man will always be tempted to seek to obtain something the easy way.</p>   
            </div>
        </section>
    )
}

export {EntryCrimePusnishment}