import React from "react";
import "./style/banner.scss";
import BannerImg from "./banner.jpg";
const Banner = () => {
    return (
        <div className="banner-container">
            <div className="banner-img-box">
                <img src={BannerImg} alt="banner img" />
            </div>
            <div className="background-filter"></div>
        </div>
    );
};
export default Banner;
