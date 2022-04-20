import React, { useState } from "react";
import { Link } from "react-router-dom"
import img1 from "../../assests/images/small/study1.jpg";
import img2 from "../../assests/images/small/study2.jpg";
import img3 from "../../assests/images/small/study3.jpg";



export const Insitutes = () => {
    const [FirstportalDetails, setFirstportalDetails] = useState(false);
    const [secondportalDetails, setsecondportalDetails] = useState(false);
    const [thirdportalDetails, setthirdportalDetails] = useState(false);

    const FirstchangeDetail = () => {
        setFirstportalDetails(!FirstportalDetails);
    };
    const SecondchangeDetail = () => {
        setsecondportalDetails(!secondportalDetails);
    };
    const ThirdchangeDetail = () => {
        setthirdportalDetails(!thirdportalDetails);
    };
  

    return (
       
            <div className="row" style={{margin:"20px 10px 0px 10px"}}>
                <div className="col-md-4">
                    <div class="card" style={{ width: "23rem" }}>
                        <img src={img1} class="card-img-top" alt="..." />
                        <ul>
                            <li>Deakin College</li>
                            <li>Edith Cowan College</li>
                            <li>Eynesbury College</li>
                            <li>Griffith College</li>
                            <li>
                                International College at Robert Gordon University
                            </li>
                            <li>Keele University International College</li>
                            <li>La Trobe College Australia</li>
                        </ul>
                        {FirstportalDetails && (
                            <ul>
                                {" "}
                                <li>La Trobe University Sydney Campus</li>
                                <li>Murdoch Dubai</li>
                                <li>
                                    South Australian Institute of Business and
                                    Technology (SAIBT)
                                </li>
                                <li>The College, Swansea University</li>
                                <li>The Hague Pathway College</li>
                                <li>Twent Pathway College</li>
                                <li>University Academy 92 Global (UA92)</li>
                                <li>UC International College</li>

                            </ul>
                        )}
                        <div className="d-flex justify-content-between p-2">
                            <Link onClick={FirstchangeDetail}>
                                {FirstportalDetails
                                    ? "Read Less"
                                    : "Read More"}
                            </Link>
                            <a
                                href="https://partner.studylink.com/accounts/login/?next=/"
                                target="_blank"
                            >
                                Apply Now
                            </a>
                        </div>

                    </div>
                </div>
                <div className="col-md-4">
                    <div class="card" style={{ width: "23rem" }}>
                        <img src={img2} class="card-img-top" alt="..." />
                        <ul>
                            <li>Deakin College</li>
                            <li>Edith Cowan College</li>
                            <li>Eynesbury College</li>
                            <li>Griffith College</li>
                            <li>
                                International College at Robert Gordon University
                            </li>
                            <li>Keele University International College</li>
                            <li>La Trobe College Australia</li>
                        </ul>
                        {secondportalDetails && (
                            <ul>
                                {" "}
                                <li>La Trobe University Sydney Campus</li>
                                <li>Murdoch Dubai</li>
                                <li>
                                    South Australian Institute of Business and
                                    Technology (SAIBT)
                                </li>
                                <li>The College, Swansea University</li>
                                <li>The Hague Pathway College</li>
                                <li>Twent Pathway College</li>
                                <li>University Academy 92 Global (UA92)</li>
                                <li>UC International College</li>

                            </ul>
                        )}
                        <div className="d-flex justify-content-between p-2">
                            <Link onClick={SecondchangeDetail}>
                                {secondportalDetails
                                    ? "Read Less"
                                    : "Read More"}
                            </Link>
                            <a
                                href="https://www.studygroup.com/"
                                target="_blank"
                            >
                                Apply Now
                            </a>
                        </div>

                    </div>
                </div>
                <div className="col-md-4">
                    <div class="card" style={{ width: "23rem" }}>
                        <img src={img3} class="card-img-top" alt="..." />
                        <ul>
                            <li>Deakin College</li>
                            <li>Edith Cowan College</li>
                            <li>Eynesbury College</li>
                            <li>Griffith College</li>
                            <li>
                                International College at Robert Gordon University
                            </li>
                            <li>Keele University International College</li>
                            <li>La Trobe College Australia</li>
                        </ul>
                        {thirdportalDetails && (
                            <ul>
                                {" "}
                                <li>La Trobe University Sydney Campus</li>
                                <li>Murdoch Dubai</li>
                                <li>
                                    South Australian Institute of Business and
                                    Technology (SAIBT)
                                </li>
                                <li>The College, Swansea University</li>
                                <li>The Hague Pathway College</li>
                                <li>Twent Pathway College</li>
                                <li>University Academy 92 Global (UA92)</li>
                                <li>UC International College</li>

                            </ul>
                        )}
                        <div className="d-flex justify-content-between p-2">
                            <Link onClick={ThirdchangeDetail}>
                                {thirdportalDetails
                                    ? "Read Less"
                                    : "Read More"}
                            </Link>
                            <a
                                href="https://app.adventus.io/admin/login"
                                target="_blank"
                            >
                                Apply Now
                            </a>
                        </div>

                    </div>
                </div>
            </div>
     
    );
};
