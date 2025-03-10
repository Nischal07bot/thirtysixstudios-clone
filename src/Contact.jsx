import { Link } from "react-router-dom";

const Contact = () => {
    return (
        <section className="w-full h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
            <h2 className="text-4xl font-bold">Contact Us</h2>
            <p className="text-lg mt-4">Reach out to us for inquiries.</p>
            <Link to="/" className="mt-6 text-blue-500 hover:underline">Go Back to Home</Link>
        </section>
    );
};

export default Contact;
