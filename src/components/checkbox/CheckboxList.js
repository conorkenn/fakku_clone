
import tags from '../../assets/tags';
import Checkbox from './Checkbox';

const CheckboxList = () => {
    return(
        <div>
            <ul>
                {tags.sort().map(item =>(
                    <li key={item.title}> 
                    <Checkbox tag={item.title} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CheckboxList;