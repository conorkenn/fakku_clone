const SideScrollerCardGrid = (props) =>{
    return(
        <div className="container my-2 mx-auto px-4 md:px-12">
            <div className="flex flex-nowrap shrink-0 -mx-1 lg:-mx-4">
                {props.children}
            </div>
        </div>
    );
}

export default SideScrollerCardGrid;