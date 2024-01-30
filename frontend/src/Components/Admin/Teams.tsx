import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';



interface Team {
  teamName: string;
  university: string;
    other: string;
    leaderName: string;
    leaderYear: string;
    leaderWhatsapp: string;
    leaderEmail: string;
    leaderNIC: string;
    member1Name: string;
    member1Year: string;
    member1Whatsapp: string;
    member1Email: string;
    member1NIC: string;
    member2Name: string;
    member2Year: string;
    member2Whatsapp: string;
    member2Email: string;
    member2NIC: string;

    // not required
    member3Name?: string;
    member3Year?: string;
    member3Whatsapp?: string;
    member3Email?: string;
    member3NIC?: string;

}






const Teams: React.FC = () => {
    const { key } = useParams();
  const [authKey, setAuthKey] = useState<string>('');
  const [teams, setTeams] = useState<Team[]>([]);
  const [error, setError] = useState<string>('');
  const navigate = useNavigate();

  useEffect(() => {
    // Extracting the auth key from URL
    console.log(key);
    if (key) {
      setAuthKey(key);
      fetchTeams(key);
      
    } else {
      // Redirect to home page if auth key is not found
      navigate('/');
    }
  }, [navigate]);

  const fetchTeams = async (key: string) => {
    try {
      const response = await axios.get(process.env.REACT_APP_BACKEND_URL + '/api/team/getTeams', {
        headers: {
          Authorization: key
        }
      });
      setTeams(response.data.data); // Assuming the data is in response.data.data
    } catch (err: any) {
      setError(err.message || 'Error fetching teams');
      // Redirect to home page if auth key is wrong
      navigate('/');
    }
  };

  if (!authKey) {
    return <div>Loading or no auth key present...</div>;
  }

  return (
    <div className='pt-5'>
        <div className="container mt-5 pt-5">
{/* Count */}
        <h1>Count: {teams.length}</h1>
      {error && <p>Error: {error}</p>}
      <h1>Teams</h1>
      <ul>
        {teams.map((team, index) => (
          <li key={index}>{team.teamName} - {team.university}</li>
        ))}
      </ul>
      </div>
    </div>
  );
};

export default Teams;
