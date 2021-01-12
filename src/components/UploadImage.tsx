import React, { useState, useEffect } from "react";
import { Upload, message } from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";

interface UploadImageProps {
  getImageUrl: Function;
  imageUrl: string;
}

export function getBase64(img: Blob, callback: Function) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
}

export function beforeUpload(file: any) {
  const isJpgOrPng =
    file.type === "image/jpeg" ||
    file.type === "image/png" ||
    file.type === "image/gif";
  if (!isJpgOrPng) {
    message.error("只能上传JPG/PNG/GIF格式文件!");
  }
  const isLt2M = file.size / 1024 / 1024 < 3;
  if (!isLt2M) {
    message.error("图片大小必须小于3MB!");
  }
  return isJpgOrPng && isLt2M;
}

const UploadImage = (props: UploadImageProps) => {
  const { getImageUrl, imageUrl } = props;

  const [loading, setLoading] = useState(false);

  const [url, setUrl] = useState("");

  useEffect(() => {
    if (imageUrl) {
      setUrl(imageUrl);
    }
  }, [imageUrl]);

  const handleUpload = (info: any) => {
    const params = {
      fileName: info.file.name,
    };
    getBase64(info.file.originFileObj, (imageUrl: string) => {
      setLoading(true);
      getImageUrl(imageUrl);
      setUrl(imageUrl);
    });
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div className="ant-upload-text">上传</div>
    </div>
  );

  return (
    <>
      <Upload
        customRequest={() => {
          return false;
        }}
        accept="image/*"
        beforeUpload={beforeUpload}
        onChange={handleUpload}
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
      >
        {url ? (
          <img src={url} alt="avatar" style={{ width: "100%" }} />
        ) : (
          uploadButton
        )}
      </Upload>
      <span style={{ fontSize: 0.85 }}>
        支持JPG，PNG，GIF格式图片，大小不超过3M
      </span>
    </>
  );
};

export default UploadImage;
