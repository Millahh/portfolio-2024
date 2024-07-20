/* eslint-disable no-undef */
import { motion, AnimatePresence } from "framer-motion";
import P from "./texts/Paragraph";
import Navbar from "./Navbar";

const Experiences = () => {
    return (
        <>
            <Navbar/>
            <div className="experiences py-3 px-20 min-w-full h-screen overflow-y-auto">
                <section className="h-full mb-auto">
                    <div className="flex flex-row relative h-1/3">
                        <div className="basis-1/4">
                            <AnimatePresence>
                                <motion.div className="z-0 absolute w-1/4"
                                initial={{ opacity: 0, x:50 }}
                                animate={{ opacity: 1, x:0 }}
                                transition={{ delay:0.2, type: "tween", duration: 0.2 }}
                                >
                                    <img src="./experiences/image.png" className="cover w-11/12 border-2 border-white rounded-xl"/>
                                </motion.div>
                                <motion.div className="-z-1 top-2 left-3 absolute w-1/4"
                                initial={{ opacity: 0, x:50 }}
                                animate={{ opacity: 1, x:0 }}
                                transition={{ delay:0.5, type: "tween", duration: 0.2 }}
                                >
                                    <img src="./experiences/image.png" className="cover w-11/12 border-2 border-white rounded-xl"/>
                                </motion.div>
                                <motion.div className="-z-2 top-4 left-6 absolute w-1/4"
                                initial={{ opacity: 0, x:50 }}
                                animate={{ opacity: 1, x:0 }}
                                transition={{ delay:0.7, type: "tween", duration: 0.2 }}
                                >
                                    <img src="./experiences/image.png" className="cover w-11/12 border-2 border-white rounded-xl"/>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                        <div className="basis-3/4 p-5 pl-10">
                            <p className=" tracking-widest text-xs opacity-50">INTERNSHIP | 2022</p>
                            <p className=" text-xl font-bold text-primary bg-white bg-opacity-90 inline-block px-1 pt-1 my-1">Fullstack Developer at PT. Andromedia</p>
                            <p className=" text-base">This internship is a part of Program Magang dan Studi Independen<br></br> Bersertifikat (MSIB) Batch 3.</p>
                        </div>
                    </div>
                    <div className="flex flex-row relative h-2/5">
                        <div className="basis-3/4 w-screen p-5 pr-10">
                            <p className=" tracking-widest text-xs opacity-50">HARD SKILLS</p>
                            <li>Built <P>Issue Ticket Website</P> using <P>adminLTE</P>, <P>Laravel</P>, and <P>PostgreSQL</P>.</li>
                            <li>Continued development <P>Kelava CRM</P> Project using special company’s <P>CMS</P> with <P>AngularJS</P>, <P>Yii1</P>, and <P>Rapid Application Development (RAD)</P> as a development method.</li>
                            <li>Developed the <P>front-end</P> of <P>CRP Web Project</P> with <P>RAD</P> approach.</li>
                            <li>Evaluated and redesigned <P>Mobile Warehouse Application</P> using <P>Figma</P> and <P>Maze</P> to meet client usability requirements.</li>
                        </div>
                        <div className="basis-1/4 align-middle">
                            <AnimatePresence>
                                <motion.div className="z-0 absolute w-1/4"
                                initial={{ opacity: 0, x:-50 }}
                                animate={{ opacity: 1, x:0 }}
                                transition={{ delay:1, type: "tween", duration: 0.2 }}
                                >
                                    <img src="./experiences/image.png" className="cover w-11/12 border-2 border-white rounded-xl"/>
                                </motion.div>
                                <motion.div className="-z-1 top-2 right-3 absolute w-1/4"
                                initial={{ opacity: 0, x:-50 }}
                                animate={{ opacity: 1, x:0 }}
                                transition={{ delay:1.2, type: "tween", duration: 0.2 }}
                                >
                                    <img src="./experiences/image.png" className="cover w-11/12 border-2 border-white rounded-xl"/>
                                </motion.div>
                                <motion.div className="-z-2 top-4 right-6 absolute w-1/4"
                                initial={{ opacity: 0, x:-50 }}
                                animate={{ opacity: 1, x:0 }}
                                transition={{ delay:1.4, type: "tween", duration: 0.2 }}
                                >
                                    <img src="./experiences/image.png" className="cover w-11/12 border-2 border-white rounded-xl"/>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                    <div className="flex flex-row relative h-1/3">
                        <div className="basis-1/4">
                            <AnimatePresence>
                                <motion.div className="z-0 absolute w-1/4"
                                initial={{ opacity: 0, x:50 }}
                                animate={{ opacity: 1, x:0 }}
                                transition={{ delay:0.2, type: "tween", duration: 0.2 }}
                                >
                                    <img src="./experiences/image.png" className="cover w-11/12 border-2 border-white rounded-xl"/>
                                </motion.div>
                                <motion.div className="-z-1 top-2 left-3 absolute w-1/4"
                                initial={{ opacity: 0, x:50 }}
                                animate={{ opacity: 1, x:0 }}
                                transition={{ delay:0.5, type: "tween", duration: 0.2 }}
                                >
                                    <img src="./experiences/image.png" className="cover w-11/12 border-2 border-white rounded-xl"/>
                                </motion.div>
                                <motion.div className="-z-2 top-4 left-6 absolute w-1/4"
                                initial={{ opacity: 0, x:50 }}
                                animate={{ opacity: 1, x:0 }}
                                transition={{ delay:0.7, type: "tween", duration: 0.2 }}
                                >
                                    <img src="./experiences/image.png" className="cover w-11/12 border-2 border-white rounded-xl"/>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                        <div className="basis-3/4 p-5 pl-10">
                            <p className=" tracking-widest text-xs opacity-50">SOFT SKILLS</p>
                            <p className=" text-base">I also took the opportunity and responsibility to be part of <P>Tribe Leader</P>, help communication <br></br>between the company and MSIB to help effective collaboration.</p>
                        </div>
                    </div>
                </section>
                <hr className=" my-14"></hr>
                <section className="h-full mb-auto">
                    <div className="flex flex-row relative h-1/3">
                        <div className="basis-1/4">
                            <AnimatePresence>
                                <motion.div className="z-0 absolute w-1/4"
                                initial={{ opacity: 0, x:50 }}
                                animate={{ opacity: 1, x:0 }}
                                transition={{ delay:0.2, type: "tween", duration: 0.2 }}
                                >
                                    <img src="./experiences/image.png" className="cover w-11/12 border-2 border-white rounded-xl"/>
                                </motion.div>
                                <motion.div className="-z-1 top-2 left-3 absolute w-1/4"
                                initial={{ opacity: 0, x:50 }}
                                animate={{ opacity: 1, x:0 }}
                                transition={{ delay:0.5, type: "tween", duration: 0.2 }}
                                >
                                    <img src="./experiences/image.png" className="cover w-11/12 border-2 border-white rounded-xl"/>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                        <div className="basis-3/4 p-5 pl-10">
                            <p className=" tracking-widest text-xs opacity-50">ORGANIZATION | 2021</p>
                            <p className=" text-xl font-bold text-primary bg-white bg-opacity-90 inline-block px-1 pt-1 my-1">Expert Staff of Information and Technology <br></br>Development (PIT)</p>
                            <p className=" text-base">PIT is a part of Student Executive Board (BEM) Divisions of <br></br>Fakultas Ilmu Komputer</p>
                        </div>
                    </div>
                    <div className="flex flex-row relative h-1/3">
                        <div className="basis-3/4 w-screen p-5 pr-10">
                            <p className=" tracking-widest text-xs opacity-50">HARD SKILLS</p>
                            <p><P>Designed</P> the Elaborasi Makna website (<P>bemfilkom.ub.ac.id</P>), creating an engaging interface that effectively showcased the organization's mission, events, and activities.</p>
                        </div>
                        <div className="basis-1/4">
                            <AnimatePresence>
                                <motion.div className="z-0 absolute w-1/4"
                                initial={{ opacity: 0, x:-50 }}
                                animate={{ opacity: 1, x:0 }}
                                transition={{ delay:1, type: "tween", duration: 0.2 }}
                                >
                                    <img src="./experiences/image.png" className="cover w-11/12 border-2 border-white rounded-xl"/>
                                </motion.div>
                                <motion.div className="-z-1 top-2 right-3 absolute w-1/4"
                                initial={{ opacity: 0, x:-50 }}
                                animate={{ opacity: 1, x:0 }}
                                transition={{ delay:1.2, type: "tween", duration: 0.2 }}
                                >
                                    <img src="./experiences/image.png" className="cover w-11/12 border-2 border-white rounded-xl"/>
                                </motion.div>
                                <motion.div className="-z-2 top-4 right-6 absolute w-1/4"
                                initial={{ opacity: 0, x:-50 }}
                                animate={{ opacity: 1, x:0 }}
                                transition={{ delay:1.4, type: "tween", duration: 0.2 }}
                                >
                                    <img src="./experiences/image.png" className="cover w-11/12 border-2 border-white rounded-xl"/>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                    <div className="flex flex-row relative h-1/3">
                        <div className="basis-1/4">
                            <AnimatePresence>
                                <motion.div className="z-0 absolute w-1/4"
                                initial={{ opacity: 0, x:50 }}
                                animate={{ opacity: 1, x:0 }}
                                transition={{ delay:0.2, type: "tween", duration: 0.2 }}
                                >
                                    <img src="./experiences/image.png" className="cover w-11/12 border-2 border-white rounded-xl"/>
                                </motion.div>
                                <motion.div className="-z-1 top-2 left-3 absolute w-1/4"
                                initial={{ opacity: 0, x:50 }}
                                animate={{ opacity: 1, x:0 }}
                                transition={{ delay:0.5, type: "tween", duration: 0.2 }}
                                >
                                    <img src="./experiences/image.png" className="cover w-11/12 border-2 border-white rounded-xl"/>
                                </motion.div>
                                <motion.div className="-z-2 top-4 left-6 absolute w-1/4"
                                initial={{ opacity: 0, x:50 }}
                                animate={{ opacity: 1, x:0 }}
                                transition={{ delay:0.7, type: "tween", duration: 0.2 }}
                                >
                                    <img src="./experiences/image.png" className="cover w-11/12 border-2 border-white rounded-xl"/>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                        <div className="basis-3/4 py-5 pl-10 pr-20">
                            <p className=" tracking-widest text-xs opacity-50">SOFT SKILLS</p>
                            <p className=" text-base">Supported a team of 3 members as a PIT <P>Mentor for PIT Staff</P>. This experience allowed me to <P>share</P> my knowledge and <P>learn</P> from the diverse perspectives and ideas of my mentees.</p>
                        </div>
                    </div>
                </section>
                <hr className=" my-10"></hr>
                <section className="h-full mb-auto">
                    <div className="flex flex-row relative h-1/3 mt-10">
                        <div className="basis-1/4">
                            <AnimatePresence>
                                <motion.div className="z-0 absolute w-1/4"
                                initial={{ opacity: 0, x:50 }}
                                animate={{ opacity: 1, x:0 }}
                                transition={{ delay:0.2, type: "tween", duration: 0.2 }}
                                >
                                    <img src="./experiences/image.png" className="cover w-11/12 border-2 border-white rounded-xl"/>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                        <div className="basis-3/4 p-3 pl-10">
                            <p className=" tracking-widest text-xs opacity-50">ORGANIZATION | 2021</p>
                            <p className=" text-xl font-bold text-primary bg-white bg-opacity-90 inline-block px-1 pt-1 my-1">Public Relations Staff of Organization of <br></br>Open Source (POROS)</p>
                        </div>
                    </div>
                    <div className="flex flex-row h-1/4">
                        <div className="basis-1/2 pr-20">
                            <p className=" tracking-widest text-xs opacity-50">HARD SKILLS</p>
                            <p>Created posts design and maintained an official instagram account of POROS  to enhance our online presence(@porosfilkom).</p>
                        </div>
                        <div className="basis-1/2 pr-20">
                            <p className=" tracking-widest text-xs opacity-50">SOFT SKILLS</p>
                            <p>Took responsibility as Vice Chief Committee and Master of Ceremonies at the 'Cyber Class 2020' event.</p>
                        </div>
                    </div>
                    <div className="flex flex-row relative h-1/3">
                        <div className="basis-3/4 w-screen pr-10 text-right">
                            <p className=" tracking-widest text-xs opacity-50">VOLUNTEER | 2021</p>
                            <p className=" text-xl font-bold text-primary bg-white bg-opacity-90 inline-block px-1 pt-1 my-1">Public Relations Staff of Organization of <br></br>Open Source (POROS)</p>
                            <p className=" tracking-widest text-xs opacity-50">HARD SKILLS</p>
                            <p><P>Developed website</P> of IPCREE with <P>WordPress</P> (ipcree.com) and took responsibility for <P>writing</P> one of the <P>press releases</P> for the National Energy Week event.</p>
                        </div>
                        <div className="basis-1/4">
                            <AnimatePresence>
                                <motion.div className="z-0 absolute w-1/4"
                                initial={{ opacity: 0, x:-50 }}
                                animate={{ opacity: 1, x:0 }}
                                transition={{ delay:1, type: "tween", duration: 0.2 }}
                                >
                                    <img src="./experiences/image.png" className="cover w-11/12 border-2 border-white rounded-xl"/>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </section>
                <hr className=" my-10"></hr>
                <section className="mb-auto space-y-8">
                    <div className="text-center">
                        <p className="text-xl font-bold text-primary bg-white bg-opacity-90 inline-block px-1 pt-1 my-1">PK2MABA & STARTUP ACADEMY</p>
                        <p>Annual campus event welcomes new students, introducing and providing essential information to help kickstart their journey.</p>
                    </div>
                    <div className="flex flex-row">
                        <div className=" basis-auto">
                            <img src="./experiences/image.png" className="cover w-11/12 border-2 border-white rounded-xl"/>
                        </div>
                        <div className="basis-auto">
                            <img src="./experiences/image.png" className="cover w-11/12 border-2 border-white rounded-xl"/>
                        </div>
                        <div className="basis-auto">
                            <img src="./experiences/image.png" className="cover w-11/12 border-2 border-white rounded-xl"/>
                        </div>
                    </div>
                    <div>
                        <p className=" tracking-widest text-xs opacity-50">SOFT SKILLS</p>
                        <p className=" text-base font-bold text-primary bg-white bg-opacity-90 inline-block px-1 pt-1 mt-1">Staff of Event Division | 2021</p>
                        <li><P>Collaborated</P> with the <P>team</P> in <P>organizing</P> and <P>managing events</P> such as PK2MABA, Startup Academy, Inspiration Class, Fusion, and Open House.</li>
                        <li><P>Best staff</P> and <P>person in charge</P> of a series of Fusion events.</li>

                        <p className=" text-base font-bold text-primary bg-white bg-opacity-90 inline-block px-1 pt-1 mt-3 mb-1">Staff of Companion Division | 2020</p>
                        <p>Supported <P>35</P> students, <P>building bonds</P> among students and <P>distributing information</P> about PK2MABA & Startup Academy events and lecture-related matters.</p>

                        <p className=" text-base font-bold text-primary bg-white bg-opacity-90 inline-block px-1 pt-1 mt-3 mb-1">Speaker of Program Kreatifitas Mahasiswa Baru (PKM) | 2020</p>
                        <p>PKM is a national scientific writing competition, I <P>mentored</P> and <P>facilitated 35</P> students, <P>delivering material</P> about PKM and how to <P>make good presentations</P>.</p>
                    </div>
                </section>
                <hr className=" my-10"></hr>
                <section className=" h-4/5 mb-auto space-y-8">
                    <div className="flex flex-row">
                        <div className="basis-1/4">
                            <img src="./experiences/image.png" className="cover w-11/12 border-2 border-white rounded-xl"/>
                        </div>
                        <div className="basis-3/4 p-5 pl-10">
                            <p className=" tracking-widest text-xs opacity-50">VOLUNTEER | 2021</p>
                            <p className=" text-xl font-bold text-primary bg-white bg-opacity-90 inline-block px-1 pt-1 my-1">Head of Event Division at LKMM-TD</p>
                            <p className=" text-base">LKMM-TD is Latihan Keterampilan Manajemen Mahasiswa Tingkat Dasar to provide knowledge and managerial skills to be a good leader.</p>
                        </div>
                    </div>
                    <div>
                        <p className=" tracking-widest text-xs opacity-50">SOFT SKILLS</p>
                        <li><P>Promoting</P> the event to new students at Startup Academy Event resulted in <P>doubling the participant numbers</P> from the previous year.</li>
                        <li><P>Collaborated</P> with the <P>team</P> in preparing and controlling LKMM-TD activities.</li>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Experiences