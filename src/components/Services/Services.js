import {MeasurementIcon, CatalogueIcon, UploadIcon, FolderIcon} from "../../assets/svg";
import "./Services.css";

export default function Services () {
    return (
        <div id="services">
            <h2>Services you will enjoy</h2>
            <div className="services">
                <div className="service">
                    <MeasurementIcon />
                    <h4>Measurement</h4> 
                    <p>Store your customers measurements and style</p>
                </div>

                <div className="service">
                    <CatalogueIcon />
                    <h4>Catalogue</h4>
                    <p>Have a style catalogue for your customers</p>
                </div>

                <div className="service">
                    <UploadIcon />
                    <h4>Upload</h4>
                    <p>Upload inspirations and customers styles</p>
                </div>

                <div className="service">
                    <FolderIcon />
                    <h4>Customer folder</h4>
                    <p>Manage customers folder without stress</p>
                </div>
            </div>
        </div>
       
    )
}