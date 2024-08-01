import React, { useContext } from "react";
import {
    Navbar,
    MobileNav,
    Typography,
    IconButton,
} from "@material-tailwind/react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../authentication/AuthProvider";

const Menubar = () => {
    const { user, userData, loading, handleLogOut } = useContext(AuthContext)
    const [openNav, setOpenNav] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);

    const navList = (
        <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <NavLink to={'/'}>
                    <p className="flex items-center text-black text-lg mt-2 font-inter hover:text-blue-500 duration-200 cursor-pointer border-b-2 border-transparent hover:border-blue-500 pb-1">
                        Home
                    </p>
                </NavLink>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <NavLink to={'/about'}>
                    <p className="flex items-center text-black text-lg mt-2 font-inter hover:text-blue-500 duration-200 cursor-pointer border-b-2 border-transparent hover:border-blue-500 pb-1">
                        About
                    </p>
                </NavLink>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <NavLink to={'/buy'}>
                    <p className="flex items-center text-black text-lg mt-2 font-inter hover:text-blue-500 duration-200 cursor-pointer border-b-2 border-transparent hover:border-blue-500 pb-1">
                        Buy
                    </p>
                </NavLink>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <NavLink to={'/'}>
                    <p className="flex items-center text-black text-lg mt-2 font-inter hover:text-blue-500 duration-200 cursor-pointer border-b-2 border-transparent hover:border-blue-500 pb-1">
                        Sell
                    </p>
                </NavLink>
            </Typography>

        </ul>
    );

    return (
        <div>
            <div className="h-[100px] w-full bg-[#ECF5FF] z-[20]">
                <Navbar className="fixed menubar w-full h-[100px] px-0 top-[0px] bg-[#ECF5FF] left-[50%] -translate-x-1/2 z-10 backdrop-saturate-30 bg-opacity-100 rounded-none backdrop-blur-1 max-w-screen  border-none shadow-none border">
                    <div className="container mx-auto px-5">
                        <div className="flex items-center justify-between text-blue-gray-900 px-5">
                            <div className="block lg:hidden">
                                <Typography
                                    as="span"
                                    href="/"
                                    className="mr-4 cursor-pointer py-1.5 font-medium"
                                >
                                    <img className="h-[60px]" src="/logo.png" alt="" />
                                </Typography>
                            </div>
                            <div>
                                <div className="mr-4  hidden lg:block">{navList}</div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="hidden lg:block">
                                    <Typography
                                        as="span"
                                        href="/"
                                        className="mr-4 cursor-pointer py-1.5 font-medium"
                                    >
                                        <img className="h-[60px]" src="/logo.png" alt="" />
                                    </Typography>
                                </div>

                                <IconButton
                                    variant="text"
                                    className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                                    ripple={false}
                                    onClick={() => setOpenNav(!openNav)}
                                >
                                    {openNav ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            className="h-6 w-6"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4 6h16M4 12h16M4 18h16"
                                            />
                                        </svg>
                                    )}
                                </IconButton>
                            </div>
                            <div className="items-center gap-x-1 hidden lg:flex">
                                <NavLink to={'/manage'}>
                                    <p className="flex mr-5 items-center text-black text-lg mt-2 font-inter hover:text-blue-500 duration-200 cursor-pointer border-b-2 border-transparent hover:border-blue-500 pb-1">
                                        Manage Bids
                                    </p>
                                </NavLink>
                                {
                                    user ?
                                        <div className="flex justify-center items-center gap-3">
                                            <img className="h-10 w-10 rounded-full p-1 border-2 object-cover border-blue-300"
                                                src={typeof (userData.displayName) == "string" ? userData.photoURL : `https://static.vecteezy.com/system/resources/thumbnails/008/442/086/small_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg`}
                                                alt="User" />
                                            <button
                                                className="lg:inline-block hidden text-[#0059B1] px-[25px] rounded-[8px] py-[10px] bg-[#C5E2FF]"
                                                onClick={() => handleLogOut()}
                                            >
                                                Sign Out
                                            </button>
                                        </div>
                                        :
                                        <Link to={'/signin'}>
                                            <button
                                                className="lg:inline-block hidden text-[#0059B1] px-[25px] rounded-[8px] py-[10px] bg-[#C5E2FF] hover:bg-blue-200 duration-200"
                                            >
                                                Sign In
                                            </button>
                                        </Link>
                                }
                            </div>
                        </div>
                        <MobileNav className="-mt-3" open={openNav}>
                            <div className="bg-[#ECF5FF] z-[100] w-full px-5">
                                {navList}
                                <NavLink to={'/manage'}>
                                    <p className="flex items-center text-black text-lg mt-2 font-inter hover:text-blue-500 duration-200 cursor-pointer border-b-2 border-transparent hover:border-blue-500 pb-1">
                                        Manage Bids
                                    </p>
                                </NavLink>
                                {
                                    !loading && user ?
                                        <div className="flex gap-5 flex-col mb-5">
                                            <img className="h-10 w-10 rounded-full p-1 border-2 object-cover border-blue-300" src={userData.photoURL !== null ? userData.photoURL : "https://static.vecteezy.com/system/resources/thumbnails/008/442/086/small_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg"} alt="User" />
                                            <button
                                                className="inline-block lg:hidden mb-5 text-[#0059B1] px-[25px] rounded-[8px] py-[10px] bg-[#C5E2FF]"
                                            >
                                                Sign Out
                                            </button>
                                        </div>
                                        :
                                        <Link to={'/signin'}>
                                            <button
                                                className="inline-block lg:hidden mb-5 text-[#0059B1] px-[25px] rounded-[8px] py-[10px] bg-[#C5E2FF] hover:bg-blue-200 duration-200"
                                            >
                                                Sign In
                                            </button>
                                        </Link>
                                }
                            </div>
                        </MobileNav>
                    </div>
                </Navbar>
            </div>
        </div>
    );
};

export default Menubar;