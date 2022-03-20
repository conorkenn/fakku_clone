import { Route, Routes } from 'react-router-dom';
import { Contact, Doujin, Forums, Games, Home, Jobs,
         Login, Manga, Merch, NewReleases, Privacy, 
         Register, Support, Tags, Terms, Unlimited } from '../pages/index';

const Routing = () =>{
    return(
        <Routes>
            <Route path="/" element={<Home/>} exact />
            <Route path="/new%20releases" element={<NewReleases/>} />
            <Route path="/doujin" element={<Doujin/>} />
            <Route path="/games" element={<Games/>} />
            <Route path="/manga" element={<Manga/>} />
            <Route path="/unlimited" element={<Unlimited/>} />
            <Route path="/tags" element={<Tags/>} />
            <Route path="/forums" element={<Forums/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/users/create" element={<Register/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/support" element={<Support/>} />
            <Route path="/jobs" element={<Jobs/>} />
            <Route path="/terms" element={<Terms/>} />
            <Route path="/privacy" element={<Privacy/>}/>
            <Route path="/merch" element={<Merch/>}/>
        </Routes>
    );
}

export default Routing;