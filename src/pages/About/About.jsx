import about from "../../assets/Banner/about.jpg";
import logo from "../../assets/Card imge/Event socio.png";

const About = () => {
    return (
        <div>
            <h1 className="text-7xl font-bold font-lobster text-center mt-20 text-blue-800 animate-bounce">About Us</h1>
            <div className="mt-16">
                <img src={about} alt="" />
            </div>
            <div>
                <h1 className="font-bold text-4xl font-lobster my-6">Know about <span className="text-5xl text-blue-700">Event Socio</span> Company.</h1>
                <h3 className="font-roboto text-2xl text-center mb-16"><i>Our company is a business that specializes in planning, organizing, and executing a wide range of social events, gatherings, and celebrations. These companies work closely with clients to ensure that their events run smoothly and meet their unique needs and expectations. </i></h3>
            </div>
            <div className="h-96 p-10 bg-slate-900">
                <img className="text-center animate-bounce" height={250} width={250} src={logo} alt="" />
                <p className="text-white font-roboto text-xl">Social event management companies offer a variety of services to assist clients in hosting successful events. These services may include event planning, venue selection, budget management, event design and decor, catering, entertainment booking, guest list management, logistics coordination, and more.</p>

                <button className="bg-red-600 text-white font-bold text-4xl mt-16 px-6 py-3 rounded-lg hover:bg-black">MORE ABOUT US</button>
            </div>
        </div>
    );
};

export default About;