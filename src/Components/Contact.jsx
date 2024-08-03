import { CONTACT } from "../constants/index";

const Contact = () => {
return (
    <div className="border-b border-neutral-700 pb-20">
    <h2 className="text-center my-10 text-3xl text-green-200 font-thin tracking-wide">Get in Touch!</h2>
    <div className="text-center tracking-tighter">
        <p className="my-4">{CONTACT.address}</p>
        <p className="my-4">{CONTACT.phoneNo}</p>
        <a className="border-b">{CONTACT.email}</a>
    </div>
    </div>
)
}

export default Contact;
