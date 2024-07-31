import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer>

            <div className="w-full pt-[64px] bg-[#ECF5FF]">
                <div className="container mx-auto px-5 flex flex-wrap gap-5 justify-between">
                    <div className="">
                        <img src="/logo.png" className="h-[80px]" alt="" />
                        <p className="mt-4 font-inter text-base font-medium leading-6 text-[#475467] max-w-[320px]">Design amazing degital experiences that create more happy in the world</p>
                    </div>
                    <div className="flex flex-wrap gap-5">
                        <div className="min-w-[140px]">
                            <h3 className="text-sm font-semibold font-inter text-[#667085]">Product</h3>
                            <ul>
                                <li className="text-base font-inter font-semibold text-[#475467] mt-3">Overview</li>
                                <li className="text-base font-inter font-semibold text-[#475467] mt-3">Features</li>
                                <li className="text-base font-inter font-semibold text-[#475467] mt-3">Solutions</li>
                                <li className="text-base font-inter font-semibold text-[#475467] mt-3">Tutorials</li>
                                <li className="text-base font-inter font-semibold text-[#475467] mt-3">Pricing</li>
                                <li className="text-base font-inter font-semibold text-[#475467] mt-3">Releases</li>
                            </ul>
                        </div>
                        <div className="min-w-[140px]">
                            <h3 className="text-sm font-semibold font-inter text-[#667085]">Company</h3>
                            <ul>
                                <li className="text-base font-inter font-semibold text-[#475467] mt-3">About Us</li>
                                <li className="text-base font-inter font-semibold text-[#475467] mt-3">Carrers</li>
                                <li className="text-base font-inter font-semibold text-[#475467] mt-3">Press</li>
                                <li className="text-base font-inter font-semibold text-[#475467] mt-3">News</li>
                                <li className="text-base font-inter font-semibold text-[#475467] mt-3">Media Kit</li>
                                <li className="text-base font-inter font-semibold text-[#475467] mt-3">Contact</li>
                            </ul>
                        </div>
                        <div className="min-w-[140px]">
                            <h3 className="text-sm font-semibold font-inter text-[#667085]">Recources</h3>
                            <ul>
                                <li className="text-base font-inter font-semibold text-[#475467] mt-3">Blog</li>
                                <li className="text-base font-inter font-semibold text-[#475467] mt-3">Newsletter</li>
                                <li className="text-base font-inter font-semibold text-[#475467] mt-3">Events</li>
                                <li className="text-base font-inter font-semibold text-[#475467] mt-3">Help center</li>
                                <li className="text-base font-inter font-semibold text-[#475467] mt-3">Tutorials</li>
                                <li className="text-base font-inter font-semibold text-[#475467] mt-3">Support</li>
                            </ul>
                        </div>
                        <div className="min-w-[140px]">
                            <h3 className="text-sm font-semibold font-inter text-[#667085]">Social</h3>
                            <ul>
                                <li className="text-base font-inter font-semibold text-[#475467] mt-3">Twitter</li>
                                <li className="text-base font-inter font-semibold text-[#475467] mt-3">Linkedin</li>
                                <li className="text-base font-inter font-semibold text-[#475467] mt-3">Facebook</li>
                                <li className="text-base font-inter font-semibold text-[#475467] mt-3">Github</li>
                                <li className="text-base font-inter font-semibold text-[#475467] mt-3">Angellist</li>
                                <li className="text-base font-inter font-semibold text-[#475467] mt-3">Dribble</li>
                            </ul>
                        </div>
                        <div className="min-w-[140px]">
                            <h3 className="text-sm font-semibold font-inter text-[#667085]">Legal</h3>
                            <ul>
                                <li className="text-base font-inter font-semibold text-[#475467] mt-3">Terms</li>
                                <li className="text-base font-inter font-semibold text-[#475467] mt-3">Privacy</li>
                                <li className="text-base font-inter font-semibold text-[#475467] mt-3">Cookies</li>
                                <li className="text-base font-inter font-semibold text-[#475467] mt-3">Licenses</li>
                                <li className="text-base font-inter font-semibold text-[#475467] mt-3">Settings</li>
                                <li className="text-base font-inter font-semibold text-[#475467] mt-3">Contact</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="border border-blue-100 mt-[64px] w-full col-span-7 container mx-auto" />
            </div>
            <div className="bg-[#ECF5FF]">
                <div className="flex justify-between px-5 container mx-auto py-10 flex-wrap text-center">
                    <div>
                        <p>&copy;2024 Heritage-Nest : All rights reserved.</p>
                    </div>
                    <div className="text-[#0059B1] flex gap-6 mx-auto md:mx-0">
                        <FaTwitter />
                        <FaLinkedinIn />
                        <FaFacebook />
                        <FaInstagram />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;