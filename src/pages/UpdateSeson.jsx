import { useEffect, useState } from "react";
import axiosInterceptor from '../axios/axiosInterceptor';
import { Avatar, Space } from 'antd';
import { LoadingOutlined, CameraOutlined } from "@ant-design/icons";
import SeminerCard from "../components/SeminerCard.jsx";

const UpdateSeson = () => {
    const [name, setname] = useState("");
    const [designation, setdesignation] = useState("");
    const [image, setImage] = useState({});
    const [uploading, setUploading] = useState(false);
    const [id, setId] = useState({});
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const api = axiosInterceptor();
    const [teams, setTeams] = useState([]);


const [title,setTitle]=useState(" ");
const [subtitle,setSubtitle]=useState(" ");
const [time,setTime]=useState(" ");
const [date,setDate]=useState(" ")


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
console.log( image,
    title,
    subtitle,
    date,
    time,);
        try {
            const { data } = await api.post("/seminar-create", {
                image,
                title,
                subtitle,
                date,
                time,
                
            });
            setSuccessMessage("Team Member created successfully!");
            setErrorMessage(''); // Clear any previous error message
            if (data) {
                
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
            const { data } = await api.get("/seminar");
            setTeams(data.seminer);
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div className="p-4 w-100 d-flex justify-content-center">
            <div className="w-100 d-flex flex-column align-items-center">
                <h3 className="text-center">Create a Session</h3>
                <div className="w-75">
                    <div className="mb-3">
                        <label className="form-label">Title</label>
                        <input
                            className="form-control w-100"
                            type="text"
                            value={title}
                            placeholder="Title"
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    {/*  */}
                    <div className="mb-3">
                        <label className="form-label">Content</label>
                        <input
                            className="form-control w-100"
                            type="text"
                            value={subtitle}
                            placeholder="Content"
                            onChange={(e) => setSubtitle(e.target.value)}
                        />
                    </div>
                    {/*  */}
                    <div className="mb-3">
                        <label className="form-label">Date</label>
                        <input
                            className="form-control w-100"
                            type="text"
                            value={date}
                            placeholder="Date"
                            onChange={(e) => setDate(e.target.value)}
                        />
                    </div>
                    {/*  */}
                    <div className="mb-3">
                        <label className="form-label">Time</label>
                        <input
                            className="form-control w-100"
                            type="text"
                            value={time}
                            placeholder="Time"
                            onChange={(e) => setTime(e.target.value)}
                        />
                    </div>
                    {/*  */}
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
                <p>Session Deatails</p>
                {teams && teams.map((team, index) => (
                    <div key={index} className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                        <SeminerCard data={team} title="Session"/>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UpdateSeson;
