import { useNavigate,Outlet } from "react-router-dom";

export default function Contact() {
  const navigate = useNavigate();

  const handleSubmit = () => {
    console.log("------");
    return navigate("/");
  }

  return (
    <>
      <div>Contact</div>
      <Outlet />
      <button onClick={handleSubmit} className="btn btn-info">Submit Form</button>
    </>
  )
}
