


const DashboardItems = ({item}) => {
    const { background_image, title, price } = item;
    return (
        <div className="flex space-x-5">
            <div>
                <img src={background_image} className="w-72 h-44" alt={title} />
            </div>
            <div className="py-16 space-y-3 text-left">
                <h1 className="text-lg font-semibold"> Title: {title}</h1>
                <h1 className="text-lg font-semibold">Price: ${price}</h1>
            </div>
        </div>
    );
};

export default DashboardItems;