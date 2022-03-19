import FooterLink from "./FooterLink";

const FooterLinks = () => {
    return(
        <div className="items-center flex-row flex justify-center">
            <div className="mr-2 ml-2 items-center flex-row flex justify-center">
                <FooterLink name={"Forums"} />
                <FooterLink name={"Contact"} />
                <FooterLink name={"Support"} />
                <FooterLink name={"Jobs"} />
                <FooterLink name={"Terms"} />
                <FooterLink name={"Privacy"} />
                <FooterLink name={"Merch"} />
            </div>
        </div>
    );
}

export default FooterLinks;