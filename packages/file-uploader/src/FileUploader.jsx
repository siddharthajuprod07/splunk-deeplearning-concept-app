import React, { useState } from 'react';
import Image from '@splunk/react-ui/Image';
import File from '@splunk/react-ui/File';



const FileUploader = () => {
    const [fileContent,setfileContent] = useState()
    return (
        <div>
            <Image></Image>
            <File
            accept="image/*"
            onRequestAdd={(file)=>{
                console.log(file)
                const reader = new FileReader();
                reader.readAsDataURL(file[0]);
                reader.onload = (e) => {
                    console.log(e)
                    setfileContent(e.target.result)
                }
            }}
            ></File>
            <img src={fileContent}></img>
        </div>
    )
}


export default FileUploader;
