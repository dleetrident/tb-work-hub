import { useEffect, useState } from "react";
import useGetNews from "../../hooks/useGetNews";
import Card from "../../ui/Card";
import classes from "./PhotosCard.module.css";
import { storage } from "../../firebase";
import { ref, listAll, getDownloadURL } from "firebase/storage";
const PhotosCard = (props) => {
  const [fileList, setFileList] = useState([]);
  const imageListRef = ref(storage, "image/");
  useEffect(() => {
    setFileList([]);
    listAll(imageListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setFileList((prevValue) => [...prevValue, url].sort());
        });
      });
    });
  }, []);
  return (
    <Card cardHeader="Photos">
      <div className={classes.gridcontainer}>
        {fileList.map((url, index) => {
          return (
            <div className={classes.imgdiv} key={index} id={index}>
              <img className={classes.photo} src={url} alt="" />
            </div>
          );
        })}
      </div>
    </Card>
  );
};

export default PhotosCard;
