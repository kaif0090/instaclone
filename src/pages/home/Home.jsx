import Story from "../../components/story/Story";
import "./home.css";
import dp from "../../assets/dp.png";
import post from "../../assets/post.png";
import { FaRegHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import { RiShareForwardLine } from "react-icons/ri";
import { BsSave2 } from "react-icons/bs";
import { useState } from "react";
import { TiStarburst } from "react-icons/ti";

export default function Home() {
  const userPosts = [
    {
      user: "sara khan",
      img: "https://randomuser.me/api/portraits/women/45.jpg",
      post: "https://mastdp.com/images/beautiful-girl/2024/08/beautiful%20girl%20wallpaper-09.webp",
    },
    {
      user: "Zaid Ahmed",
      img: "https://randomuser.me/api/portraits/men/64.jpg",
      post: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d",
    },
    {
      user: "Ayesha Noor",
      img: "https://randomuser.me/api/portraits/women/12.jpg",
      post: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    },
    {
      user: "Ali Raza",
      img: "https://randomuser.me/api/portraits/men/65.jpg",
      post: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    },
    {
      user: "Mehwish Butt",
      img: "https://randomuser.me/api/portraits/women/22.jpg",
      post: "https://i.pinimg.com/736x/25/e0/d3/25e0d37652e95a52c5196a69664784f5.jpg",
    },
    {
      user: "Owais Khan",
      img: "https://randomuser.me/api/portraits/men/24.jpg",
      post: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    },
    {
      user: "Hira Sheikh",
      img: "https://randomuser.me/api/portraits/women/32.jpg",
      post: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
    },
    {
      user: "Ahmed Bashir",
      img: "https://randomuser.me/api/portraits/men/31.jpg",
      post: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    },
    {
      user: "Laiba Fatima",
      img: "https://randomuser.me/api/portraits/women/55.jpg",
      post: "https://i.pinimg.com/736x/d9/c2/25/d9c225abda21a05c7ba57ed73880e8d1.jpg",
    },
    {
      user: "Rehan Qureshi",
      img: "https://randomuser.me/api/portraits/men/90.jpg",
      post: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
    },
  ];

  // State to track liked posts
  const [likedPosts, setLikedPosts] = useState(
    Array(userPosts.length).fill(false)
  );

  const toggleLike = (index) => {
    const updatedLikes = [...likedPosts];
    updatedLikes[index] = !updatedLikes[index];
    setLikedPosts(updatedLikes);
  };

  const users = [
    {
      name: "Virat Kohli",
      img: "https://static.toiimg.com/photo/119129076.cms",
    },
    {
      name: "kartik aryan",
      img: "https://assets.telegraphindia.com/telegraph/2024/Mar/1709377555_kartik-aaryan.jpg",
    },
    {
      name: "katrina kaif",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Katrina_Kaif_in_2018.jpg/250px-Katrina_Kaif_in_2018.jpg",
    },
    {
      name: "dure fishan",
      img: "https://i.pinimg.com/736x/0c/9c/34/0c9c34b0b051db64e2802e5366ff8254.jpg",
    },
    {
      name: "sara tendulkar",
      img: "https://staticimg.amarujala.com/assets/images/2024/12/10/sara-tendulkar_ef9aae706ed4a9b78a5f336f93ac5b75.jpeg?q=80&w=480&dpr=2.6",
    },
    {
      name: "anushka sharma",
      img: "https://m.media-amazon.com/images/M/MV5BZWM3NzA4MmEtZTQzMC00N2QyLTg2YTctYjgxMWU4ZDA0ODg3XkEyXkFqcGc@._V1_.jpg",
    },
    {
      name: "wamika",
      img: "https://i.pinimg.com/736x/83/df/99/83df990bac2e69bc97fd2e11a1d7608d.jpg",
    },
    {
      name: "hania amir",
      img: "https://i.aaj.tv/primary/2024/11/10192302aa30c60.webp",
    },
  ];

  return (
    <>
      <div className="">
        <Story />

        <div className="container-fluid" style={{ overflow: "hidden" }}>
          <div className="row">
            <div className="col-xl-9 scroll">
              <div className="post-container">
                {/* {userPosts.map((u, i) => ( */}
                <div className="post">
                  <div className="post-header">
                    <img src={dp} alt="kaif" className="avatar" />
                    <h4>
                      Kaif Ali Khan <TiStarburst color="blue" />
                    </h4>
                  </div>
                  <div className="post-image mb-3">
                    <img src={post} alt="post1" />
                  </div>
                  <div className="d-flex p-4">
                    <div className="d-flex gap-3 container">
                      <FaRegHeart size={25} /> <FaRegComment size={25} />
                      <RiShareForwardLine size={30} />
                    </div>

                    <BsSave2 size={25} />
                  </div>
                </div>
                {/* ))} */}
              </div>

              {/* me */}
              <div className="post-container">
                {userPosts.map((u, i) => (
                  <div className="post" key={i}>
                    <div className="post-header">
                      <img src={u.img} alt={u.user} className="avatar" />
                      <h4>{u.user}</h4> <hr />
                    </div>
                    <div className="post-image mb-2">
                      <img src={u.post} alt={`post-${i}`} />
                    </div>
                    <div className="d-flex p-4">
                      <div className="d-flex gap-3 container">
                        <FaRegHeart
                          size={25}
                          onClick={() => toggleLike(i)}
                          style={{
                            color: likedPosts[i] ? "red" : "black",
                            cursor: "pointer",
                          }}
                        />{" "}
                        <FaRegComment size={25} />
                        <RiShareForwardLine size={30} />
                      </div>

                      <BsSave2 size={25} />
                    </div>
                  </div>
                ))}
              </div>
            </div>



            <div className="col-xl-3 p-3 bg home-side">
              <h5>Suggested for you</h5>
              {users.map((element, index) => (
                <div key={index} className="suggested-user">
                  <img
                    src={element.img}
                    alt=""
                    style={{
                      height: "50px",
                      width: "50px",
                      borderRadius: "50%",
                    }}
                    className="mb-2"
                  />
                  <p>{element.name}</p>
                  <TiStarburst
                    color="blue"
                    style={{ marginTop: "-20px", marginLeft: "5px" }}
                  />
                  <button
                    className="btn text-primary"
                    style={{ height: "35px ", marginTop: "-20px" }}
                  >
                    {" "}
                    Follow
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
