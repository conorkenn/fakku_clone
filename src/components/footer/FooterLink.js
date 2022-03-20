const FooterLink = props => {
    return(
        <button>
            <a href={`/${props.name}`} className="text-blue-800 capitalize text-xl font-normal max-w-max pl-2.5 pr-2.5 m-0 leading-10 hover:underline ">
                {props.name}
            </a>
        </button>
    );
}

export default FooterLink;