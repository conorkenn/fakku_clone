import { CardGrid, SmallerBasisCard, UnlimitedHero } from "../components";
import newBooks from "../assets/newBooks";

const newBooksToDisplay = newBooks.map((book) =>{
    return(
      <SmallerBasisCard {...book} />
    );
  });

const Unlimited = () => {
    return(
        <div>
            <UnlimitedHero />
            <CardGrid>
                {newBooksToDisplay}
            </CardGrid>
        </div>
    );
}

export default Unlimited;