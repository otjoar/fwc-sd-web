import constants from "../constants";
import { Helmet } from 'react-helmet';

const Gif = (param) => {
    let url = constants.BASE_URL;
    let alt;
    let TITLE = "FWC-SD - ";

    function handleClick() {
        const modal = document.querySelector(".modal")
        const closeBtn = document.querySelector(".close")

        modal.style.display = "block";
        closeBtn.addEventListener("click", () => {
            modal.style.display = "none"
        })
    }

    if(param.page === "surface") {
        url += constants.SURFACE;
        alt = constants.SURFACE;
        TITLE += constants.TITLE_SURFACE;
    } else if (param.page === "socal") {
        url += constants.SOCALOP;
        alt = constants.SOCALOP;
        TITLE += constants.TITLE_SOCAL;
    } 

    return (
        <div>
            <Helmet>
                <title>{ TITLE }</title>
            </Helmet>
            <div className="boxedImage">
                <img src={url} alt={alt} onClick={handleClick} />
            </div>
            <div class="modal">
                <div class="modal_content">
                    <span class="close">&times;</span>
                    <img src={url} alt={alt} onClick={handleClick} />
                </div>
            </div>
        </div>
    );
}

export default Gif;