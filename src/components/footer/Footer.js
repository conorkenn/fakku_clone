import FooterIcons from "./FooterIcons";
import FooterLinks from "./FooterLinks";
import FooterTM from "./FooterTM";

const Footer = () =>{
    return(
        <div className="pb-12 pt-24">
            <FooterLinks />
            <div className="pt-2.5 pb-2.5">
                <FooterIcons />
            </div>
            <div className="pb-12">
                <FooterTM />
            </div>
            
        </div>
    );
}

export default Footer;