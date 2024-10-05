import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Profile = () => {
  const { photoId } = useParams();
  const [photoImage, setPhotoImage] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async function () {
      try {
        const photoData1 = await fetch(
          `https://jsonplaceholder.typicode.com/photos/${photoId}`
        );
        const photoData = await photoData1.json();
        setPhotoImage(photoData.url);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    })();
  }, []);
  return (
    <div>{isLoading ? "Loading...." : <img src={photoImage} alt="" />}</div>
  );
};

export default Profile;
