
import tags from '../../assets/tags';
import Checkbox from './Checkbox';

const PopularCheckboxList = () => {

    const shuffle = tags.sort(() => 0.5 - Math.random());
    let popular = shuffle.slice(0,5)

    return(
        <div>
            <ul>
                {popular.map(item =>(
                    <li key={item.title}> 
                    <Checkbox tag={item.title} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PopularCheckboxList;