import React, { useState } from 'react';
import "./assignment1.css";

export default function Assignment2() {
    const [pipelineName, setPipelineName] = useState("");
    const [projectName, setProjectName] = useState("");
    const [bucketName, setBucketName] = useState("");
    const [cloudStorage, setCloudStorage] = useState("");
    const [credentials, setCredentials] = useState("");
    const [runEvery, setRunEvery] = useState("");

    const [pipelineNameError, setPipelineNameError] = useState("");
    const [projectNameError, setProjectNameError] = useState("");
    const [bucketNameError, setBucketNameError] = useState("");
    const [cloudStorageError, setCloudStorageError] = useState("");
    const [credentialsError, setCredentialsError] = useState("");

    const validate = (value, number) => {
        switch (number) {
            case "1": {
                if (isValid(value)) {
                    setPipelineName(value);
                    setPipelineNameError("");
                }
                else {
                    setPipelineName(value);
                    setPipelineNameError("Minimum length should be 5 Characters , No special characters are allowed and Text Cannot start with '-', '_', '+' ")
                }
            }
                return;
            case "2": {
                if (isValid(value)) {
                    setProjectName(value);
                    setProjectNameError("");
                }
                else {
                    setProjectName(value);
                    setProjectNameError("Minimum length of text should be 5 , No special characters are allowed and  Cannot start with '-', '_', '+' ")
                }
            }
                return;
            case "3": {
                if (isValid(value)) {
                    setBucketName(value);
                    setBucketNameError("");
                }
                else {
                    setBucketName(value);
                    setBucketNameError("Minimum length of text should be 5 , No special characters are allowed and  Cannot start with '-', '_', '+' ")
                }
            }
                return;
            case "4": {
                if (isValid(value)) {
                    setCloudStorage(value);
                    setCloudStorageError("");
                }
                else {
                    setCloudStorage(value);
                    setCloudStorageError("Minimum length of text should be 5 , No special characters are allowed and  Cannot start with '-', '_', '+' ")
                }
            }
                return;
            case "5": {
                if (isValid(value)) {
                    setCredentials(value);
                    setCredentialsError("");
                }
                else {
                    setCredentials(value);
                    setCredentialsError("Minimum length of text should be 5 , No special characters are allowed and  Cannot start with '-', '_', '+' ")
                }
            }
                return;
        }
    }

    const isValid = (value) => {
        if (value.length >= 5 && value.match("^[a-zA-Z0-9]{4,100}$") && value.charAt[0] !== "+" && value.charAt[0] !== "_" && value.charAt[0] !== "-") {
            return true;
        }
        else {
            return false;
        }
    }

    const submitForm = () => {
        if (pipelineNameError !== "" || projectNameError !== "" || bucketNameError !== "" || cloudStorageError !== "" || credentialsError !== "" || runEvery === "") {
            window.alert("Please Fill all the Fields Properly")
        }
        else {
            window.alert("Form Successfully Validated")
        }
    }

    return (
        <div className="my-container shadow-lg ">
            <div className="text-center">
                <h3>Form</h3>
            </div>
            <div className="fields-cont" >
                <label>Select your Source :</label>
                <input type="text" value="Google Cloud Storage" readOnly  />
            </div>
            <div className="fields-cont" >
                <label>Provide a name for Pipeline :</label>
                <input type="text" placeholder="e.g. cust_shop_energy_gateway001" onChange={(e) => { validate(e.target.value, "1") }} />
                <span>{pipelineNameError}</span>
            </div>
            <div className="fields-cont" >
                <label>GCS Project Name :</label>
                <input type="text" placeholder="project-id" onChange={(e) => { validate(e.target.value, "2") }} />
                <span>{projectNameError}</span>
            </div>
            <div className="fields-cont" >
                <label>GCS Bucket Name:</label>
                <input type="text" placeholder="gs://your-bucket" onChange={(e) => { validate(e.target.value, "3") }} />
                <span>{bucketNameError}</span>
            </div>
            <div className="fields-cont" >
                <label>Input Cloud Storage File(s) :</label>
                <input type="text" placeholder="GCS location of your files" onChange={(e) => { validate(e.target.value, "4") }} />
                <span>{cloudStorageError}</span>
            </div>
            <div className="fields-cont" >
                <label>GCS Credentials :</label>
                <input type="password" placeholder="Credentials" className="credential" onChange={(e) => { validate(e.target.value, "5") }} />
                <span>{credentialsError}</span>
            </div>
            <div className="fields-cont" >
                <label>Run Every :</label>
                <input type="number" placeholder="( in minutes )" onChange={(e) => { setRunEvery(e.target.value) }} />
            </div>
            <div className="button-cont" >
                <div className="my-button" onClick={submitForm} >CREATE</div>
                <div className="my-button" style={{ backgroundColor: "crimson" }} >CANCEL</div>
            </div>
        </div>
    )
}
