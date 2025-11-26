
export default function Main() {

    return (
        <>
            <div className="mainHeader">
                <h1 id="mainHeader"> Elijah's Website </h1>
                <ul className="nav">
                    <li className="nav"><a className="nav" href="#introduction"> Introduction </a></li>
                    <li className="nav"><a className="nav" href="#projects"> Projects </a></li>
                    <li className="nav"><a className="nav" href="#contacts"> Contacts </a></li>
                </ul>
            </div>

 

            <div className="portfolio">
                {Introduction()}
                {PortfolioWork()}
                {ContactInformation()}
             </div>
        </>
    );
}

function Introduction() {
    return (
        <>
            <h2 className="info" id = "introduction"> ▶ Introduction </h2>
            <p className="info">
                My name is Brodit, Elijah Gabriel Pendon,
                a fresh graduate from Hong Kong Polytechnic University looking for work.
                My main interest is in both front-end and back-end web development.
                I'm also eager to learn new technologies and skills for work
            </p>
        </>
    );
}
function PortfolioWork() {
    return (
        <>
            <h2 className="info" id = "projects"> ▶ Projects </h2>
            <p className="info">
                <u><b>Lost and Found Website</b></u>
                <br />
                An interactive Lost-and-Found website where users can register and login with an account, upload by filling in online forms and view lost or found notices and their details.
                While the admin can view registered users and notices for lost or found items.
                Accomplished via HTML, CSS, JavaScript for client-side functions, PHP for server-side functions and MySql for managing databases, which was done with the help of XAMPP.
                <br />
                <iframe id="video" src="https://drive.google.com/file/d/1eGm2l8DCn9muT--OhS0Pxa3PKT5jnScZ/preview" width="640" height="480" allow="autoplay"></iframe>
            </p>
        </>
    )
}

function ContactInformation() {
    return (
        <>
            <h2 className="info" id = "contacts"> ▶ Contacts & Links </h2>
            <p className="info">
                Email address: elijah200263@gmail.com 
                <br />
                GitHub profile link: <a href="https://github.com/eelijah2"> eelijah2 </a>
            </p>

        </>
    )
}