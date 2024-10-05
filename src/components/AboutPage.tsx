import { useEffect } from "react";

type IMAGE_RESPONSE_TYPE = {
  id: number;
  albumId: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};
import './aboutpage.css'
const AboutPage = () => {
  

  console.log('helllo');
  
  // useEffect(() => {
  //   async function callApi() {
  //     const data = await fetch("https://jsonplaceholder.typicode.com/photos/1");
  //     const result = await data.json();
  //     setImageData(result);
  //   }
  //   callApi();
  // }, []);
  return (
    <div>
      {/* {Object.keys(imageData)?.length ? (
        <>
          <h1>title : {imageData?.title || ""} </h1>
          <img
            style={{ width: "100px", height: "100px" }}
            src={imageData?.url || ""}
          />
        </>
      ) : (
        "Loading..."
      )} */}
      <div className="flex">
      <h1 className="heading">superman</h1>
      <img className="image" src='https://images.news18.com/static_news18/pix/ibnhome/news18/News18.svg'></img>
      </div>
      
    </div>
  );
};

export default AboutPage;
