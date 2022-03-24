
import tags from '../../assets/tags';
import Checkbox from './Checkbox';

const CheckboxList = () => {

    const sortedTags = tags.sort((a, b) => a.id - b.id);

    return(
        <div>
            <ul>
                {sortedTags.map(item =>(
                    <li key={item.id}> 
                    <Checkbox tag={item.title} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CheckboxList;