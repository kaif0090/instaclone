import { useState } from "react";
import "./story.css";

export default function Story() {
  const [popupImg, setPopupImg] = useState(null);

  const storyImages = [
    
   
    "https://i.aaj.tv/primary/2024/11/10192302aa30c60.webp",
    
     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRgucSnrrP6a_4AhQL1f7UdcbgZiVBmuEV3g&s",
    "https://i.pinimg.com/736x/8a/7c/f0/8a7cf04452a1d72396f5b71d097b5eda.jpg",
    "https://www.shutterstock.com/image-photo/young-hispanic-man-smiling-confident-260nw-2315434479.jpg",
   "https://i.pinimg.com/236x/a5/2e/a5/a52ea53aca82853832239b2178bd2f24.jpg",
    "https://i.pinimg.com/originals/e2/4b/a9/e24ba9295d4a20c1d13b96917329e6e2.jpg",
    "https://cdn.siasat.com/wp-content/uploads/2023/02/wahaj-ali-ed.jpg",
    "https://staticimg.amarujala.com/assets/images/2024/12/10/sara-tendulkar_ef9aae706ed4a9b78a5f336f93ac5b75.jpeg?q=80&w=480&dpr=2.6",
    "https://m.media-amazon.com/images/M/MV5BZWM3NzA4MmEtZTQzMC00N2QyLTg2YTctYjgxMWU4ZDA0ODg3XkEyXkFqcGc@._V1_.jpg",
    "https://i.pinimg.com/736x/83/df/99/83df990bac2e69bc97fd2e11a1d7608d.jpg",
    "https://www.jansatta.com/wp-content/uploads/2024/11/Who-is-Pakistani-actress-Hania-Aamir-3.jpg",
    "https://images.news18.com/webstories/2023/08/342535195_563764982277566_2740288350226655898_n.jpg",
    "https://i.pinimg.com/736x/91/d3/af/91d3af849600c3984af6d9c00b89cf1c.jpg",
    "https://randomuser.me/api/portraits/women/66.jpg",
   "https://voguevocal.com/wp-content/uploads/2024/07/Sajal-Aly.jpg",
    "https://i.pinimg.com/564x/d1/85/be/d185be7492852a163e8344d1d73e8bc5.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCMdWE3jR8xKgeyyW5pNTAC07BlggEO1gYQ19V3etfAgvoTV9kDz2ipL8LPGFmUW4lDwg&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRgucSnrrP6a_4AhQL1f7UdcbgZiVBmuEV3g&s",
    "https://i.pinimg.com/736x/8a/7c/f0/8a7cf04452a1d72396f5b71d097b5eda.jpg",
    "https://i.pinimg.com/736x/74/cf/7e/74cf7efa291ca548917512fb8d032111.jpg",
    "https://i.pinimg.com/736x/81/ee/23/81ee237987b5d025eb87fca025541bb5.jpg",
    "https://s1.dmcdn.net/v/VAns41at_TC6F6R8z/x720",
    "https://i.pinimg.com/736x/25/e0/d3/25e0d37652e95a52c5196a69664784f5.jpg",
    "https://static.toiimg.com/photo/119129076.cms",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxokyipjduGOi3hf4LesMlsbPSgNiIyl2l9Q&s",
    "https://images.unsplash.com/photo-1502685104226-ee32379fefbe",
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
