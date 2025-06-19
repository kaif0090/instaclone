import { useState } from "react";
import "./story.css";

export default function Story() {
  const [popupImg, setPopupImg] = useState(null);

  const storyImages = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRgucSnrrP6a_4AhQL1f7UdcbgZiVBmuEV3g&s",
    "https://i.pinimg.com/736x/8a/7c/f0/8a7cf04452a1d72396f5b71d097b5eda.jpg",
     "https://i.pinimg.com/736x/83/df/99/83df990bac2e69bc97fd2e11a1d7608d.jpg",
    "https://i.aaj.tv/primary/2024/11/10192302aa30c60.webp",
     "https://www.shutterstock.com/image-photo/young-hispanic-man-smiling-confident-260nw-2315434479.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjDm4h4PmNxbeebPvoPYzaejLYTsSqLyhLJsSUMv8MGhM1u-eRoDXTBVoUrlM1ZpU9q0g&usqp=CAU",
    "https://randomuser.me/api/portraits/men/32.jpg",
     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRgucSnrrP6a_4AhQL1f7UdcbgZiVBmuEV3g&s",
    "https://i.pinimg.com/736x/8a/7c/f0/8a7cf04452a1d72396f5b71d097b5eda.jpg",
    "https://www.shutterstock.com/image-photo/young-hispanic-man-smiling-confident-260nw-2315434479.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjDm4h4PmNxbeebPvoPYzaejLYTsSqLyhLJsSUMv8MGhM1u-eRoDXTBVoUrlM1ZpU9q0g&usqp=CAU",
    "https://randomuser.me/api/portraits/men/32.jpg",
    "https://randomuser.me/api/portraits/women/45.jpg",
    "https://images.unsplash.com/photo-1502685104226-ee32379fefbe",
    "https://randomuser.me/api/portraits/men/64.jpg",
    "https://randomuser.me/api/portraits/women/10.jpg",

    "https://randomuser.me/api/portraits/men/88.jpg",
    "https://randomuser.me/api/portraits/women/66.jpg",
    "https://randomuser.me/api/portraits/men/15.jpg",
    "https://randomuser.me/api/portraits/women/23.jpg",  
    "https://i.pinimg.com/736x/25/e0/d3/25e0d37652e95a52c5196a69664784f5.jpg"
    
  ];

  return (
    <>
     
           <div className="ilogo d-xl-none d-xm-none d-sm-none d-block " style={{height:"80px",justifyContent:'space-between', marginTop:"-20px"}}>
          <img src="https://logos-world.net/wp-content/uploads/2020/05/Instagram-Logo-2016-present.png" alt="" height={70} width={150} style={{marginLeft:"0"}}/>
        </div>
        
      <div className="story">  
     
        {storyImages.map((img, index) => (
          <div className="pstory" key={index}>
            <div className="cstory">
              <img
                src={img}
                alt={`story-${index}`}
                className="img-fluid  story-img"
                onClick={() => setPopupImg(img)}
              />
            </div>  
          </div>
        ))}
      </div>

      {/* Popup */}
      {popupImg && (
        <div className="popup" onClick={() => setPopupImg(null)}>
          <span className="close">&times;</span>
          <img src={popupImg} alt="Popup" className="popup-img" />
        </div>
      )}
    </>
  );
}
