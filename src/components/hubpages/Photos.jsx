import { useEffect } from "react";
import { useState } from "react";
import Page from "../../ui/Page";
import classes from "./Photos.module.css";
import useGetNews from "../../hooks/useGetNews";
import PlusImg from "../../Assets/PlusImg.png";
import { auth, storage } from "../../firebase";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

const Photos = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileList, setFileList] = useState([]);
  const [uploaded, setUploaded] = useState(0);

  const imageListRef = ref(storage, `image/${auth.currentUser.email}`);

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  useEffect(() => {
    if (selectedFile !== null) {
      const imageRef = ref(
        storage,
        `image/${auth.currentUser.email}/${selectedFile.name + v4()}`
      );
      uploadBytes(imageRef, selectedFile).then(() => {
        setUploaded(uploaded + 1);
      });
    }
  }, [selectedFile]);

  useEffect(() => {
    setFileList([]);
    listAll(imageListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          console.log(url);
          setFileList((prevValue) => [...prevValue, url].sort());
        });
      });
    });
    console.log(uploaded);
  }, [uploaded]);

  return (
    <Page heading="Photos">
      <div className={classes.container}>
        <div className={classes.gridcontainer}>
          <div className={classes.imgdiv}>
            <label htmlFor="upload">
              <img className={classes.photo} src={PlusImg} alt="" />
            </label>

            <input type="file" id="upload" onChange={changeHandler} />
          </div>
          {fileList.map((url, index) => {
            return (
              <div className={classes.imgdiv} key={index} id={index}>
                <img className={classes.photo} src={url} alt="" />
              </div>
            );
          })}
        </div>
      </div>
    </Page>
  );
};

export default Photos;
