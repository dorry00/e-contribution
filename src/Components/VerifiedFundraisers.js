import React,{useEffect,useState} from 'react'
import axios from 'axios';

function VerifiedFundraisers() {

    const [loading, setLoading] = useState(true);
    const [verifiedcontributions, setverifiedContributions] = useState([]);
  
    useEffect(() => {
      const fetchVerifiedContributions = async () => {
        setLoading(true);
        const response = await axios.get(
          "https://msaadaproject.herokuapp.com/api/verified/contribution"
        );
        console.log(response.data)
  
        setverifiedContributions(response.data);
        setLoading(false);
      };
  
      fetchVerifiedContributions();
    }, []);
    return (
        <div>
            hello from VerifiedFundraisers
            
        </div>
    )
}

export default VerifiedFundraisers
