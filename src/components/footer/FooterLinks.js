import FooterLink from "./FooterLink";

const FooterLinks = () => {
    return(
        <div className="items-center flex-row flex justify-center">
            <div className="mr-2 ml-2 items-center flex-row flex justify-center">
                <FooterLink name={"forums"} />
                <FooterLink name={"contact"} />
                <FooterLink name={"support"} />
                <FooterLink name={"jobs"} />
                <FooterLink name={"terms"} />
                <FooterLink name={"privacy"} />
                <FooterLink name={"merch"} />
            </div>
        </div>
    );
}

export default FooterLinks;