import Image from "next/image";
import logo from "@/assets/logo.png";
import { format } from "date-fns";

const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center space-y-4 mt-5">
      <Image src={logo} width={300} height={200} alt="logo.png" />
      <h2 className="font-bold text-4xl">Journalism Without Fear or Favour</h2>
      <p className="font-semibold">{format(new Date(), "EEEE,MMM dd,yyyy")}</p>
    </div>
  );
};

export default Header;
