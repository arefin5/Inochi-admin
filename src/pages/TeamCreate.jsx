import { useEffect, useState } from "react";
import axiosInterceptor from '../axios/axiosInterceptor';
import TeamCard from "../components/TeamCard.jsx";
import { Avatar, Space } from 'antd';
import { LoadingOutlined, CameraOutlined } from "@ant-design/icons";

const TeamCreate = () => {
    const [name, setname] = useState("");
    const [designation, setdesignation] = useState("");
    const [image, setImage] = useState({});
    const [uploading, setUploading] = useState(false);
    const [id, setId] = useState({});
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [facebook,setFacebook]=useState("");
    const [twiter,setTwiter]=useState("");
    const [youtube,setyoutube]=useState("");
    const [linkdin,setLinkdin]=useState("");
    const [email,setEmail]=useState("");
    const [position,setPosition]=useState(0);
    


    const api = axiosInterceptor();
    const [teams, setTeams] = useState([]);

    const handleImageChange = async (e) => {
        const file = e.target.files[0];
        let formData = new FormData();
        formData.append("image", file);
        // setUploading(true);
        try {
            const response = await api.post("/upload-image-file", formData);
            if (response && response.data && response.data) {
                setImage({
                    url: response.data.url,
                    public_id: response.data.public_id,
                });
                setUploading(false);
                setSuccessMessage('Image uploaded successfully.');
            } else {
                setErrorMessage("Failed to upload image. Please try again.");
            }
        } catch (err) {
            console.error('Error uploading image:', err);
            setErrorMessage("Failed to upload image. Please try again.");
        } finally {
            setUploading(false);
        }
    };
    const handleSubmit = async () => {

        try {
            const { data } = await api.post("/team-create", {
                image,
                name,
                designation,
                facebook,
                twiter,
                linkdin,
                youtube,
                position,
                email
            });
            setSuccessMessage("Team Member created successfully!");
            setErrorMessage(''); // Clear any previous error message
            if (data) {
                setname(' ');
                setdesignation(' ');
                setSuccessMessage(' ');
                setErrorMessage(' ');
                setImage(' ')
                await fetchTeam();

            }

        } catch (err) {
            console.error("Error:", err);
            setSuccessMessage('');
            setErrorMessage("Failed to create Team Member. Please try again.");
        }
    };
    // fetch team :
    useEffect(() => {
        fetchTeam();
    }, []);

    const fetchTeam = async () => {
        try {
            const { data } = await api.get("/team-member");
            const sortedTeams = data.team.sort((a, b) => a.position - b.position);
             setTeams(sortedTeams);
            // setTeams(data.team);
            console.log(data.team)
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div className="p-4 w-100 d-flex justify-content-center">
            <div className="w-100 d-flex flex-column align-items-center">
                <h3 className="text-center">Create a Season</h3>
                <div className="w-75">
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input
                            className="form-control w-100"
                            type="text"
                            value={name}
                            placeholder="Name"
                            onChange={(e) => setname(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">facebook</label>
                        <input
                            className="form-control w-100"
                            type="text"
                            value={facebook}
                            placeholder="Facebook"
                            onChange={(e) => setFacebook(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">twiter</label>
                        <input
                            className="form-control w-100"
                            type="text"
                            value={twiter}
                            placeholder="twiter"
                            onChange={(e) => setTwiter(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Youtube</label>
                        <input
                            className="form-control w-100"
                            type="text"
                            value={youtube}
                            placeholder="Youtube"
                            onChange={(e) => setyoutube(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">linkdin</label>
                        <input
                            className="form-control w-100"
                            type="text"
                            value={linkdin}
                            placeholder="linkdin"
                            onChange={(e) => setLinkdin(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input
                            className="form-control w-100"
                            type="text"
                            value={email}
                            placeholder="Email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">position set</label>
                        <input
                            className="form-control w-100"
                            type="number"
                            value={position}
                            placeholder="set position"
                            onChange={(e) => setPosition(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Designation</label>
                        <input
                            className="form-control w-100"
                            type="text"
                            value={designation}
                            placeholder="designation"
                            onChange={(e) => setdesignation(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">

                        {/*  */}
                        {/* upload image */}

                        {/*  */}
                        <label className="form-label">
                            {/*  */}
                            {image && image.url ? (
                                <Avatar size={30} src={image.url} className="mt-1" />
                            ) : uploading ? (
                                <LoadingOutlined className="mt-2" />
                            ) : (
                                <CameraOutlined className="mt-2" />
                            )}
                            {/*  */}
                            Image
                        </label>
                        <input
                            className="form-control w-100"
                            type="file"
                            onChange={handleImageChange}
                        />
                    </div>


                    <div className="d-flex gap-4">

                        <button
                            type="button"
                            className="btn bg-success btn-sm text-white"
                            onClick={handleSubmit}
                        >
                            Submit
                        </button>
                        {uploading && <p>Loading...</p>}
                        {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
                        {errorMessage && <p style={{ color: 'red' }} >{errorMessage}</p>}
                    </div>
                </div>
                <p>Team Member</p>
                {teams && teams.map((team, index) => (
                    <div key={index} className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                        <TeamCard data={team} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TeamCreate;
