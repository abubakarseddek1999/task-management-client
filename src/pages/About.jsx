// AboutPage.jsx
import React from 'react';

const About = () => {
    return (
        <div className="about-page">
            <header className="about-header">
                <h1 className="text-4xl font-bold text-white">About SCC Technovision Inc.</h1>
                <p className=" text-center my-10 text-xl font-bold ">
                    Empowering Teams, Enhancing Productivity
                </p>
            </header>

            <section className="about-content">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="about-image">
                            {/* Add your company image or illustration here */}
                            <img src="https://i.postimg.cc/s2m3rxKt/modern-equipped-computer-lab.jpg" alt="Company" />
                        </div>

                        <div className="about-text p-2">
                            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                            <p className="text-gray-700">
                                SCC Technovision Inc. is on a mission to revolutionize task management. We believe
                                in creating innovative solutions that empower teams to collaborate seamlessly,
                                achieve their goals, and enhance overall productivity.
                            </p>

                            <h2 className="text-2xl font-bold mt-8 mb-4">Why Choose Us?</h2>
                            <ul className="list-disc pl-6 text-gray-700">
                                <li>Intuitive and user-friendly task management platform.</li>
                                <li>Designed to meet the unique needs of developers, professionals, and more.</li>
                                <li>Advanced features for efficient collaboration and project organization.</li>
                                <li>Focus on security and reliability for peace of mind.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about-team bg-gray-100 py-12">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold mb-6">Meet Our Team</h2>

                    <div data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000" className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Add team member cards here */}
                        <div className="team-member">
                            <img src="https://i.postimg.cc/6QWyRDPx/young-businessman-with-clipboard.jpg" alt="Team Member 1" className="rounded-full" />
                            <h3 className="text-xl text-center font-semibold mt-4">John Doe</h3>
                            <p className="text-gray-600 text-center">Co-Founder & CEO</p>
                        </div>

                        <div data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000" className="team-member">
                            <img src="https://i.postimg.cc/BbQgVYbr/close-up-happy-executive.jpg" alt="Team Member 2" className="rounded-full" />
                            <h3 className="text-xl text-center font-semibold mt-4">Jane Smith</h3>
                            <p className="text-gray-600 text-center">Lead Developer</p>
                        </div>

                        <div data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000" className="team-member">
                            <img src="https://i.postimg.cc/m2nwmSsn/cheerful-indian-businessman-smiling-closeup-portrait-jobs-career-campaign.jpg" alt="Team Member 3" className="rounded-full" />
                            <h3 className="text-xl text-center font-semibold mt-4">Alex Johnson</h3>
                            <p className="text-gray-600 text-center">Product Designer</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
