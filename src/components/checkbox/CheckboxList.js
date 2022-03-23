
import tags from '../../assets/tags';
import Checkbox from './Checkbox';

const CheckboxList = () => {
    return(
        <div>
            <ul>
                {tags.map(item =>(
                    <li key={item.id}> 
                    <Checkbox tag={item.title} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CheckboxList;