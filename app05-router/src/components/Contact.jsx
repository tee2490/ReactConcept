import { useNavigate } from "react-router-dom";

export default function Contact() {
  const navigate = useNavigate();

  const handleSubmit = () => {
    console.log("------");
    return navigate("/");
  }

  return (
    <>
      <div>Contact</div>
      <button onClick={handleSubmit} className="btn btn-info">Submit Form</button>
    </>
  )
}
