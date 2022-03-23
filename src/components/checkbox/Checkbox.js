

const Checkbox = (props) => {
    return(
        <div className="my-1 px-1  lg:my-4 lg:px-4 basis-1/5 drop-shadow-md bg-white bg-cover w-full">
            <div class="form-check">
                <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-red-600 checked:border-red-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckChecked" />
                <label class="form-check-label inline-block text-gray-800" for="flexCheckChecked">
                    {props.tag}
                </label>
            </div>
        </div>
    );
}

export default Checkbox;