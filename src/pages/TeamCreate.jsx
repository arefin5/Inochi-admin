import { useEffect, useState } from "react";
import axiosInterceptor from '../axios/axiosInterceptor';
import TeamCard from "../components/TeamCard.jsx"
const TeamCreate = () => {
    const [name, setname] = useState("");
    const [designation, setdesignation] = useState("");
    const [image, setImage] = useState({});
    const [uploading, setUploading] = useState(false);
    const [id, setId] = useState({});
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const api = axiosInterceptor();
    const [teams, setTeams] = useState([]);


    // const handleImageChange = async (e) => {
    //     const file = e.target.files[0];
    //     let formData = new FormData();
    //     formData.append("image", file);
    //     setUploading(true);
    //     try {
    //         const { data } = await api.post("/upload", formData);
    //         setId({
    //             id: data.public_id,
    //         });
    //         setUploading(false);
    //     } catch (err) {
    //         console.error('Error uploading image:', err);
    //         setUploading(false);
    //         setSuccessMessage('');
    //         setErrorMessage("Failed to upload image. Please try again.");
    //     }
    // };
    const handleImageChange = async (e) => {
        const file = e.target.files[0];
        let formData = new FormData();
        formData.append("image", file);
        // setUploading(true);
        try {
            const response = await axios.post("http://localhost:5000/api/upload-image-file", formData);
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
            const public_id = id.id;
            const { data } = await api.post("/team-create", {
                public_id,
                name,
                designation
            });
            setSuccessMessage("Team Member created successfully!");
            setErrorMessage(''); // Clear any previous error message
            if (data) {
                setname(' ');
                setdesignation(' ');
                public_id(' ');
                setSuccessMessage(' ');
                setErrorMessage(' /')
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
            setTeams(data.team);
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div className="p-4 w-100 d-flex justify-content-center">
            <div className="w-100 d-flex flex-column align-items-center">
                <h3 className="text-center">Create a Team Member</h3>
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
                        <label className="form-label">
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
