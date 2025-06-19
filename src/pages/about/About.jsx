import "./about.css";
export default function About() {
  const expolre = [
    "https://preview.redd.it/durefishan-for-lux-event-in-ansab-jahangir-v0-1s9f9csnse4e1.jpg?width=640&crop=smart&auto=webp&s=e4d3bd8f179e44eb2254b891ee293daab88c9f2d",
    "https://assets.telegraphindia.com/telegraph/2024/Mar/1709377555_kartik-aaryan.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt7oXAYDFBYnyHMBWgrIzdFMccHR23GLKYkg&s",
    "https://i.pinimg.com/236x/a5/2e/a5/a52ea53aca82853832239b2178bd2f24.jpg",
    "https://i.pinimg.com/originals/e2/4b/a9/e24ba9295d4a20c1d13b96917329e6e2.jpg",
    "https://cdn.siasat.com/wp-content/uploads/2023/02/wahaj-ali-ed.jpg",
    "https://staticimg.amarujala.com/assets/images/2024/12/10/sara-tendulkar_ef9aae706ed4a9b78a5f336f93ac5b75.jpeg?q=80&w=480&dpr=2.6",
    "https://m.media-amazon.com/images/M/MV5BZWM3NzA4MmEtZTQzMC00N2QyLTg2YTctYjgxMWU4ZDA0ODg3XkEyXkFqcGc@._V1_.jpg",
    "https://i.pinimg.com/736x/83/df/99/83df990bac2e69bc97fd2e11a1d7608d.jpg",
    "https://www.jansatta.com/wp-content/uploads/2024/11/Who-is-Pakistani-actress-Hania-Aamir-3.jpg",
    "https://images.news18.com/webstories/2023/08/342535195_563764982277566_2740288350226655898_n.jpg",
    "https://i.pinimg.com/736x/91/d3/af/91d3af849600c3984af6d9c00b89cf1c.jpg",
       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ19kOikhKn2SGii7hFIjrdZFYAd-tFpLhMyg&s",
    "https://i.pinimg.com/736x/51/e2/c8/51e2c8156adeba9c1a1105579a2a9156.jpg",
    "https://i.pinimg.com/236x/72/14/44/7214445e8025eb230f378ab08df2e1fc.jpg",
    "https://www.bollywoodshaadis.com/img/article-202312117454163941000.jpg",
    "https://i.aaj.tv/primary/2024/11/10192302aa30c60.webp",
    "https://www.shutterstock.com/image-photo/young-hispanic-man-smiling-confident-260nw-2315434479.jpg",
    "https://i.pinimg.com/736x/65/8b/0c/658b0cc22209828fc4a2b46e9654693b.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjDm4h4PmNxbeebPvoPYzaejLYTsSqLyhLJsSUMv8MGhM1u-eRoDXTBVoUrlM1ZpU9q0g&usqp=CAU",
      "https://w0.peakpx.com/wallpaper/778/678/HD-wallpaper-akshay-kumar-bollywood-indian-actor-movie-stars.jpg",                                                                                        
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
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrAmxXxfi5kA3WPSiqfA0-OHLQ95s105qEFfPiSUseASEMRHo346P_RQivtu3pd21mZ-Q&usqp=CAU",
    "https://m.media-amazon.com/images/M/MV5BMDgyNjZmNTUtODJiZS00M2U2LTkzNDItZDc2YzAzOTIwZjQzXkEyXkFqcGc@._V1_.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThHwTdBy47c2giEtGjawOscuGu4lNYN9x--A&s",
    "https://randomuser.me/api/portraits/men/88.jpg",
    "https://i.pinimg.com/originals/78/eb/95/78eb95466f8d37a86ad7f37491211196.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_-h9nz4yJKbjUFX0dbEXdH7yF0mf3GgCs2A&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVJmKQpaYDMdLNoojfbW63fXdCZQKoE3NmlXrCwJ0aoXdbqJ0q3ubiIxG0RwJgo3FZH0g&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_-h9nz4yJKbjUFX0dbEXdH7yF0mf3GgCs2A&s",
 
    "https://randomuser.me/api/portraits/men/32.jpg",
    "https://w0.peakpx.com/wallpaper/778/678/HD-wallpaper-akshay-kumar-bollywood-indian-actor-movie-stars.jpg",                                                                                        
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
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrAmxXxfi5kA3WPSiqfA0-OHLQ95s105qEFfPiSUseASEMRHo346P_RQivtu3pd21mZ-Q&usqp=CAU",
    "https://m.media-amazon.com/images/M/MV5BMDgyNjZmNTUtODJiZS00M2U2LTkzNDItZDc2YzAzOTIwZjQzXkEyXkFqcGc@._V1_.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThHwTdBy47c2giEtGjawOscuGu4lNYN9x--A&s",
    "https://randomuser.me/api/portraits/men/88.jpg",
    "https://i.pinimg.com/originals/78/eb/95/78eb95466f8d37a86ad7f37491211196.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_-h9nz4yJKbjUFX0dbEXdH7yF0mf3GgCs2A&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVJmKQpaYDMdLNoojfbW63fXdCZQKoE3NmlXrCwJ0aoXdbqJ0q3ubiIxG0RwJgo3FZH0g&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_-h9nz4yJKbjUFX0dbEXdH7yF0mf3GgCs2A&s",
 
  ];
  return (
    <>
      {
        <div className="masonry-wrapper">
          {expolre.map((item, i) => (
            <div className="masonry-item" key={i}>
              <img src={item} alt={`Image-${i}`} />
            </div>
          ))}
        </div>
      }
    </>
  );
}
