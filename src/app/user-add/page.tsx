"use client"

import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react"; // Ensure correct imports
import { Image } from "@nextui-org/react"; // Corrected import based on "@nextui-org/react"
import { UserPlus } from "lucide-react";
import { Button, ButtonGroup } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { UploadButton } from "@bytescale/upload-widget-react";
import { UploadDropzone } from "@bytescale/upload-widget-react";
const myCustomLocale = {
    addAnotherFileBtn: "Өөр файл нэмнэ үү...",
    addAnotherImageBtn: "Өөр зураг нэмнэ үү...",
    cancelBtn: "Буцах",
    cancelBtnClicked: "cancelled",
    cancelPreviewBtn: "Буцах",
    continueBtn: "Үргэлжлүүлэх",
    cropBtn: "Crop",
    customValidationFailed: "Failed to validate file.",
    doneBtn: "Done",
    fileSizeLimitPrefix: "File size limit:",
    finishBtn: "Finished",
    finishBtnIcon: true,
    imageCropNumberPrefix: "Image",
    maxFilesReachedPrefix: "Maximum number of files:",
    maxImagesReachedPrefix: "Maximum number of images:",
    orDragDropFile: "...or drag and drop a file.",
    orDragDropFileMulti: "...Ажилтны өөрийн цээж зураг.",
    orDragDropImage: "...or drag and drop an image.",
    orDragDropImageMulti: "...or drag and drop images.",
    processingFile: "Processing file...",
    removeBtn: "Устгах",
    removeBtnClicked: "Устгах",
    submitBtnError: "Алдаа!",
    submitBtnLoading: "Please wait...",
    unsupportedFileType: "File type not supported.",
    uploadFileBtn: "Upload a File",
    uploadFileMultiBtn: "Энд дарж зургаа оруулна уу",
    uploadImageBtn: "Upload an Image",
    uploadImageMultiBtn: "Upload Images",
    xOfY: "of"
}

const options = {
    apiKey: "free",
    maxFileCount: 10,
    locale: myCustomLocale,
};



export default function UserAdd() {
    
    return (
        <div>
            <Card className="mt-0 mb-5 ms-0 w-[calc(100vw_-_370px)] h-[calc(100vh_-_170px)] bg-white rounded-2xl p-8">
                <CardHeader>
                    <div className="flex ms-5 mb-5 text-2xl text-slate-600 font-bold gap-3 items-center">
                        <UserPlus size={25} /><p>Хүний нөөцийн ажилтан нэмэх</p>
                    </div>
                </CardHeader>
                <CardBody className="felx flex-row">
                    <div className="flex-1">

                        <UploadDropzone options={options}
                            onUpdate={({ uploadedFiles }) => {
                                console.log(uploadedFiles.map(x => x.fileUrl).join("\n"))
                            }}
                            width="550px"
                            height="345px" />

                    </div>
                    <div className="flex-1">
                        <div className="px-6">
                            <p>Цахим хаяг:</p>
                            <Input
                                type="email"
                                placeholder="Цахим хаягаа оруулна уу"
                                size={'sm'}
                                style={{ width: '400px' }}
                                className="pt-2"
                            />

                        </div>

                        <div className="px-6 pt-6">
                            <p>Нууц үг:</p>
                            <Input
                                type="password"
                                placeholder="Нууц үгээ оруулна уу"
                                size="sm"
                                style={{ width: '400px' }}
                                className="pt-2"
                            />
                        </div>

                        <div className="px-6 pt-6">
                            <p>Нууц үг давтах:</p>
                            <Input
                                type="password"
                                placeholder="Нууц үгээ давтан оруулна уу"
                                size="sm"
                                style={{ width: '400px' }}
                                className="pt-2"
                            />
                        </div>

                    </div>
                </CardBody>
                <CardFooter>
                    <Button color="primary" style={{ width: '1200px' }}>
                        Хадгалах
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
}


