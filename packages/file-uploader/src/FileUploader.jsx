import React, { useState } from 'react';
import Image from '@splunk/react-ui/Image';
import Button from '@splunk/react-ui/Button';
import Table from '@splunk/react-ui/Table';
import DotsNine from '@splunk/react-icons/DotsNine';
import * as tf from '@tensorflow/tfjs-core';
import '@tensorflow/tfjs-backend-webgl';
import * as mobilenet from '@tensorflow-models/mobilenet';
import { convert } from "base64-to-tensor";


const FileUploader = () => {
    const [fileContent,setfileContent] = useState()
    const [prediction,setprediction] = useState([])
    const handleOnImageChange = ({ filename, imageDataURI }) => {
        setfileContent(imageDataURI)
    };
    const classifyImage = async () => {
        tf.setBackend("webgl")
        const model = await mobilenet.load();
        const tensor = convert(fileContent); 
        const predictions = await model.classify(tensor);
        console.log(predictions)
        setprediction(predictions)

    }
    
    return (
        <div>
            <Image onImageChange={handleOnImageChange}></Image>
            <Button label="Classify" appearance="primary" style={{"margin":"20px 0px"}} onClick={classifyImage} icon={<DotsNine  />}/>
            <Table stripeRows>
                <Table.Head>
                    <Table.HeadCell>Class name</Table.HeadCell>
                    <Table.HeadCell>Probability</Table.HeadCell>
                </Table.Head>
                <Table.Body>
                    {prediction.map((row) => (
                        <Table.Row key={row.className}>
                            <Table.Cell>{row.className}</Table.Cell>
                            <Table.Cell>{row.probability}</Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        </div>
    )
}


export default FileUploader;
