import React from "react";
import HeaderCompound from "../compounds/HeaderCompound";
import JumboCompound from "../compounds/JumboCompound";
import Seperator from "../components/Jumbo/Seperator"
import AccordionCompound from "../compounds/AccordionCompound";

function HomePage() {
    return (
        <>
        <HeaderCompound />
        <Seperator />
        <JumboCompound />
        <AccordionCompound />
        </>
    )
}

export default HomePage;