import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import ProfileForm from "../components/ProfileForm";

export default function ProfilePage() {
  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <ProfileForm />
      </div>
    </>
  );
}
