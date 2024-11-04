import React from 'react'
import { Link } from 'react-router-dom'
export default function MainFooter() {
  return (
    <div>
      {/* mite */}
      <div>
                <div className="container mx-auto p-8">
                    {/* Haupttitel */}
                    <div className="text-4xl font-bold text-#0b3954 mb-8 text-center md:flex">
                        Spaces that improve your quality of life – Request an
                        estimate
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                        {/* Kontaktinformationen */}
                        <div className="space-y-4">
                            <div>
                                <span className="font-bold">Phone</span>
                                <br />
                                <Link> +49(40)88799</Link>
                            </div>
                            <div>
                                <span className="font-bold">Mail</span>
                                <br />
                                <Link> nestory-furnitur@hotmail.com</Link>
                            </div>
                        </div>

                        {/* Menü */}
                        <div className="col-span-2 grid grid-cols-2 gap-8 font-bold text-#0b3954">
                            <ul className="space-y-4 ">
                                <li className="flex items-center justify-center md:justify-start">
                                    <Link>
                                        {" "}
                                        <span className="mr-2">–</span> SHOP
                                    </Link>
                                </li>
                                <li className="flex items-center justify-center md:justify-start">
                                    <Link>
                                        <span className="mr-2">–</span> PROJECTS
                                    </Link>
                                </li>
                                <li className="flex items-center justify-center md:justify-start">
                                    <Link>
                                        <span className="mr-2">–</span> FAQ
                                    </Link>
                                </li>
                                <li className="flex items-center justify-center md:justify-start">
                                    <Link>
                                        <span className="mr-2">–</span> SERVICES
                                    </Link>
                                </li>
                                <li className="flex items-center justify-center md:justify-start">
                                    <Link>
                                        <span className="mr-2">–</span> ABOUT US
                                    </Link>
                                </li>
                                <li className="flex items-center justify-center md:justify-start">
                                    <Link>
                                        <span className="mr-2">–</span> CONTACT
                                    </Link>
                                </li>
                            </ul>

                            <ul className="space-y-4">
                                <li className="flex items-center justify-center md:justify-start">
                                    <Link>
                                        <span className="mr-2">–</span> CHAIRS
                                    </Link>
                                </li>
                                <li className="flex items-center justify-center md:justify-start">
                                    <Link>
                                        <span className="mr-2">–</span> BEDS
                                    </Link>
                                </li>
                                <li className="flex items-center justify-center md:justify-start">
                                    <Link>
                                        <span className="mr-2">–</span> TABLES
                                    </Link>
                                </li>
                                <li className="flex items-center justify-center md:justify-start">
                                    <Link>
                                        <span className="mr-2">–</span> SOFAS
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}
