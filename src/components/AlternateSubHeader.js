const AlternateSubHeader = ({header}) => {
    return(
        <a className="text-black hover:underline">
            <h1 className='text-black font-bold block text-xl pb-2 text-left pl-12 pt-4 ml-12'>{header}</h1>
        </a>
    )
}

export default AlternateSubHeader;