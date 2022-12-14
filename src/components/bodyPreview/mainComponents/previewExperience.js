import React from "react";
import ExperienceComponent from "./experienceComponent";
import "../../../styles/previewStyles/previewMain.css";

class PreviewExperience extends React.Component {
    render() {
        return (
            <div className="previewMainWrap">
                <div className="previewSubHeader">Work Experience</div>
                <ExperienceComponent />
                <ExperienceComponent />
                <ExperienceComponent />
            </div>
        )
    }
}

export default PreviewExperience;