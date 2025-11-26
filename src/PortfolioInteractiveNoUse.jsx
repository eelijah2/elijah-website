import { useState } from 'react';

/* 
This page is the portfolio page but with working interactive headers
that expand or collapse on click, displaying body information. 

Ultimately not used because it makes readability more inconvenient 
as more effort is required from user just to display information
*/
export default function Main() {

    const [isIntroToggle, setIntroToggle] = useState(true);
    const [isEduToggle, setEduToggle] = useState(true);
    const [isWorkToggle, setWorkToggle] = useState(true);
    const [isPortfolioToggle, setPortfolioToggle] = useState(true);
    const [isContactToggle, setContactToggle] = useState(true);

    return (
        <>
            <div className="mainHeader">
            <h1 id="mainHeader"> Elijah's Website </h1>
            </div>

            <div className="portfolio">
            
                <button className={isIntroToggle ? "collapseHeader" : "expandHeader"} onClick={() => setIntroToggle(!isIntroToggle)}> ▶ Introduction </button>
                <br />
                {Introduction(isIntroToggle)}

                <button className={isEduToggle ? "collapseHeader" : "expandHeader"} onClick={() => setEduToggle(!isEduToggle)}> ▶ Education </button>
                <br />
                {Education(isEduToggle)}

                <button className={isWorkToggle ? "collapseHeader" : "expandHeader"} onClick={() => setWorkToggle(!isWorkToggle)}> ▶ Work Experience </button>
                <br />
                {WorkExperience(isWorkToggle)}

                <button className={isPortfolioToggle ? "collapseHeader" : "expandHeader"} onClick={() => setPortfolioToggle(!isPortfolioToggle)}> ▶ Projects </button>
                <br />
                {PortfolioWork(isPortfolioToggle)}

                <button className={isContactToggle ? "collapseHeader" : "expandHeader"} onClick={() => setContactToggle(!isContactToggle)}> ▶ Contacts & Links </button>
                <br />
                {ContactInformation(isContactToggle)}

             </div>
        </>
    );
}

function Introduction(isIntroToggle) {
    return (
        <>
            <p className={isIntroToggle ? "collapseBody" : "expandBody"}>
                My name is Brodit, Elijah Gabriel Pendon,
                a fresh graduate from Hong Kong Polytechnic University looking for work.
                My main interest is in both front-end and back-end web development.
                I'm also eager to learn new technologies and skills for work
            </p>
        </>
    );
}

function Education(isEduToggle) {
    return (
        <>
            <p className={isEduToggle ? "collapseBody" : "expandBody"}>
            Test
            </p>
        </>
    )
}

function WorkExperience(isWorkToggle) {
    return (
        <>
            <p className={isWorkToggle ? "collapseBody" : "expandBody"}>
            Test
            </p>
        </>
    )
}

function PortfolioWork(isPortfolioToggle) {
    return (
        <>
            <p className={isPortfolioToggle ? "collapseBody" : "expandBody"}>
            Test
            </p>
        </>
    )
}

function ContactInformation(isContactToggle) {
    return (
        <>
            <p className={isContactToggle ? "collapseBody" : "expandBody"}>
                Contact my email address: elijah200263@gmail.com for any business enquiries 
                <br />
                Link to my GitHub profile:
            </p>

        </>
    )
}