//Imports
import React from "react";
import "./About.css";
import avitar from "../../../images/Avitar.jpg";
import CardMedia from "@mui/material/CardMedia";

// Function that renders the about page & exports
export default function About() {
    return (
        <>
            <div className="image-container">
                <CardMedia
                    component="img"
                    className="color-img"
                    style={{
                        height: "auto",
                        width: "50%",
                        margin: "0 auto",
                        paddingTop: "20px",
                    }}
                    image={avitar}
                    alt="About Me"
                />
            </div>

            <div style={{ width: "70%", margin: "0 auto" }}>
                <h1 id="about-me-title">About Me</h1>
                <p id="p-about">
                    Hello World! I am Jaime Quezada, a full stack developing student with a background in Automation and Manufacturing Engineering. I look forward to starting and exiting carreer in the Tech industry and expand my skills!.
                </p>
            </div>
        </>
    );
}