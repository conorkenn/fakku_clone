import React from "react";
import { AlternateSubHeader, SideScrollingContainer, SideScrollerCard } from "../components";
import newBooks from "../assets/newBooks";
import moreBooks from "../assets/moreBooks";

  
  const mapbooks = (books) => {
      return books.map((book) =>{
        return(
            <div className="mr-3">
                    <SideScrollerCard {...book} />
            </div>
        );
      })
  }

  

const NewReleases = () => {
    return(
        <React.Fragment>
            <AlternateSubHeader header={"Latest FAKKU Unlimited Chapters"} />
            <SideScrollingContainer books ={mapbooks(newBooks)}/>
            <AlternateSubHeader header={"Latest Magazine Releases"} />
            <SideScrollingContainer books ={mapbooks(moreBooks)}/>
            <AlternateSubHeader header={"Popular Hentai Chapters"} />
            <SideScrollingContainer books ={mapbooks(moreBooks)}/>
            <AlternateSubHeader header={"Vanilla Chapters with a Dominant Female"} />
            <SideScrollingContainer books ={mapbooks(moreBooks)}/>
            <AlternateSubHeader header={"Popular Color Hentai Chapters"} />
            <SideScrollingContainer books ={mapbooks(moreBooks)}/>
            <AlternateSubHeader header={"Vanilla Chapters with a Tsundere"} />
            <SideScrollingContainer books ={mapbooks(moreBooks)}/>
            <AlternateSubHeader header={"Original Western Hentai Chapters"} />
            <SideScrollingContainer books ={mapbooks(moreBooks)}/>
            <AlternateSubHeader header={"Popular Non-H Chapters"} />
            <SideScrollingContainer books ={mapbooks(moreBooks)}/>
        </React.Fragment>
    );
}

export default NewReleases;