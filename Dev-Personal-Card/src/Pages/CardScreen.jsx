import {
    FaInstagram,
    FaGithub,
    FaLinkedinIn,
    FaYoutube,
  } from "react-icons/fa6";
  import { SiGmail } from "react-icons/si";
  import { MdOutlineWorkHistory } from "react-icons/md";
  import profile from "../assets/profile.jpg";
  
  const CardScreen = () => {
    return (
      <div className="w-[90%] sm:w-[70%] md:w-[60%] lg:w-[50%] h-auto bg-[#92a4b1] rounded-[20px] grid grid-cols-1 md:grid-cols-2 p-4">
        {/* Profile Image */}
        <div className="col-span-1 flex justify-center items-center">
          <img
            className="w-[60%] sm:w-[70%] md:w-[90%] h-auto object-cover rounded-tl-[40px] rounded-br-[40px] rounded-bl-[10px] rounded-tr-[10px]"
            src={profile}
            alt="Profile"
          />
        </div>
  
        {/* Profile Details */}
        <div className="col-span-1 flex flex-col justify-center items-center md:items-start gap-4 p-4">
          <h1 className="text-[22px] sm:text-[24px] md:text-[26px] font-bold text-center md:text-left">
            MOHAMMED IMRAN
          </h1>
          <div className="flex items-center gap-2">
            <MdOutlineWorkHistory size={26} />
            <p className="font-medium text-[12px] sm:text-[14px] md:text-[16px]">
              MERN Stack Dev.
            </p>
          </div>
          <p className="text-[11px] sm:text-[12px] md:text-[13px] font-medium text-center md:text-left">
            💻 MERN Stack Developer | 🎨 UX Designer | 📹 Content Creator
          </p>
  
          {/* Social Media Icons */}
          <div className="flex gap-3">
            <a href="https://www.instagram.com/immucoder/">
              <FaInstagram size={24} />
            </a>
            <a href="https://github.com/AMOHAMMEDIMRAN/">
              <FaGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/mohammedimrana/">
              <FaLinkedinIn size={24} />
            </a>
            <a href="https://youtube.com/@immu_coder?si=26BcGa2GHvu4O2v6">
              <FaYoutube size={24} />
            </a>
            <a href="https://mail.google.com/mail/u/0/#inbox?compose=jrjtXJSwwtsNrdjcbPFVvmZMLcVLfjztZDNkgzBMrnjWBtmPPjTSpNxtTBVqfDmTfQKMPVrV">
              <SiGmail size={24} />
            </a>
          </div>
        </div>
      </div>
    );
  };
  
  export default CardScreen;
  