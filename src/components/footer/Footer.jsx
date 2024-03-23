import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-[#1A1919] text-white pt-32 pb-10">
            <div className="footer container mx-auto pb-12">
                <aside>
                    <h2 className="font-extrabold text-3xl pb-3">CareerHub</h2>
                    <p className="leading-6">There are many variations of passages <br /> of Lorem Ipsum , but the majority have <br /> suffered alteration in some form.</p>
                    <ul className="pt-4 flex items-center gap-7">
                        <li className="p-2 rounded-full bg-white">
                            <Link>
                                <FaFacebookF color="#337FFF" size={'20px'} />
                            </Link>
                        </li>
                        <li className="p-2 rounded-full bg-white">
                            <Link>
                                <FaTwitter color="#33CCFF" size={'20px'} />
                            </Link>
                        </li>
                        <li className="p-2 rounded-full bg-white">
                            <Link>
                                <FaInstagram color="#F75274" size={'20px'} />
                            </Link>
                        </li>
                    </ul>
                </aside>
                <nav className="text-[#ffffffB3]">
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About Us</a>
                    <a className="link link-hover">Work</a>
                    <a className="link link-hover">Latest News</a>
                    <a className="link link-hover">Careers</a>
                </nav>
                <nav className="text-[#ffffffB3]">
                    <h6 className="footer-title">Product</h6>
                    <a className="link link-hover">Prototype</a>
                    <a className="link link-hover">Plans & Pricing</a>
                    <a className="link link-hover">Customers</a>
                    <a className="link link-hover">Integrations</a>
                </nav>
                <nav className="text-[#ffffffB3]">
                    <h6 className="footer-title">Support</h6>
                    <a className="link link-hover">Help Desk</a>
                    <a className="link link-hover">Sales</a>
                    <a className="link link-hover">Become a Partner</a>
                    <a className="link link-hover">Developers</a>
                </nav>
                <nav className="text-[#ffffffB3]">
                    <h6 className="footer-title">Contact</h6>
                    <a className="link link-hover">524 Broadway , NYC</a>
                    <a className="link link-hover">+1 777 - 978 - 5570</a>
                </nav>
            </div>
            <div className="flex items-center justify-between container mx-auto pt-12 border-t-2 text-[#ffffff50] text-sm">
                <aside className="items-center grid-flow-col">
                    <p>@2023 CareerHub. All Rights Reserved</p>
                </aside>
                <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                    <p>Powered by <span className="font-bold">CareerHub</span></p>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;