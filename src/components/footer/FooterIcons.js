import { SiDiscord, SiTwitter } from 'react-icons/si';

const FooterIcons = () => {
    return(
        <div className="items-center flex-row flex justify-center pl-6 pr-6">
            <div className="mr-2 ml-2 items-center flex-row flex ">
                <a href="#" className="text-slate-700 capitalize text-xl font-normal max-w-max pl-2.5 pr-2.5 m-0 leading-10 hover:text-slate-900">
                    <SiTwitter />
                </a>
                <a href="#" className="text-slate-700 capitalize text-xl font-normal max-w-max pl-2.5 pr-2.5 m-0 leading-10 hover:text-slate-900">
                    <SiDiscord />
                </a>
            </div>
        </div>
    );
}

export default FooterIcons;