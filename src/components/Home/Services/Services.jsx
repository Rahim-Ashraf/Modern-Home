

const Services = () => {
    return (
        <div className="hero bg-base-200 my-10 rounded-lg">
            <div className="md:flex gap-8 p-4">
                <div className="md:w-1/2">
                    <img src="https://i.ibb.co/C0gnjvy/slide2.jpg" className="rounded-lg shadow-2xl" />
                </div>
                <div>
                    <h1 className="text-5xl font-bold">Our Services</h1>
                    <ul className="py-6">
                        <li className="list-disc ml-8">Single-family house</li>
                        <li className="list-disc ml-8">student housing</li>
                        <li className="list-disc ml-8">vacation rentals</li>
                        <li className="list-disc ml-8">senior living communities</li>
                        <li className="list-disc ml-8">townhouses</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Services;