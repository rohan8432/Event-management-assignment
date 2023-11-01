import { Link } from "react-router-dom";


const EventCard = ({ event }) => {


    const {id, name, price, image_url, Card_bg_Color, Category_bg_Color } = event;

    const nameStyle = {
        backgroundColor: Category_bg_Color,
    }

    const cardStyle = {
        backgroundColor: Card_bg_Color,
    };
    return (
        <div>
            <Link to={`/event/${id}`}>

                <div style={cardStyle} className="card bg-base-100 transition ease-in-out delay-120  hover:-translate-y-1 hover:scale-110 duration-250 mt-5 lg:mt-12 md:mt-10">
                    <figure>
                        <img className="" src={image_url} alt="" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title"></h2>
                        <p className="text-2xl font-bold p-1 rounded-md" style={nameStyle}>{name}</p>
                        <div className="card-actions">

                            <p className="text-3xl font-bold text-purple-700 font-lobster">Price: ${price}</p>
                        </div>
                    </div>
                </div>
            </Link>


        </div>
    );
};

export default EventCard;