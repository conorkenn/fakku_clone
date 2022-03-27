import React from "react";
import { AlternateSubHeader, SideScrollingContainer } from "../components";

const NewReleases = () => {
    return(
        <React.Fragment>
            <AlternateSubHeader header={"Latest FAKKU Unlimited Chapters"} />
            <SideScrollingContainer />
            <AlternateSubHeader header={"Latest Magazine Releases"} />
            <SideScrollingContainer />
            <AlternateSubHeader header={"Popular Hentai Chapters"} />
            <SideScrollingContainer />
            <AlternateSubHeader header={"Vanilla Chapters with a Dominant Female"} />
            <SideScrollingContainer />
            <AlternateSubHeader header={"Popular Color Hentai Chapters"} />
            <SideScrollingContainer />
            <AlternateSubHeader header={"Vanilla Chapters with a Tsundere"} />
            <SideScrollingContainer />
            <AlternateSubHeader header={"Original Western Hentai Chapters"} />
            <SideScrollingContainer />
            <AlternateSubHeader header={"Popular Non-H Chapters"} />
            <SideScrollingContainer />
        </React.Fragment>
    );
}

export default NewReleases;