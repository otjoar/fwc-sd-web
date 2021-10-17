import navyLogo from "../../../src/assets/us-navy-logo.png";
import fwcLogo from "../../../src/assets/fwc-sd-logo.png";
import nmocLogo from "../../../src/assets/nmoc-logo.png";
import { useRef } from 'react';
import { FaChevronCircleDown, FaChevronCircleUp } from 'react-icons/fa';
import { Helmet } from 'react-helmet';

const TITLE = "Fleet Weather Center - San Diego";

const Home = () => {
    const first = useRef();
    const second = useRef();
    const third = useRef();

    function handleToFirst() {
        first.current.scrollIntoView({ behavior: 'smooth',
                                       block: 'end',
                                       inline: 'center',
                                       alignToTop: false });
    }
    
    function handleToSecond() {
        second.current.scrollIntoView({ behavior: 'smooth',
                                        block: 'end',
                                        inline: 'center',
                                        alignToTop: false });
    }

    function handleToThird() {
        third.current.scrollIntoView({ behavior: 'smooth'});
    }

    return (
        <div className="landing">
            <Helmet>
                <title>{ TITLE }</title>
            </Helmet>
            <div className="one-landing" ref={first}>
                <img src={navyLogo} alt="Navy Logo"></img>
                <h1>Welcome to the Fleet Weather Center San Diego Website</h1>
                <div className="button">
                    <FaChevronCircleDown onClick={handleToSecond} />
                </div>
            </div>
            <div className="two-landing" ref={second}>
                <div className="button-up">
                    <FaChevronCircleUp onClick={handleToFirst} />
                </div>
                <div className="aboutContent">
                    <img src={fwcLogo} alt="FWC Logo"></img>
                    <hr className="vertical" />
                    <div className="text">
                        <h1>About</h1>
                        <p>NMOC provides critical information from the ocean depths to the most distant reaches of space, meeting needs in the military, scientific, and civilian communities.</p>
                        <p>See Other Products:</p>
                        <p><a href="https://www.metoc.navy.mil/jtwc/jtwc.html">Joint Typhoon Warning Center (JTWC)</a></p>
                        <p><a href="https://www.metoc.navy.mil/fnmoc/fnmoc.html">Fleet Numerical Meteorology and Oceanography Center (FNMOC)</a></p>
                        <p><a href="https://www.metoc.navy.mil/navo/navo.html">Naval Oceanographic Office (NAVO)</a></p>
                    </div>
                </div>
                <div className="button">
                    <FaChevronCircleDown onClick={handleToThird} />
                </div>
            </div>
            <div className="three-landing" ref={third}>
                <div className="button-up">
                    <FaChevronCircleUp onClick={handleToSecond} />
                </div>
                <div className="missionContent">
                <img src={nmocLogo} alt="Navy Logo" className="mobileLogo"></img>
                    <div className="text">
                        <h1>Mission</h1>
                        <p>To provide full-spectrum weather services to shore-based naval aviation, afloat naval units, naval installations, contingency exercises and operations to facilitate risk management, resource protection, and mission success of Fleet,</p>
                        <p>Regional, and individual unit commanders. Man, train, and equip deployable teams providing timely and relevant METOC services in direct support of Carrier and Expeditionary Strike Group (CSG/ESG) decision superiority and mission success</p>
                    </div>
                    <hr className="vertical" />
                    <img src={nmocLogo} alt="Navy Logo" className="mainLogo"></img>
                </div>
            </div>
        </div>
    );
}

export default Home;