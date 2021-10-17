import portalHeadImg from '../assets/portalHeader.png';

const HeaderMain = () => {

    return (
        <div className="Head">
            <div className="logo">
                <img src={portalHeadImg} alt="Portal Header Logo" />
            </div>
            <div className="backHome">
                <a href="https://www.metoc.navy.mil/index.html">Home</a>
            </div>
        </div>
    );
}

export default HeaderMain;