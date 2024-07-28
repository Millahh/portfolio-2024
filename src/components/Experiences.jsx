/* eslint-disable no-undef */
import { motion, AnimatePresence } from "framer-motion";
import P from "./texts/Paragraph";
import Navbar from "./Navbar";
import { Internship1, Internship2, Internship3, Bem1, Bem2, Bem3, poros, Ipcree1, Ipcree2, pk21, pk22, pk23, lkmmtd1, lkmmtd2 } from "../assets";

const Experiences = () => {
    return (
        <>
            <Navbar/>
            <div className="experiences py-3 px-20 max-lg:px-10 w-full h-screen 2xl:w-1/2 m-auto overflow-y-auto overflow-x-hidden">
                <section className="mb-auto">
                    <div className="sm:flex flex-row relative">
                        <div className="basis-1/4 h-44 max-sm:flex max-sm:space-x-5 max-xs:space-x-0">
                            <AnimatePresence>
                                <motion.div className="z-0 sm:absolute w-1/4 max-lg:w-1/3 max-xs:hidden"
                                initial={{ opacity: 0, x:50 }}
                                animate={{ opacity: 1, x:0 }}
                                transition={{ delay:0.2, type: "tween", duration: 0.2 }}
                                >
                                    <img src={Internship3} className="object-cover h-40 w-11/12 max-lg:w-full border-2 border-white rounded-xl"/>
                                </motion.div>
                                <motion.div className="-z-1 top-2 left-3 sm:absolute w-1/4 max-lg:w-1/3 max-xs:hidden"
                                initial={{ opacity: 0, x:50 }}
                                animate={{ opacity: 1, x:0 }}
                                transition={{ delay:0.5, type: "tween", duration: 0.2 }}
                                >
                                    <img src={Internship2} className="object-cover h-40 w-11/12 max-lg:w-full border-2 border-white rounded-xl"/>
                                </motion.div>
                                <motion.div className="-z-2 top-4 left-6 sm:absolute w-1/4 max-lg:w-1/3 max-xs:w-full"
                                initial={{ opacity: 0, x:50 }}
                                animate={{ opacity: 1, x:0 }}
                                transition={{ delay:0.7, type: "tween", duration: 0.2 }}
                                >
                                    <img src={Internship1} className="object-cover  h-40 w-11/12 max-lg:w-full border-2 border-white rounded-xl"/>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                        <div className="basis-3/4 p-5 pl-10 max-lg:pl-28 max-sm:p-0 max-sm:text-center">
                            <p className=" tracking-widest text-xs opacity-50">INTERNSHIP | 2022</p>
                            <p className=" text-xl font-bold text-primary bg-white bg-opacity-90 inline-block px-1 pt-1 my-1">Fullstack Developer at PT. Andromedia</p>
                            <p className=" text-base">This internship is a part of Program Magang dan Studi Independen<br></br> Bersertifikat (MSIB) Batch 3.</p>
                        </div>
                    </div>
                    <div className="sm:flex flex-row relative">
                        <div className="basis-3/4 w-screen p-5 pr-10 max-lg:pr-16 max-sm:pl-0">
                            <p className=" tracking-widest text-xs opacity-50">HARD SKILLS</p>
                            <li>Built <P>Issue Ticket Website</P> using <P>adminLTE</P>, <P>Laravel</P>, and <P>PostgreSQL</P>.</li>
                            <li>Continued development <P>Kelava CRM</P> Project using special company’s <P>CMS</P> with <P>AngularJS</P>, <P>Yii1</P>, and <P>Rapid Application Development (RAD)</P> as a development method.</li>
                            <li>Developed the <P>front-end</P> of <P>CRP Web Project</P> with <P>RAD</P> approach.</li>
                            <li>Evaluated and redesigned <P>Mobile Warehouse Application</P> using <P>Figma</P> and <P>Maze</P> to meet client usability requirements.</li>
                        </div>
                        <div className="basis-1/4 align-middle max-sm:space-x-5 max-sm:hidden">
                            <AnimatePresence>
                                <motion.div className="z-0 sm:absolute right-0 w-1/4 max-lg:w-1/3"
                                initial={{ opacity: 0, x:-50 }}
                                animate={{ opacity: 1, x:0 }}
                                transition={{ delay:1, type: "tween", duration: 0.2 }}
                                >
                                    <img src={Internship3} className="object-cover w-11/12 h-40 max-lg:w-full border-2 border-white rounded-xl"/>
                                </motion.div>
                                <motion.div className="-z-1 top-2 right-3 max-lg:right-2 sm:absolute w-1/4 max-lg:w-1/3"
                                initial={{ opacity: 0, x:-50 }}
                                animate={{ opacity: 1, x:0 }}
                                transition={{ delay:1.2, type: "tween", duration: 0.2 }}
                                >
                                    <img src={Internship1} className="object-cover w-11/12 h-40 max-lg:w-full border-2 border-white rounded-xl"/>
                                </motion.div>
                                <motion.div className="-z-2 top-4 right-6 max-lg:right-4 sm:absolute w-1/4 max-lg:w-1/3"
                                initial={{ opacity: 0, x:-50 }}
                                animate={{ opacity: 1, x:0 }}
                                transition={{ delay:1.4, type: "tween", duration: 0.2 }}
                                >
                                    <img src={Internship2} className="object-cover w-11/12 h-40 max-lg:w-full border-2 border-white rounded-xl"/>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                    <div className="sm:flex flex-row relative">
                        <div className="basis-1/4 max-lg:basis-1/3 max-sm:hidden max-sm:space-x-5">
                            <AnimatePresence>
                                <motion.div className="z-0 sm:absolute w-1/4 max-lg:w-1/3"
                                initial={{ opacity: 0, x:50 }}
                                animate={{ opacity: 1, x:0 }}
                                transition={{ delay:0.2, type: "tween", duration: 0.2 }}
                                >
                                    <img src={Internship2} className="object-cover w-11/12 max-lg:w-full h-40 border-2 border-white rounded-xl"/>
                                </motion.div>
                                <motion.div className="-z-1 top-2 left-3 sm:absolute w-1/4 max-lg:w-1/3"
                                initial={{ opacity: 0, x:50 }}
                                animate={{ opacity: 1, x:0 }}
                                transition={{ delay:0.5, type: "tween", duration: 0.2 }}
                                >
                                    <img src={Internship1} className="object-cover w-11/12 h-40 max-lg:w-full border-2 border-white rounded-xl"/>
                                </motion.div>
                                <motion.div className="-z-2 top-4 left-6 sm:absolute w-1/4 max-lg:w-1/3"
                                initial={{ opacity: 0, x:50 }}
                                animate={{ opacity: 1, x:0 }}
                                transition={{ delay:0.7, type: "tween", duration: 0.2 }}
                                >
                                    <img src={Internship3} className="object-cover w-11/12 h-40 max-lg:w-full border-2 border-white rounded-xl"/>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                        <div className="basis-3/4 p-5 pl-10 max-lg:pl-20 max-sm:p-0">
                            <p className=" tracking-widest text-xs opacity-50">SOFT SKILLS</p>
                            <p className=" text-base">I also took the opportunity and responsibility to be part of <P>Tribe Leader</P>, help communication <br></br>between the company and MSIB to help effective collaboration.</p>
                        </div>
                    </div>
                </section>
                <hr className=" mt-24 mb-10 max-sm:mt-6"></hr>
                <section className="mb-auto">
                    <div className="sm:flex flex-row relative">
                        <div className="basis-1/4 h-44 max-lg:basis-1/3 max-sm:flex max-sm:space-x-5 max-xs:space-x-0">
                            <AnimatePresence>
                                <motion.div className="z-0 sm:absolute w-1/4 max-lg:w-1/3 max-sm:hidden"
                                initial={{ opacity: 0, x:50 }}
                                animate={{ opacity: 1, x:0 }}
                                transition={{ delay:0.2, type: "tween", duration: 0.2 }}
                                >
                                    <img src={Bem1} className="object-cover w-11/12 h-40 max-lg:w-full border-2 border-white rounded-xl"/>
                                </motion.div>
                                <motion.div className="-z-1 top-2 left-3 sm:absolute w-1/4 max-lg:w-1/3 max-sm:hidden"
                                initial={{ opacity: 0, x:50 }}
                                animate={{ opacity: 1, x:0 }}
                                transition={{ delay:0.5, type: "tween", duration: 0.2 }}
                                >
                                    <img src={Bem3} className="object-cover w-11/12 h-40 max-lg:w-full border-2 border-white rounded-xl"/>
                                </motion.div>
                                <motion.div className="-z-2 top-4 left-6 sm:absolute w-1/4 max-lg:w-1/3 max-sm:w-full"
                                initial={{ opacity: 0, x:50 }}
                                animate={{ opacity: 1, x:0 }}
                                transition={{ delay:0.7, type: "tween", duration: 0.2 }}
                                >
                                    <img src={Bem2} className="object-cover w-11/12 h-40 max-lg:w-full border-2 border-white rounded-xl"/>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                        <div className="basis-3/4 p-5 pl-10 max-lg:pl-20 max-sm:p-0 max-sm:text-center">
                            <p className=" tracking-widest text-xs opacity-50">ORGANIZATION | 2021</p>
                            <p className=" text-xl font-bold text-primary bg-white bg-opacity-90 inline-block px-1 pt-1 my-1">Expert Staff of Information and Technology <br></br>Development (PIT)</p>
                            <p className=" text-base">PIT is a part of Student Executive Board (BEM) Divisions of Fakultas Ilmu Komputer</p>
                        </div>
                    </div>
                    <div className="sm:flex flex-row relative">
                        <div className="basis-3/4 max-lg:basis-8/12 w-screen pl-5 pt-10 max-lg:pt-5 pr-10 max-sm:pl-0 h-40">
                            <p className=" tracking-widest text-xs opacity-50">HARD SKILLS</p>
                            <p><P>Designed</P> the Elaborasi Makna website (<P>bemfilkom.ub.ac.id</P>), creating an engaging interface that effectively showcased the organization's mission, events, and activities.</p>
                        </div>
                        <div className="basis-1/4 max-lg:basis-1/3 max-sm:hidden max-sm:space-x-5">
                            <AnimatePresence>
                                <motion.div className="z-0 sm:absolute w-1/4 max-lg:w-1/3"
                                initial={{ opacity: 0, x:-50 }}
                                animate={{ opacity: 1, x:0 }}
                                transition={{ delay:1, type: "tween", duration: 0.2 }}
                                >
                                    <img src={Bem1} className="object-cover w-11/12 h-40 max-lg:w-full border-2 border-white rounded-xl"/>
                                </motion.div>
                                <motion.div className="-z-1 top-2 right-3 sm:absolute w-1/4 max-lg:w-1/3"
                                initial={{ opacity: 0, x:-50 }}
                                animate={{ opacity: 1, x:0 }}
                                transition={{ delay:1.2, type: "tween", duration: 0.2 }}
                                >
                                    <img src={Bem2} className="object-cover w-11/12 h-40 max-lg:w-full border-2 border-white rounded-xl"/>
                                </motion.div>
                                <motion.div className="-z-2 top-4 right-6 sm:absolute w-1/4 max-lg:w-1/3"
                                initial={{ opacity: 0, x:-50 }}
                                animate={{ opacity: 1, x:0 }}
                                transition={{ delay:1.4, type: "tween", duration: 0.2 }}
                                >
                                    <img src={Bem3} className="object-cover w-11/12 h-40 max-lg:w-full border-2 border-white rounded-xl"/>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                    <div className="sm:flex flex-row relative">
                        <div className="basis-1/4 max-lg:basis-1/3 max-sm:hidden max-sm:space-x-5">
                            <AnimatePresence>
                                <motion.div className="z-0 sm:absolute w-1/4 max-lg:w-1/3"
                                initial={{ opacity: 0, x:50 }}
                                animate={{ opacity: 1, x:0 }}
                                transition={{ delay:0.2, type: "tween", duration: 0.2 }}
                                >
                                    <img src={Bem2} className="object-cover w-11/12 h-40 max-lg:w-full border-2 border-white rounded-xl"/>
                                </motion.div>
                                <motion.div className="-z-1 top-2 left-3 sm:absolute w-1/4 max-lg:w-1/3"
                                initial={{ opacity: 0, x:50 }}
                                animate={{ opacity: 1, x:0 }}
                                transition={{ delay:0.5, type: "tween", duration: 0.2 }}
                                >
                                    <img src={Bem3} className="object-cover w-11/12 h-40 max-lg:w-full border-2 border-white rounded-xl"/>
                                </motion.div>
                                <motion.div className="-z-2 top-4 left-6 sm:absolute w-1/4 max-lg:w-1/3"
                                initial={{ opacity: 0, x:50 }}
                                animate={{ opacity: 1, x:0 }}
                                transition={{ delay:0.7, type: "tween", duration: 0.2 }}
                                >
                                    <img src={Bem1} className="object-cover w-11/12 h-40 max-lg:w-full border-2 border-white rounded-xl"/>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                        <div className="basis-3/4 py-7 pl-10 pr-20 max-lg:pl-20 max-sm:p-0">
                            <p className=" tracking-widest text-xs opacity-50">SOFT SKILLS</p>
                            <p className=" text-base">Supported a team of 3 members as a PIT <P>Mentor for PIT Staff</P>. This experience allowed me to <P>share</P> my knowledge and <P>learn</P> from the diverse perspectives and ideas of my mentees.</p>
                        </div>
                    </div>
                </section>
                <hr className=" mt-24 mb-10 max-sm:mt-5"></hr>
                <section className="mb-auto space-y-5">
                    <div className="sm:flex flex-row sm:relative mt-10">
                        <div className="basis-1/4 h-36 max-lg:basis-1/3">
                            <AnimatePresence>
                                <motion.div className="z-0 sm:absolute w-1/4 max-lg:w-1/3 max-sm:w-full max-sm:m-auto"
                                initial={{ opacity: 0, x:50 }}
                                animate={{ opacity: 1, x:0 }}
                                transition={{ delay:0.2, type: "tween", duration: 0.2 }}
                                >
                                    <img src={poros} className="object-cover w-full h-44 border-2 border-white rounded-xl"/>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                        <div className="basis-3/4 p-3 pl-10 text-center max-sm:mt-10 max-sm:p-0">
                            <p className=" tracking-widest text-xs opacity-50 pt-1">ORGANIZATION | 2021</p>
                            <p className=" text-xl font-bold text-primary bg-white bg-opacity-90 inline-block px-1 pt-1 my-1">Public Relations Staff of Organization of <br></br>Open Source (POROS)</p>
                        </div>
                    </div>
                    <div className="sm:flex flex-row pt-10 max-sm:p-0">
                        <div className="basis-1/2 pr-20 max-sm:p-0">
                            <p className=" tracking-widest text-xs opacity-50">HARD SKILLS</p>
                            <p>Created posts design and maintained an official instagram account of POROS  to enhance our online presence(@porosfilkom).</p>
                        </div>
                        <div className="basis-1/2 pr-20 max-sm:mt-2 max-sm:p-0">
                            <p className=" tracking-widest text-xs opacity-50">SOFT SKILLS</p>
                            <p>Took responsibility as Vice Chief Committee and Master of Ceremonies at the 'Cyber Class 2020' event.</p>
                        </div>
                    </div>
                    <hr className=" my-10 sm:hidden"></hr>
                    <div className="sm:flex flex-row sm:relative">
                        <div className="basis-3/4 w-screen max-sm:w-full sm:pr-10 text-right max-lg:basis-2/3">
                            <p className=" tracking-widest text-xs opacity-50 max-sm:text-center">VOLUNTEER | 2021</p>
                            <p className=" text-xl font-bold text-primary bg-white bg-opacity-90 inline-block px-1 pt-1 my-1 max-sm:text-center">Website Builder Staff of Indonesian Petroleum Community Russian and Eastern European (IPCREE)</p>
                            <p className=" tracking-widest text-xs opacity-50 pt-2 max-sm:hidden">HARD SKILLS</p>
                            <p className="max-sm:hidden"><P>Developed website</P> of IPCREE with <P>WordPress</P> (ipcree.com) and took responsibility for <P>writing</P> one of the <P>press releases</P> for the National Energy Week event.</p>
                        </div>
                        <div className="basis-1/4 max-lg:basis-1/3 my-3">
                            <AnimatePresence>
                                <motion.div className="z-0 sm:absolute w-1/4 max-lg:w-1/3 max-sm:w-full max-sm:m-auto"
                                initial={{ opacity: 0, x:-50 }}
                                animate={{ opacity: 1, x:0 }}
                                transition={{ delay:1, type: "tween", duration: 0.2 }}
                                >
                                    <img src={Ipcree2} className="object-cover w-full h-44 border-2 border-white rounded-xl "/>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                        <p className=" tracking-widest text-xs opacity-50 pt-2 sm:hidden">HARD SKILLS</p>
                        <p className="sm:hidden"><P>Developed website</P> of IPCREE with <P>WordPress</P> (ipcree.com) and took responsibility for <P>writing</P> one of the <P>press releases</P> for the National Energy Week event.</p>
                    </div>
                </section>
                <hr className=" my-10"></hr>
                <section className="mb-auto space-y-5">
                    <div className="text-center">
                        <p className="text-xl font-bold text-primary bg-white bg-opacity-90 inline-block px-1 pt-1 my-1">PK2MABA & STARTUP ACADEMY</p>
                        <p>Annual campus event welcomes new students, introducing and providing essential information to help kickstart their journey.</p>
                    </div>
                    <div className="flex justify-between space-x-5 max-xs:space-x-0">
                        <div>
                            <img src={pk21} className="object-cover h-48 max-lg:h-40 max-lg:w-56 border-2 border-white rounded-xl max-xs:hidden"/>
                        </div>
                        <div>
                            <img src={pk23} className="object-cover h-48 max-lg:h-40 max-lg:w-56 border-2 border-white rounded-xl max-xs:w-full max-xs:h-full"/>
                        </div>
                        <div>
                            <img src={pk22} className="object-cover h-48 max-lg:h-40 max-lg:w-56 border-2 border-white rounded-xl max-xs:hidden"/>
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
                <section className=" h-4/5 mb-auto space-y-8 max-xs:mb-52">
                    <div className="sm:flex flex-row">
                        <div className="basis-1/4 max-lg:basis-1/3">
                            <img src={lkmmtd1} className=" object-cover object-left-top h-44 border-2 border-white rounded-xl max-sm:m-auto max-xs:w-full"/>
                        </div>
                        <div className="basis-3/4 p-5 pl-10 max-sm:p-0 max-sm:text-center">
                            <p className=" tracking-widest text-xs opacity-50 pt-2">VOLUNTEER | 2021</p>
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