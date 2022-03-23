import Checkbox from './Checkbox';

const platforms = [
    {
        id:1,
        title:"Android"
    },
    {
        id:2,
        title:"Linux"
    },
    {
        id:3,
        title:"Mac"
    },
    {
        id:4,
        title:"Windows"
    },
]

const PlatformsCheckboxList = () => {

    return(
        <div>
            <ul>
                {platforms.map(item =>(
                    <li key={item.id}> 
                    <Checkbox tag={item.title} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PlatformsCheckboxList;