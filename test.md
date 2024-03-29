import React from 'react';
import AccordionBody from '../components/Accordion/AccordionBody';
import AccordionHeader from '../components/Accordion/AccordionHeader';
import AccordionItem from '../components/Accordion/AccordionItem';
import AccordionTitle from '../components/Accordion/AccordionTitle';
import AccordionWrapper from '../components/Accordion/AccordionWrapper';
import OptFormWrapper from '../components/OptForm/OptFormWrapper'
import OptFormText from '../components/OptForm/OptFormText'
import OptFormEmail from '../components/OptForm/OptFormEmail'
import OptFormBtn from '../components/OptForm/OptFormBtn';

function AccordionCompound() {
    return (
        <AccordionWrapper>
            <AccordionTitle />
            <AccordionItem>
                <AccordionHeader>What is Netflix?</AccordionHeader>
                <AccordionBody>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices. <br/> <br/> You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!</AccordionBody>
            </AccordionItem>

            <AccordionItem>
                <AccordionHeader>How much does Netflix coast?</AccordionHeader>
                <AccordionBody>Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from EGP120 to EGP200 a month. No extra costs, no contracts.</AccordionBody>
            </AccordionItem>

            <AccordionItem>
                <AccordionHeader>Where can I watch?</AccordionHeader>
                <AccordionBody>Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. <br /> <br />You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.</AccordionBody>
            </AccordionItem>

            <AccordionItem>
                <AccordionHeader>How do I cancel?</AccordionHeader>
                <AccordionBody>Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.</AccordionBody>
            </AccordionItem>

            <AccordionItem>
                <AccordionHeader>What can I watch on Netflix?</AccordionHeader>
                <AccordionBody>Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.</AccordionBody>
            </AccordionItem>

            <OptFormText /> 
        
            <OptFormWrapper>
               <OptFormEmail />
               <OptFormBtn />
            </OptFormWrapper>
        </AccordionWrapper>

        
    )
}

export default AccordionCompound;