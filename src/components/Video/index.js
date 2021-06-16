import React, { useState } from "react";
import ModalVideo from "react-modal-video";

/*Baclground Image*/
import videoBg from '../../assets/images/video.jpg' 


const VideoPopup = ({classes}) => {

    const [modalStatus, isOpen] = useState(false);

    return (
    
	<section className={`video-section ${classes}`} id="video" style={{backgroundImage: `url("${videoBg}")`}} >
        <div className="overlay"></div>
	    <div className="container"> 
			<div className="row">  
				<div className="col-md-12 col-sm-12">

                    <div className="video-container">
                        <ModalVideo
                            channel="youtube"
                            isOpen={modalStatus}
                            videoId="BDYUV7tx_pM"
                            onClose={() => isOpen(false)}
                        />
                        <button onClick={() => isOpen(true)} className="play-video">
                            <span className="fa fa-play"></span>
                        </button> 
                    </div>
                    <div className="video-content">
                        <h2>Give Your Business A Competitive edge</h2>
                    </div> 

				</div> 
			</div> 
        </div> 
	</section>  

  );
};

export default VideoPopup;
