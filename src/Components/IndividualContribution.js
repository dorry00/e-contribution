import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import axios from "axios";
import "../Components/IndividualContribution/IndividualContribution.css"
import MakePaymentPage from "./MakePaymentPage/MakePaymentPage";
import {
  EmailShareButton,
  FacebookShareButton, 
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  
} from "react-share";
import {
  EmailIcon,
  FacebookIcon,
  TelegramIcon,  
  TwitterIcon,
  WhatsappIcon,
  } from "react-share";



function IndividualContribution() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [contribution, setContribution] = useState({});
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [targetAmount, setTargetAmount] = useState("");
  const [paymentoption, setPaymentOption] = useState("");
  const [updateMode, setUpdateMode] = useState(false);
  const [openPaymentModal, setopenPaymentModal] = useState();
  const[deleteMode,setDeleteMode]=useState(false);
  const[loading,setLoading] =useState(false)

  // fetch a single post
  // const id = path
  useEffect(() => {
    let id = { id: path };
    const getContribution = async () => {
      const res = await axios.post(
        "https://msaadaproject.herokuapp.com/api/view/contribution",
        id
      );

      setContribution(res.data.response);
      setTitle(res.data.response.title);
      setDescription(res.data.response.description);
      setTargetAmount(res.data.response.targetAmount);
      setPaymentOption(res.data.response.paymentoption);
    };
    getContribution();
  }, [path]);

  // delete a single contribution
  const handleDelete = async (e) => {
    e.preventDefault()
    setLoading(false)
    let id = { id: path };
    try {
      const res = await axios.post(
        "https://msaadaproject.herokuapp.com/api/delete/contribution",
        id
      );
      setLoading(true)
      console.log(res.data.response)
      res.data && window.location.replace("/contributions");
    } catch (err) {
      console.log(err);
    }
  };

  // handle update
  const handleUpdate = async (e) => {
    e.preventDefault();
    let id = path;
    let updatedDetails = {
      id: id,
      title: title,
      description: description,
      targetAmount: targetAmount,
      paymentoption: paymentoption,
      verified: 1,
    }
    await axios.post(
      "https://msaadaproject.herokuapp.com/api/update/contribution", updatedDetails
    );
    window.location.reload()
    setUpdateMode(false)
  };

  // end of delete
  return (
    <div className="IndividualContributionWrapper">
      {openPaymentModal && <MakePaymentPage contributionId={contribution.id} contributionTitle={contribution.title} closePaymentModal={setopenPaymentModal} />}
          <div className="IndividualContribution">
        <h1 className="contributionHeader">{contribution.title}</h1>
        <p className="description">{contribution.description}</p>
        <p className="author">Contribution by <span>{contribution.createdBy}</span></p>
        <p className="author">created on<span> {new Date(contribution.created_at).toDateString()} </span></p>
        <button type="submit" className="paymentButton" onClick={() => setopenPaymentModal(true)}>Donate</button>

        <div className="socialIcons">
           

          <FacebookShareButton url ="https://msaada-app.netlify.app/contribution"
                    quote={"Hello friend I just donated towards this contribution, help us reach the goal by donating too !"}
          hashtag={"Helpingiscaring"}>
          <FacebookIcon className="socialIcon" round={true}></FacebookIcon>
          </FacebookShareButton>

          <WhatsappShareButton url ="https://msaada-app.netlify.app/contribution"
          separator={""}
          title ={"Hello friend I just donated towards this contribution,help us reach the goal by donating too !"}>
          <WhatsappIcon round={true} className="socialIcon"></WhatsappIcon>
          </WhatsappShareButton>

          <TelegramShareButton url ="https://msaada-app.netlify.app/contribution"
          title ={"Hello friend I just donated towards this contribution,help us reach the goal by donating too !"}> 
            <TelegramIcon round={true} className="socialIcon">
            </TelegramIcon>
           </TelegramShareButton>

           <TwitterShareButton url ="https://msaada-app.netlify.app/contribution"
            hashtags = {["Helpingiscaring"]} 
           title ={"Hello friend I just donated towards this contribution, help us reach the goal by donating too !"}
          ><TwitterIcon round={true} className="socialIcon">
           </TwitterIcon>
           </TwitterShareButton>

           <EmailShareButton url ="https://msaada-app.netlify.app/contribution"
          hashtags = {["Helpingiscaring"]}
          subject={"Donation to a msaada app contribution"}
          separator={""} 
           body ={"Hello friend I just donated towards this contribution, help us reach the goal by donating too !"}
          >
           <EmailIcon className="socialIcon" round={true}></EmailIcon>
           </EmailShareButton>




        </div>
      </div>

      <div >
        <div className="amount-raised-container">
          <div className="amount-raised"><span className="amount-text">{contribution.amount} /=</span> raised </div>
          <div className="dollars-per-mile">{contribution.targetAmount} /= needed</div>
        </div>
        </div>


        

        

        {updateMode ? (
          
          <div className="contributionBackground">
          <div className="updateContributionForm">
          <h3> Edit contribution</h3>
            <form >
              <div className="editForm">
              <div className="inputs">
                <label>Title</label>
              <input
                className="input"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <label>Amount</label>
              <input
                type="text"
                className="input"
                value={targetAmount}
                onChange={(e) => setTargetAmount(e.target.value)}
              />
               <label>Payment option</label>
              <input
                type="text"
                className="input"
                value={paymentoption}
                onChange={(e) => setPaymentOption(e.target.value)}
              />
            
              </div>
              <div className="textareas">
              <label>Description</label>
              <textarea
                type="text"
                className="input"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              </div>
              
             
              </div>
             
              
                  

              
            </form>
            <div className="editBtns">
              <button onClick={()=>setUpdateMode(false)}  className="cancelButton">cancel update</button>
              <button type="submit" onClick={handleUpdate} className="editBtn">Edit</button>
              </div>

            
            
</div>
          </div>
          
        ) : (
          <div className="editContribution">
            <i
              className=" contributionIcon  far fa-edit"
              onClick={() => setUpdateMode(true)}
            ></i>
            <i
              className=" contributionIcon fas fa-trash-alt"
              onClick={(e)=>{setDeleteMode(true)}}
            ></i>
          </div>
        )}

        {
          deleteMode && (<div className="deleteBackground">
            
            <div className="deleteContainer">
              <h1 className="deleteHeader">Delete contribution?</h1>
              <p>Are you sure you want to delete "<b>{contribution.title}"</b>?</p>
              <p>You can't undo this action</p>
              <div className="warning">
              <i className="fas fa-exclamation-triangle"></i> warning

              <p>Deleting this contribution is <b>irreversible</b> and you cannot recover it once the action is done. Are you sure you want to do this?</p>
              </div>
            <div className="editBtns">
              <button onClick={()=>setDeleteMode(false)}  className="editBtn">cancel delete</button>
              <button type="submit" onClick={handleDelete} className="cancelButton">{loading && "Deleting"}{!loading && "Delete anyway"}</button>
              </div>
              
            </div>
            
            </div>)
        }
    
      
    </div>
  );

}

export default IndividualContribution;
