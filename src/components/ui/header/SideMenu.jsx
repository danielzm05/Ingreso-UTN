import { Button } from "../Button";
import { HeaderItems } from "./HeaderItems";
import { ArrowRightFromLine } from "lucide-react";
import { useAuthContext } from "../../../context/AuthContext";

export const SideMenu = ({ setShow }) => {
  const { user } = useAuthContext();
  return (
    <div className="md:hidden z-10 fixed w-1/2 top-0 right-0 h-full bg-background2 text-text2 shadow-lg py-7 px-5 flex flex-col gap-10 ">
      <Button onClick={setShow}>
        <ArrowRightFromLine size={18} />
      </Button>

      <HeaderItems className="flex flex-col h-full" isLogged={user} />
    </div>
  );
};
