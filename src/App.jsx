import React from "react";
import img from "./c.png";
import img1 from "./mm.png";
import img2 from "./b.png";
import img3 from "./f.png";


const App = () => {
    return (
        <>

            <div className="main_body">
                <div className="upperpart">
                    <h1>WE MAY HELP-WITH YOUR PROBLEMS</h1>
                    <p className="underline">______________________________</p>
                </div>
                <div className="lowerpart">

                    <div className="innerbox">
                        <div className="icon 1st">
                            <img src={img} alt></img>
                        </div>
                        <div className="para">
                            <div className="heading">
                                <h1>INTERACT WITH OUR REPRESENTATIVE</h1>
                            </div>
                            <div className="rest">
                                <p>Chat anonymously with a YourDost expert who's here to help you and not judge you</p>
                            </div>
                        </div>
                    </div>
                    <div className="innerbox">
                        <div className="icon 2nd">
                            <img src={img1}></img>
                        </div>
                        <div className="para">
                            <div className="heading">
                                <h1>SHARE YOUR CONCERN</h1>
                            </div>
                            <div className="rest">
                                <p>Open up to your Expert in a sapce where you get the guidance you need,and your concerns get
                            the attention they derserve</p>
                            </div>
                        </div>
                    </div>
                    <div className="innerbox">
                        <div className="icon 3rd">
                            <img src={img2}></img>
                        </div>
                        <div className="para">
                            <div className="heading">
                                <h1>CONNECT TO OUR EXPERTS</h1>

                            </div>
                            <div className="rest">
                                <p>With 24X7 support from our expert,bid goodbye to you old self and be on your way to becoming
                            a better you</p>
                            </div>
                        </div>
                    </div>
                    <div className="innerbox">
                        <div className="icon 4th">
                            <img src={img3} alt="Innerbox"></img>
                        </div>
                        <div className="para">
                            <div className="heading">
                                <h1>UNLEASH A BETTER YOU</h1>
                            </div>
                            <div className="rest">
                                <p>The aim and final end of all music should be none other than the glory of God and the
                            refreshment of the soul</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


        </>
    );

}


export default App;