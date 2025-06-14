import Header from "../composant/header/header"
import Banner from "../composant/Banner/Banner"
import BannerImg from "../assets/Front-img/bank-tree.webp"
import Features from "../composant/feature/features"
import chatIcon from "../assets/Front-img/icon-chat.webp"
import moneyIcon from "../assets/Front-img/icon-money.webp"
import securityIcon from "../assets/Front-img/icon-security.webp"
import { useDispatch } from "react-redux"
import { loginUser } from "../features/user/userslice"




function Accueil() {
    return(
        <>
        <Banner backgroundImg={BannerImg}></Banner>
        <section class="features">
            <Features img={chatIcon} alt="chat icon" title="You are our #1 priority" p="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."></Features>
            <Features img={moneyIcon} alt="money icon" title="More savings means higher rates" p="The more you save with us, the higher your interest rate will be!"></Features>
            <Features img={securityIcon} alt="security icon" title="Security you can trust" p="We use top of the line encryption to make sure your data and money is always safe."></Features>
        </section>
        
        </>  
    )
}

export default Accueil