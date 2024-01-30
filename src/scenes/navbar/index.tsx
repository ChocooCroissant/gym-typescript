import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import Link from "./Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useState } from "react";
import ActionButton from "@/shared/ActionButton";

type Props = {
    isTopOfPage: boolean;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
}

const Navbar = ({isTopOfPage ,selectedPage, setSelectedPage}: Props) => {
    
    const flexBetween = "flex items-center justify-between";
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
    const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow";

    
    

  return (
    <nav>
        <div className={`${navbarBackground} ${flexBetween} drop-shadow fixed top-0 z-30 w-full py-6`}>
            <div className={`${flexBetween} mx-auto w-5/6`}>
                <div className={`${flexBetween} w-full gap-16`}>
                    {/* LEFT SIDE  */}
                    <img src={Logo} alt="logo" />

                    {/* RIGHT SIDE */}
                    {isAboveMediumScreens ? (
                        <div className={`${flexBetween} w-full`}>
                            <div className={`${flexBetween} text-sm gap-8`}>
                                <Link 
                                    page="Home" 
                                    setSelectedPage={setSelectedPage} 
                                    selectedPage={selectedPage}
                                />
                                <Link 
                                    page="Benefits" 
                                    setSelectedPage={setSelectedPage} 
                                    selectedPage={selectedPage}
                                />
                                <Link 
                                    page="Our Classes" 
                                    setSelectedPage={setSelectedPage} 
                                    selectedPage={selectedPage}
                                />
                                <Link 
                                    page="Contact us" 
                                    setSelectedPage={setSelectedPage} 
                                    selectedPage={selectedPage}
                                />
                            </div>
                            <div className={`${flexBetween} gap-8`}>
                                <p>Sign up</p>
                                <ActionButton
                                    setSelectedPage={setSelectedPage}
                                >
                                    Become a Member
                                </ActionButton>
                            </div> 
                        </div>) 
                    : (
                        <div>
                            <button
                                className=" rounded-full bg-secondary-500 p-2"
                                onClick={ () => setIsMenuToggled(!isMenuToggled)}
                            >
                                <Bars3Icon className=" h-6 w-6 text-white"/>
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
        {/* Mobile Modal Menu */}
        {!isAboveMediumScreens && isMenuToggled && (
            <div className=" fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
                {/* Close Icon */}
                <div className=" flex justify-end p-12">
                    <button
                        className=""
                        onClick={ () => setIsMenuToggled(!isMenuToggled)}
                    >
                        <XMarkIcon className=" h-6 w-6 text-gray-400"/>
                    </button>
                </div>

                <div className=" ml-[33%] flex flex-col gap-10 text-2xl">
                    <Link 
                        page="Home" 
                        setSelectedPage={setSelectedPage} 
                        selectedPage={selectedPage}
                    />
                    <Link 
                        page="Benefits" 
                        setSelectedPage={setSelectedPage} 
                        selectedPage={selectedPage}
                    />
                    <Link 
                        page="Our Classes" 
                        setSelectedPage={setSelectedPage} 
                        selectedPage={selectedPage}
                    />
                    <Link 
                        page="Contact us" 
                        setSelectedPage={setSelectedPage} 
                        selectedPage={selectedPage}
                    />                                
                </div>
            </div>
        )}
    </nav>
)}

export default Navbar;