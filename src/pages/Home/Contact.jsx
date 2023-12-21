

const Contact = () => {
    return (
        <div className=" bg-blue-950">

            <div className="flex justify-center items-center">
                <div className="flex flex-col md:flex-row rounded p-10 ">
                    <div className="md:w-3/4">
                        <h2 className="text-xl text-white text-center md:text-3xl lg:text-4xl font-bold">Do you have any question? <br /> Feel free to contact.</h2>

                        <p className="text-center text-white my-5">Bring your valuable task, time, manage your any idea. We will happy to serve our best to you.</p>

                    </div>
                    <div className=" flex justify-center items-center md:w-1/4">
                        <button className="btn text-white font-bold hover:shadow-lg hover:bg-slate-300" style={{ background: 'linear-gradient(to right, #922d80, #0073e6)' }}>
                            CONTACT WITH US
                        </button>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Contact;