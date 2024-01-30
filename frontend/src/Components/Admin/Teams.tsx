import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useNavigate, useParams} from 'react-router-dom';


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
    const {key} = useParams();
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
              <table>
                <thead>
                <tr>
                  <th>Team Name</th>
                  <th>University</th>
                  <th>Other</th>
                  <th>Leader Name</th>
                  <th>Leader Year</th>
                  <th>Leader Whatsapp</th>
                  <th>Leader Email</th>
                  <th>Leader NIC</th>
                  <th>Member 1 Name</th>
                  <th>Member 1 Year</th>
                  <th>Member 1 Whatsapp</th>
                  <th>Member 1 Email</th>
                  <th>Member 1 NIC</th>
                  <th>Member 2 Name</th>
                  <th>Member 2 Year</th>
                  <th>Member 2 Whatsapp</th>
                  <th>Member 2 Email</th>
                  <th>Member 2 NIC</th>
                  <th>Member 3 Name</th>
                  <th>Member 3 Year</th>
                  <th>Member 3 Whatsapp</th>
                  <th>Member 3 Email</th>
                  <th>Member 3 NIC</th>
                </tr>
                </thead>
                <tbody>
                {teams.map((team, index) => (
                    <tr key={index}>
                      <td>{team.teamName}</td>
                      <td>{team.university}</td>
                      <td>{team.other}</td>
                      <td>{team.leaderName}</td>
                      <td>{team.leaderYear}</td>
                      <td>{team.leaderWhatsapp}</td>
                      <td>{team.leaderEmail}</td>
                      <td>{team.leaderNIC}</td>
                      <td>{team.member1Name}</td>
                      <td>{team.member1Year}</td>
                      <td>{team.member1Whatsapp}</td>
                      <td>{team.member1Email}</td>
                      <td>{team.member1NIC}</td>
                      <td>{team.member2Name}</td>
                      <td>{team.member2Year}</td>
                      <td>{team.member2Whatsapp}</td>
                      <td>{team.member2Email}</td>
                      <td>{team.member2NIC}</td>
                      <td>{team.member3Name}</td>
                      <td>{team.member3Year}</td>
                      <td>{team.member3Whatsapp}</td>
                      <td>{team.member3Email}</td>
                      <td>{team.member3NIC}</td>
                    </tr>
                ))}
                </tbody>
              </table>
            </div>
        </div>
    );
};

export default Teams;
