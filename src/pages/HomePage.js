import React from "react";
import HeaderCompound from "../compounds/HeaderCompound";
import JumboCompound from "../compounds/JumboCompound";
import Seperator from "../components/Jumbo/Seperator"
import AccordionCompound from "../compounds/AccordionCompound";
import FooterCompound from "../compounds/FooterCompound";
import OptFormCompound from "../compounds/OptFormCompound";

function HomePage() {
    return (
        <>
        <HeaderCompound />
        <Seperator />
        <JumboCompound />
        <AccordionCompound />
        <OptFormCompound />
        <FooterCompound />
        </>
    )
}

export default HomePage;