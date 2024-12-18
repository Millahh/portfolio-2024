/* eslint-disable no-undef */
import { motion, AnimatePresence } from "framer-motion";
import P from "./texts/Paragraph";
import { variants } from "../constants";
import { Internship1, Internship2, Internship3, Bem1, Bem2, Bem3, poros, Ipcree1, Ipcree2, pk21, pk22, pk23, lkmmtd1, lkmmtd2 } from "../assets";

const Experiences = () => {
    return (
        <>
        <motion.div
            initial="hidden"
            animate="visible"
            variants={variants}
            layoutScroll="false">
            <div className="experiences max-[1280px]:pb-3 max-[1280px]:pt-20 max-[1280px]:px-20 max-lg:px-10 w-full h-screen m-auto overflow-y-auto overflow-x-hidden absolute z-20">
                <section className="mb-auto">
                    <div className="sm:flex flex-row relative">
                        <div className="experiences-card basis-1/4 max-[1280px]:h-44 max-sm:flex max-sm:space-x-5 max-xs:space-x-0">
                            <AnimatePresence>
                                <motion.div className="z-0 sm:absolute w-1/4 max-lg:w-1/3 max-xs:hidden"
                                initial={{ opacity: 0, x:50 }}
                                whileInView={{ opacity: 1, x:0 }}
                                transition={{ delay:0.1, type: "tween", duration: 0.2 }}
                                >
                                    <img src={Internship3} className="object-cover max-[1280px]:h-40 w-11/12 max-lg:w-full border-2 border-white rounded-xl"/>
                                </motion.div>
                                <motion.div className="-z-1 top-2 left-3 sm:absolute w-1/4 max-lg:w-1/3 max-xs:hidden"
                                initial={{ opacity: 0, x:50 }}
                                whileInView={{ opacity: 1, x:0 }}
                                transition={{ delay:0.3, type: "tween", duration: 0.2 }}
                                >
                                    <img src={Internship2} className="object-cover max-[1280px]:h-40 w-11/12 max-lg:w-full border-2 border-white rounded-xl"/>
                                </motion.div>
                                <motion.div className="-z-2 top-4 left-6 sm:absolute w-1/4 max-lg:w-1/3 max-xs:w-full"
                                initial={{ opacity: 0, x:50 }}
                                whileInView={{ opacity: 1, x:0 }}
                                transition={{ delay:0.5, type: "tween", duration: 0.2 }}
                                >
                                    <img src={Internship1} className="object-cover max-[1280px]:h-40 w-11/12 max-lg:w-full border-2 border-white rounded-xl"/>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                        <div className="basis-3/4 p-5 pl-10 max-lg:pl-28 max-sm:p-0 max-sm:text-center">
                            <p className=" tracking-widest max-[1280px]:text-xs opacity-50 description">INTERNSHIP | 2022</p>
                            <p className=" max-[1280px]:text-xl text-h4 font-bold text-primary bg-white bg-opacity-90 inline-block px-1 pt-1 my-1">Fullstack Developer at PT. Andromedia</p>
                            <p className=" max-[1280px]:text-base description">This internship is a part of Program Magang dan Studi Independen<br></br> Bersertifikat (MSIB) Batch 3.</p>
                        </div>
                    </div>
                    <div className="sm:flex flex-row relative">
                        <div className="basis-3/4 w-screen p-5 pr-10 max-lg:pr-16 max-sm:pl-0">
                            <p className=" tracking-widest max-[1280px]:text-xs opacity-50 description">HARD SKILLS</p>
                            <li className="max-[1280px]:text-base description">Built <a href="https://github.com/Millahh/IssueTicketWeb" target="_blank" className="inline-block underline underline-offset-4 hover:text-primary"><P>Issue Ticket Website</P></a> using <P>adminLTE</P>, <P>Laravel</P>, and <P>PostgreSQL</P>.</li>
                            <li className="max-[1280px]:text-base description">Continued development <a href="https://kelava.id/" target="_blank" className="inline-block underline underline-offset-4 hover:text-primary"><P>Kelava CRM</P></a> Project using special company’s <P>CMS</P> with <P>AngularJS</P>, <P>Yii1</P>, and <P>Rapid Application Development (RAD)</P> as a development method.</li>
                            <li className="max-[1280px]:text-base description">Developed the <P>front-end</P> of <P>CRP Web Project</P> with <P>RAD</P> approach.</li>
                            <li className="max-[1280px]:text-base description">Evaluated and redesigned <P>Mobile Warehouse Application</P> using <P>Figma</P> and <P>Maze</P> to meet client usability requirements.</li>
                        </div>
                        <div className="experiences-card basis-1/4 align-middle max-sm:space-x-5 max-sm:hidden">
                            <AnimatePresence>
                                <motion.div className="z-0 sm:absolute right-0 w-1/4 max-lg:w-1/3"
                                initial={{ opacity: 0, x:-50 }}
                                whileInView={{ opacity: 1, x:0 }}
                                transition={{ delay:1, type: "tween", duration: 0.2 }}
                                >
                                    <img src={Internship3} className="object-cover w-11/12 max-[1280px]:h-40 max-lg:w-full border-2 border-white rounded-xl"/>
                                </motion.div>
                                <motion.div className="-z-1 top-2 right-3 max-lg:right-2 sm:absolute w-1/4 max-lg:w-1/3"
                                initial={{ opacity: 0, x:-50 }}
                                whileInView={{ opacity: 1, x:0 }}
                                transition={{ delay:1.2, type: "tween", duration: 0.2 }}
                                >
                                    <img src={Internship1} className="object-cover w-11/12 max-[1280px]:h-40 max-lg:w-full border-2 border-white rounded-xl"/>
                                </motion.div>
                                <motion.div className="-z-2 top-4 right-6 max-lg:right-4 sm:absolute w-1/4 max-lg:w-1/3"
                                initial={{ opacity: 0, x:-50 }}
                                whileInView={{ opacity: 1, x:0 }}
                                transition={{ delay:1.4, type: "tween", duration: 0.2 }}
                                >
                                    <img src={Internship2} className="object-cover w-11/12 max-[1280px]:h-40 max-lg:w-full border-2 border-white rounded-xl"/>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                    <div className="sm:flex flex-row relative">
                        <div className="experiences-card basis-1/4 max-lg:basis-1/3 max-sm:hidden max-sm:space-x-5">
                            <AnimatePresence>
                                <motion.div className="z-0 sm:absolute w-1/4 max-lg:w-1/3"
                                initial={{ opacity: 0, x:50 }}
                                whileInView={{ opacity: 1, x:0 }}
                                transition={{ delay:1.5, type: "tween", duration: 0.2 }}
                                >
                                    <img src={Internship2} className="object-cover w-11/12 max-lg:w-full max-[1280px]:h-40 border-2 border-white rounded-xl"/>
                                </motion.div>
                                <motion.div className="-z-1 top-2 left-3 sm:absolute w-1/4 max-lg:w-1/3"
                                initial={{ opacity: 0, x:50 }}
                                whileInView={{ opacity: 1, x:0 }}
                                transition={{ delay:1.7, type: "tween", duration: 0.2 }}
                                >
                                    <img src={Internship1} className="object-cover w-11/12 max-[1280px]:h-40 max-lg:w-full border-2 border-white rounded-xl"/>
                                </motion.div>
                                <motion.div className="-z-2 top-4 left-6 sm:absolute w-1/4 max-lg:w-1/3"
                                initial={{ opacity: 0, x:50 }}
                                whileInView={{ opacity: 1, x:0 }}
                                transition={{ delay:2, type: "tween", duration: 0.2 }}
                                >
                                    <img src={Internship3} className="object-cover w-11/12 max-[1280px]:h-40 max-lg:w-full border-2 border-white rounded-xl"/>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                        <div className="basis-3/4 p-5 pl-10 max-lg:pl-20 max-sm:p-0">
                            <p className=" tracking-widest max-[1280px]:text-xs description opacity-50">SOFT SKILLS</p>
                            <p className=" max-[1280px]:text-base description">I also took the opportunity and responsibility to be part of <P>Tribe-leader</P>, help communication <br></br>between the company and MSIB to help effective collaboration.</p>
                        </div>
                    </div>
                </section>
                <hr className=" mt-24 mb-10 max-sm:mt-6"></hr>
                <section className="mb-auto">
                    <div className="sm:flex flex-row relative">
                        <div className="experiences-card basis-1/4 max-[1280px]:h-44 max-lg:basis-1/3 max-sm:flex max-sm:space-x-5 max-xs:space-x-0">
                            <AnimatePresence>
                                <motion.div className="z-0 sm:absolute w-1/4 max-lg:w-1/3 max-sm:hidden"
                                initial={{ opacity: 0, x:50 }}
                                whileInView={{ opacity: 1, x:0 }}
                                transition={{ delay:0.2, type: "tween", duration: 0.2 }}
                                >
                                    <img src={Bem1} className="object-cover w-11/12 max-[1280px]:h-40 max-lg:w-full border-2 border-white rounded-xl"/>
                                </motion.div>
                                <motion.div className="-z-1 top-2 left-3 sm:absolute w-1/4 max-lg:w-1/3 max-sm:hidden"
                                initial={{ opacity: 0, x:50 }}
                                whileInView={{ opacity: 1, x:0 }}
                                transition={{ delay:0.5, type: "tween", duration: 0.2 }}
                                >
                                    <img src={Bem3} className="object-cover w-11/12 max-[1280px]:h-40 max-lg:w-full border-2 border-white rounded-xl"/>
                                </motion.div>
                                <motion.div className="-z-2 top-4 left-6 sm:absolute w-1/4 max-lg:w-1/3 max-sm:w-full"
                                initial={{ opacity: 0, x:50 }}
                                whileInView={{ opacity: 1, x:0 }}
                                transition={{ delay:0.7, type: "tween", duration: 0.2 }}
                                >
                                    <img src={Bem2} className="object-cover w-11/12 max-[1280px]:h-40 max-lg:w-full border-2 border-white rounded-xl"/>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                        <div className="basis-3/4 p-5 pl-10 max-lg:pl-20 max-sm:p-0 max-sm:text-center">
                            <p className=" tracking-widest max-[1280px]:text-xs description opacity-50">ORGANIZATION | 2021</p>
                            <p className=" max-[1280px]:text-xl text-h4 font-bold text-primary bg-white bg-opacity-90 inline-block px-1 pt-1 my-1">Expert Staff of Information and Technology <br></br>Development (PIT)</p>
                            <p className=" max-[1280px]:text-base description">PIT is a part of Student Executive Board (BEM) Divisions of Fakultas Ilmu Komputer</p>
                        </div>
                    </div>
                    <div className="sm:flex flex-row relative">
                        <div className="basis-3/4 max-lg:basis-8/12 w-screen pl-5 pt-10 max-lg:pt-5 pr-10 max-sm:pl-0 h-40">
                            <p className=" tracking-widest max-[1280px]:text-xs description opacity-50">HARD SKILLS</p>
                            <p className="inline-block max-[1280px]:text-base description"><P>Designed</P> the Elaborasi Makna website <a href="https://bemfilkom.ub.ac.id/2020/#/" target="_blank" className="inline-block underline underline-offset-4 hover:text-primary"><P>bemfilkom.ub.ac.id</P></a>, creating an engaging interface that effectively showcased the organization&apos;s mission, events, and activities.</p>
                        </div>
                        <div className="experiences-card basis-1/4 max-lg:basis-1/3 max-sm:hidden max-sm:space-x-5">
                            <AnimatePresence>
                                <motion.div className="z-0 sm:absolute w-1/4 max-lg:w-1/3"
                                initial={{ opacity: 0, x:-50 }}
                                whileInView={{ opacity: 1, x:0 }}
                                transition={{ delay:1, type: "tween", duration: 0.2 }}
                                >
                                    <img src={Bem1} className="object-cover w-11/12 max-[1280px]:h-40 max-lg:w-full border-2 border-white rounded-xl"/>
                                </motion.div>
                                <motion.div className="-z-1 top-2 right-3 sm:absolute w-1/4 max-lg:w-1/3"
                                initial={{ opacity: 0, x:-50 }}
                                whileInView={{ opacity: 1, x:0 }}
                                transition={{ delay:1.2, type: "tween", duration: 0.2 }}
                                >
                                    <img src={Bem2} className="object-cover w-11/12 max-[1280px]:h-40 max-lg:w-full border-2 border-white rounded-xl"/>
                                </motion.div>
                                <motion.div className="-z-2 top-4 right-6 sm:absolute w-1/4 max-lg:w-1/3"
                                initial={{ opacity: 0, x:-50 }}
                                whileInView={{ opacity: 1, x:0 }}
                                transition={{ delay:1.4, type: "tween", duration: 0.2 }}
                                >
                                    <img src={Bem3} className="object-cover w-11/12 max-[1280px]:h-40 max-lg:w-full border-2 border-white rounded-xl"/>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                    <div className="sm:flex flex-row relative">
                        <div className="experiences-card basis-1/4 max-lg:basis-1/3 max-sm:hidden max-sm:space-x-5">
                            <AnimatePresence>
                                <motion.div className="z-0 sm:absolute w-1/4 max-lg:w-1/3"
                                initial={{ opacity: 0, x:50 }}
                                whileInView={{ opacity: 1, x:0 }}
                                transition={{ delay:1.6, type: "tween", duration: 0.2 }}
                                >
                                    <img src={Bem2} className="object-cover w-11/12 max-[1280px]:h-40 max-lg:w-full border-2 border-white rounded-xl"/>
                                </motion.div>
                                <motion.div className="-z-1 top-2 left-3 sm:absolute w-1/4 max-lg:w-1/3"
                                initial={{ opacity: 0, x:50 }}
                                whileInView={{ opacity: 1, x:0 }}
                                transition={{ delay:1.8, type: "tween", duration: 0.2 }}
                                >
                                    <img src={Bem3} className="object-cover w-11/12 max-[1280px]:h-40 max-lg:w-full border-2 border-white rounded-xl"/>
                                </motion.div>
                                <motion.div className="-z-2 top-4 left-6 sm:absolute w-1/4 max-lg:w-1/3"
                                initial={{ opacity: 0, x:50 }}
                                whileInView={{ opacity: 1, x:0 }}
                                transition={{ delay:2, type: "tween", duration: 0.2 }}
                                >
                                    <img src={Bem1} className="object-cover w-11/12 max-[1280px]:h-40 max-lg:w-full border-2 border-white rounded-xl"/>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                        <div className="basis-3/4 py-7 pl-10 pr-20 max-lg:pl-20 max-sm:p-0">
                            <p className=" tracking-widest max-[1280px]:text-xs description opacity-50">SOFT SKILLS</p>
                            <p className=" max-[1280px]:text-base description">Supported a team of 3 members as a PIT <P>Mentor for PIT Staff</P>. This experience allowed me to <P>share</P> my knowledge and <P>learn</P> from the diverse perspectives and ideas of my mentees.</p>
                        </div>
                    </div>
                </section>
                <hr className=" mt-24 mb-10 max-sm:mt-5"></hr>
                <section className="mb-auto space-y-5">
                    <div className="sm:flex flex-row sm:relative mt-10">
                        <div className="experiences-card2 basis-1/4 max-[1280px]:h-36 max-lg:basis-1/3">
                            <AnimatePresence>
                                <motion.div className="z-0 sm:absolute w-1/4 max-lg:w-1/3 max-sm:w-full max-sm:m-auto"
                                initial={{ opacity: 0, x:50 }}
                                whileInView={{ opacity: 1, x:0 }}
                                transition={{ delay:0.2, type: "tween", duration: 0.2 }}
                                >
                                    <img src={poros} className="object-cover w-full max-[1280px]:h-44 border-2 border-white rounded-xl"/>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                        <div className="basis-3/4 p-3 pl-10 max-sm:text-center max-sm:mt-10 max-sm:p-0">
                            <p className=" tracking-widest max-[1280px]:text-xs description opacity-50 pt-1">ORGANIZATION | 2021</p>
                            <p className=" max-[1280px]:text-xl text-h4 font-bold text-primary bg-white bg-opacity-90 inline-block px-1 pt-1 my-1">Public Relations Staff of Organization of <br></br>Open Source (POROS)</p>
                        </div>
                    </div>
                    <div className="sm:flex flex-row pt-10 max-sm:p-0">
                        <div className="basis-1/2 pr-20 max-sm:p-0">
                            <p className=" tracking-widest max-[1280px]:text-xs description opacity-50">HARD SKILLS</p>
                            <p className="max-[1280px]:text-base description">Created posts design and maintained an official instagram account of POROS  to enhance our online presence <a href="https://www.instagram.com/porosfilkom/" target="_blank" className="inline-block underline underline-offset-4 hover:text-primary">@porosfilkom</a>.</p>
                        </div>
                        <div className="basis-1/2 pr-20 max-sm:mt-2 max-sm:p-0">
                            <p className=" tracking-widest max-[1280px]:text-xs description opacity-50">SOFT SKILLS</p>
                            <p className="max-[1280px]:text-base description">Took responsibility as Vice Chief Committee and Master of Ceremonies at the 'Cyber Class 2020' event.</p>
                        </div>
                    </div>
                    <hr className=" my-10 sm:hidden"></hr>
                    <div className="sm:flex flex-row sm:relative">
                        <div className="basis-3/4 w-screen max-sm:w-full sm:pr-10 text-right max-lg:basis-2/3">
                            <p className=" tracking-widest max-[1280px]:text-xs description opacity-50 max-sm:text-center">VOLUNTEER | 2021</p>
                            <p className=" max-[1280px]:text-xl text-h4 font-bold text-primary bg-white bg-opacity-90 inline-block px-1 pt-1 my-1 max-sm:text-center">Website Builder Staff of Indonesian Petroleum Community Russian and Eastern European (IPCREE)</p>
                            <p className=" tracking-widest max-[1280px]:text-xs description opacity-50 pt-2 max-sm:hidden">HARD SKILLS</p>
                            <p className="max-sm:hidden max-[1280px]:text-base description"><P>Developed website</P> of IPCREE with <P>WordPress</P> (ipcree.com) and took responsibility for <P>writing</P> one of the <P>press releases</P> for the National Energy Week event.</p>
                        </div>
                        <div className="experiences-card2 basis-1/4 max-lg:basis-1/3 my-3">
                            <AnimatePresence>
                                <motion.div className="z-0 sm:absolute w-1/4 max-lg:w-1/3 max-sm:w-full max-sm:m-auto"
                                initial={{ opacity: 0, x:-50 }}
                                whileInView={{ opacity: 1, x:0 }}
                                transition={{ delay:0.5, type: "tween", duration: 0.2 }}
                                >
                                    <img src={Ipcree2} className="object-cover w-full max-[1280px]:h-44 border-2 border-white rounded-xl "/>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                        <p className=" tracking-widest max-[1280px]:text-xs description opacity-50 pt-2 sm:hidden">HARD SKILLS</p>
                        <p className="sm:hidden max-[1280px]:text-base description"><P>Developed website</P> of IPCREE with <P>WordPress</P> (ipcree.com) and took responsibility for <P>writing</P> one of the <P>press releases</P> for the National Energy Week event.</p>
                    </div>
                </section>
                <hr className=" my-10"></hr>
                <section className="mb-auto space-y-5">
                    <div className="text-center">
                        <p className="max-[1280px]:text-xl text-h4 font-bold text-primary bg-white bg-opacity-90 inline-block px-1 pt-1 my-1">PK2MABA & STARTUP ACADEMY</p>
                        <p className="max-[1280px]:text-base description">Annual campus event welcomes new students, introducing and providing essential information to help kickstart their journey.</p>
                    </div>
                    <div className="experiences-card3 flex justify-between space-x-5 max-xs:space-x-0">
                        <AnimatePresence>
                            <motion.div
                                initial={{ opacity: 0, x:-50 }}
                                whileInView={{ opacity: 1, x:0 }}
                                transition={{ delay:0.2, type: "tween", duration: 0.2 }}
                            >
                                <img src={pk21} className="object-cover max-[1280px]:h-48 max-lg:h-40 max-lg:w-56 border-2 border-white rounded-xl max-xs:hidden"/>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x:-50 }}
                                whileInView={{ opacity: 1, x:0 }}
                                transition={{ delay:0.5, type: "tween", duration: 0.2 }}
                            >
                                <img src={pk23} className="object-cover max-[1280px]:h-48 max-lg:h-40 max-lg:w-56 border-2 border-white rounded-xl max-xs:w-full max-xs:h-full"/>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x:-50 }}
                                whileInView={{ opacity: 1, x:0 }}
                                transition={{ delay:0.7, type: "tween", duration: 0.2 }}
                            >
                                <img src={pk22} className="object-cover max-[1280px]:h-48 max-lg:h-40 max-lg:w-56 border-2 border-white rounded-xl max-xs:hidden"/>
                            </motion.div> 
                        </AnimatePresence>
                    </div>
                    <div>
                        <p className=" tracking-widest max-[1280px]:text-xs description opacity-50">SOFT SKILLS</p>
                        <p className=" max-[1280px]:text-base description font-bold text-primary bg-white bg-opacity-90 inline-block px-1 pt-1 mt-1">Staff of Event Division | 2021</p>
                        <li className="max-[1280px]:text-base description"><P>Collaborated</P> with the <P>team</P> in <P>organizing</P> and <P>managing events</P> such as PK2MABA, Startup Academy, Inspiration Class, Fusion, and Open House.</li>
                        <li className="max-[1280px]:text-base description"><P>Best staff</P> and <P>person in charge</P> of a series of Fusion events.</li>

                        <p className=" max-[1280px]:text-base description font-bold text-primary bg-white bg-opacity-90 inline-block px-1 pt-1 mt-3 mb-1">Staff of Companion Division | 2020</p>
                        <p className="max-[1280px]:text-base description">Supported <P>35</P> students, <P>building bonds</P> among students and <P>distributing information</P> about PK2MABA & Startup Academy events and lecture-related matters.</p>

                        <p className=" max-[1280px]:text-base description font-bold text-primary bg-white bg-opacity-90 inline-block px-1 pt-1 mt-3 mb-1">Speaker of Program Kreatifitas Mahasiswa Baru (PKM) | 2020</p>
                        <p className="max-[1280px]:text-base description">PKM is a national scientific writing competition, I <P>mentored</P> and <P>facilitated 35</P> students, <P>delivering material</P> about PKM and how to <P>make good presentations</P>.</p>
                    </div>
                </section>
                <hr className=" my-10"></hr>
                <section className=" h-4/5 mb-auto space-y-8 max-xs:mb-52">
                    <div className="sm:flex flex-row">
                        <div className="experiences-card2 basis-1/4 max-lg:basis-1/3">
                            <motion.div
                                    initial={{ opacity: 0, x:-50 }}
                                    whileInView={{ opacity: 1, x:0 }}
                                    transition={{ delay:0.2, type: "tween", duration: 0.2 }}
                                >
                                <img src={lkmmtd1} className=" object-cover object-left-top max-[1280px]:h-44 border-2 border-white rounded-xl max-sm:m-auto max-xs:w-full"/>
                            </motion.div>
                        </div>
                        <div className="basis-3/4 p-5 pl-10 max-sm:p-0 max-sm:text-center">
                            <p className=" tracking-widest max-[1280px]:text-xs description opacity-50 pt-2">VOLUNTEER | 2021</p>
                            <p className=" max-[1280px]:text-xl text-h4 font-bold text-primary bg-white bg-opacity-90 inline-block px-1 pt-1 my-1">Head of Event Division at LKMM-TD</p>
                            <p className=" max-[1280px]:text-base description">LKMM-TD is Latihan Keterampilan Manajemen Mahasiswa Tingkat Dasar to provide knowledge and managerial skills to be a good leader.</p>
                        </div>
                    </div>
                    <div>
                        <p className=" tracking-widest max-[1280px]:text-xs description opacity-50">SOFT SKILLS</p>
                        <li className="max-[1280px]:text-base description"><P>Promoting</P> the event to new students at Startup Academy Event resulted in <P>doubling the participant numbers</P> from the previous year.</li>
                        <li className="max-[1280px]:text-base description"><P>Collaborated</P> with the <P>team</P> in preparing and controlling LKMM-TD activities.</li>
                    </div>
                </section>
            </div>
        </motion.div>
        <motion.p 
            initial="hidden"
            animate="visible"
            variants={variants}
            layoutScroll="false"
            className="custom-bottom-right font-sans italic max-[900px]:hidden fixed z-20"
        >More rolls, more chance of luck </motion.p>
        </>
    )
}

export default Experiences