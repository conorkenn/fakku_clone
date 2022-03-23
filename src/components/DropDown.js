
const DropDown = () => {
    return (
        <select className="my-1 px-1  lg:my-4 lg:px-4 basis-1/5 drop-shadow-lg bg-white bg-cover w-full focus:outline-red-500 outline-8">
            <option value="Newest">Newest</option>
            <option value="Oldest">Oldest</option>
            <option value="Popular">Popular</option>
        </select>
    );

};


export default DropDown;