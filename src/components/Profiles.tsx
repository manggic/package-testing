import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type Photo = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

const Profiles = () => {
  const [photos, setPhotos] = useState<Array<Photo>>([]);

  useEffect(() => {
    (async function () {
      const data1 = await fetch(`https://jsonplaceholder.typicode.com/photos`);
      const data = await data1.json();
      setPhotos(data);
    })();
  }, []);
  return (
    <>
      <div className="text-2xl text-red-500 text-center">Profiles</div>
      {photos.slice(0, 10).map((photo, index) => {
        return (
          <div className="pl-5 cursor-pointer">
            <Link to={`/photo/${index + 1}`}>
              {index + 1}. {photo.title}
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default Profiles;
