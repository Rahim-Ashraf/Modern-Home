

const Contact = () => {
    return (

        <div className="p-10">
            <p className="text-4xl font-bold text-center my-4">Contact Us</p>
            <div className="card shadow-2xl bg-base-100">
                <div className="card-body">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="Email" placeholder="Email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Comments</span>
                        </label>
                        <textarea className="textarea border border-gray-300" placeholder="Comments"></textarea>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Submit</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Contact;