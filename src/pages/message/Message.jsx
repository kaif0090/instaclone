import "./message.css"
import { TiStarburst } from "react-icons/ti";
import { LuMessageCircleQuestion } from "react-icons/lu";
export default function Message() {
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
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-3 message" >
            <h5>Suggested for you</h5>
            {users.map((element, index) => (
              <div key={index} className="message-user mb-3">
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
                  color="rgb(255, 0, 128)"
                  style={{ marginTop: "-20px", marginLeft: "5px" }}
                />
                <button
                  className="btn "
                  style={{ height: "35px ", marginTop: "-20px", color:"rgb(255, 0, 128)" }}
                >
                  {" "}
                  Message
                </button>
              </div>
            ))}
          </div>
          <div className="col-xl-9 mainmsg">
           <LuMessageCircleQuestion size={150} />
           
            <span className="msg"> 

            Your messages
             <br />
           </span>
           <p>
Send a message to start a chat.
           </p>
           <button className="btn" style={{backgroundColor:'rgb(255, 0, 128)',color:"white"}}>Message</button>
          </div> 
        </div>
      </div>
    </>
  );
}
