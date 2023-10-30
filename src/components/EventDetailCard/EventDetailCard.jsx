

const EventDetailCard = ({ events }) => {

    const { name, description, banner_url, title, gallery1, gallery2, gallery3, gallery4 } = events;


    return (
        <div className="relative">
            <div className="relative">
                <img className="motion-safe:animate-pulse" src={banner_url} alt="" />
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
                <div>
                    <h1 className="animate-bounce text-center absolute text-6xl fon-bold text-white left-24 bottom-[420px] font-lobster">{title}</h1>
                </div>

            </div>
            <div className="text-center mt-10 font-lobster">
                <h1 className="text-5xl font-bold text-blue-800 animate-bounce">Service Details</h1>
                <p className="mt-3 text-3xl font-bold">{description}</p>
            </div>

            <h1 className="font-bold text-5xl font-lobster text-center mt-10 animate-bounce text-blue-800 mb-10">Instagram Feed</h1>
            <div className="grid grid-cols-2 gap-5">
                 <div className="hover:scale-110 duration-200"><img src= {gallery1} className="rounded-xl" alt="" /></div>
                 <div className="hover:scale-110 duration-200"><img src={gallery2} className="rounded-xl" alt="" /></div>
                 <div className="hover:scale-110 duration-200"><img src={gallery3} className="rounded-xl" alt="" /></div>
                 <div className="hover:scale-110 duration-200"><img src={gallery4} className="rounded-xl" alt="" /></div>
            </div>
        </div>
    );
};

export default EventDetailCard;