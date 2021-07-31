import React, { useState } from "react";
import fetch from "isomorphic-unfetch";
import axios from "axios";
import { Row, Col, Spinner, FormGroup, Card } from "reactstrap";
import { FaTrash, FaImage } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

const FileUpload = ({}) => {
  const [featuredImage, setFeaturedImage] = useState({
    url: "",
    public_id: "",
  });
  const [loadImage, setLoadImage] = useState(false);
  const [isSelectImage, setIsSelectImage] = useState(false);

  const uploadSelectedImage = async (file) => {
    setLoadImage(true);
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "bus-reservationn");
    try {
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/dmxp0i0sh/image/upload",
        { method: "post", body: data }
      );
      const result = await res.json();
      setLoadImage(false);
      return result;
    } catch (error) {
      return;
    }
  };

  const removeCloudSelectedImage = async (image_id) => {
    await axios
      .post(`http://localhost:8001/removeImage`, {
        public_id: image_id,
      })
      .then((response) => {
        return [
          setFeaturedImage(""),
          setIsSelectImage(false),
          //   dispatch({
          //     type: SET_REGISTER,
          //     ...registerState,
          //     imageUrl: "",
          //   }),
        ];
      })
      .catch((error) => console.log(error, "fail to delete"));
  };

  const handleChange = async (e) => {
    if (!isSelectImage) {
      setIsSelectImage(!isSelectImage);
    }
    const url = await uploadSelectedImage(e.target.files[0]);
    return [
      setFeaturedImage({ url: url.secure_url, public_id: url.public_id }),
      //   dispatch({
      //     type: SET_REGISTER,
      //     ...registerState,
      //     imageUrl: url.secure_url,
      //   }),
    ];
  };

  const removeSelectedImage = (src) => {
    let answer = window.confirm("Want to Delete?");
    if (answer) {
      setLoadImage(true);
      removeCloudSelectedImage(src);
      setLoadImage(false);
    }
  };

  return (
    <>
      <Row className="p-2">
        <Col md="10" offset="1">
          <FormGroup>
            <input
              name="featuredImage"
              type="file"
              accept="image/*"
              onChange={handleChange}
              className="form-control"
              placeholder="image"
            />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col md="12" className="text-center">
          {loadImage ? (
            <div className="text-center">
              <Spinner className="text-center" size="md" color="primary" />
            </div>
          ) : isSelectImage ? (
            <div>
              <img
                key={featuredImage.public_id}
                className="img-thumbnail"
                src={featuredImage.url}
                style={{ width: "200px", cursor: "pointer" }}
              />
              <FaTrash
                onClick={() => removeSelectedImage(featuredImage.public_id)}
                size={20}
                color="red"
                style={{ cursor: "pointer", top: 0 }}
              />
            </div>
          ) : (
            <Card className="text-center">
              <h3 className="lao">ເລືອກຮູບ</h3>
              <FaImage size={150} color="grey" />
            </Card>
          )}
        </Col>
      </Row>
    </>
  );
};

export default FileUpload;
