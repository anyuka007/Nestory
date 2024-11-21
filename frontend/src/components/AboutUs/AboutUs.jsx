import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ScrollToTop from "./ScrollTopTop";
//import { faAlignCenter } from "@fortawesome/free-solid-svg-icons";
//import { FaCode, FaReact, FaNodeJs, FaPencilAlt } from "react-icons/fa";
import SlideCard from "./SlideCard";
import Was from "./Was";
import { Link } from "react-router-dom";

const cards = [
    {
        title: "Fullstack Web Developer",
        name: "Jian Lu",
        image: "https://www.zoo-berlin.de/fileadmin/_processed_/c/7/csm_Panda_Paule_7722606794.jpg",
        git: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbqj9Ii13d6hx5a9kyLnC5A8A96LDSaSZv_w&s",
        in: "https://www.multi-sonic.de/wp-content/uploads/2024/06/linkedin-logo-linkedin-icon-transparent-free-png.webp",
    },
    {
        title: "Fullstack Web Developer",
        name: "Anna Popova",
        image: "https://ornithology.com/wp-content/uploads/2022/11/image-1-768x1024.png",
        git: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbqj9Ii13d6hx5a9kyLnC5A8A96LDSaSZv_w&s",
        in: "https://www.multi-sonic.de/wp-content/uploads/2024/06/linkedin-logo-linkedin-icon-transparent-free-png.webp",
    },
    {
        title: "Fullstack Web Developer",
        name: "Julijana Uneva ",
        image: "https://sinavet.com/wp-content/uploads/2024/04/Persian-Mastiff.jpg",
        git: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbqj9Ii13d6hx5a9kyLnC5A8A96LDSaSZv_w&s",
        in: "https://www.multi-sonic.de/wp-content/uploads/2024/06/linkedin-logo-linkedin-icon-transparent-free-png.webp",
    },
    {
        title: "Fullstack Web Developer",
        name: "Alex Nezhad",
        image: "https://www.zootierliste.de/imagedb/1120919/cf453487/ciscaucasica.jpg",
        git: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbqj9Ii13d6hx5a9kyLnC5A8A96LDSaSZv_w&s",
        in: "https://www.multi-sonic.de/wp-content/uploads/2024/06/linkedin-logo-linkedin-icon-transparent-free-png.webp",
    },
];
export default function AboutUs() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
    };
    return (
        <>
         <ScrollToTop /> {/* Scroll-to-Top Funktionalität */}
         <main className="flex">
        
            <div>
                <div style={styles.container}> <section>
                    <h2 style={styles.title}>neSTory Team</h2>
                    <p style={styles.description}>
                        I’m a skilled software developer with experience in
                        TypeScript and JavaScript, and expertise in frameworks
                        like React, Node.js, and Three.js. I’m a quick learner
                        and collaborate closely with clients to create
                        efficient, scalable, and user-friendly solutions that
                        solve real-world problems. Let’s work together to bring
                        your ideas to life!
                    </p>
                    <Slider {...settings}>
                        {cards.map((card, index) => (
                            <div key={index} style={styles.card}>
                                <div style={styles.name}>{card.name}</div>

                                <div style={{ gap: "" }}>
                                    <img
                                        style={{
                                            padding: "5px",
                                            width: "300px",
                                            height: "250px",
                                            borderRadius: "80px",
                                        }}
                                        src={card.image}
                                        alt=""
                                    />
                                </div>
                                <h3 style={styles.cardTitle}>{card.title}</h3>
                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "center",
                                    }}
                                >
                                    <Link to="https://github.com/dashboard">
                                        {" "}
                                        <img
                                            style={styles.logo}
                                            src={card.git}
                                            alt="github logo"
                                        />
                                    </Link>

                                    <Link to="https://www.linkedin.com/feed/">
                                        <img
                                            style={styles.logo}
                                            src={card.in}
                                            alt=""
                                        />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </Slider>{" "}
                   </section>
                </div>
            </div>
            <section style={styles.container} className="was bg-red-300 w-[800px] p-8 rounded-3xl">
            <div style={{ margin: "20px" }}>
                        <Was />
                    </div>
                <div
                        style={{ display: "flex", gap: "20px", margin: "50px" }}
                    >
                        <SlideCard
                            title="HTML"
                            //description="This card slides in when visible."
                            image="https://cdn.iconscout.com/icon/free/png-256/free-html-5-logo-icon-download-in-svg-png-gif-file-formats--programming-langugae-language-pack-logos-icons-1175208.png?f=webp"
                        />
                        <SlideCard
                            title="CSS"
                            //description="This card slides in when visible."
                            image="https://static-00.iconduck.com/assets.00/file-type-css-icon-902x1024-dqy5inwy.png"
                        />
                        <SlideCard
                            title="JavaScript"
                            //description="Another card that slides in."
                            image="https://miro.medium.com/v2/resize:fit:344/1*tZHcs0d7MAG-BBcjBekZYA.png"
                        />
                        <SlideCard
                            title="React"
                            //description="This card slides in when visible."
                            image="https://github.com/facebook/react/wiki/react-logo-1000-transparent.png"
                        />
                    </div>
                    <div
                        style={{ display: "flex", gap: "20px", margin: "50px" }}
                    >
                        <SlideCard
                            title="Node.js"
                            //description="This card slides in when visible."
                            image="https://pluralsight2.imgix.net/paths/images/nodejs-45adbe594d.png"
                        />
                        <SlideCard
                            title="Tailwind"
                            //description="This card slides in when visible."
                            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSDKn3vA2YUbXzN0ZC3gALWJ08gJN-Drl15w&s"
                        />
                        <SlideCard
                            title="Mongodb"
                            //description="Another card that slides in."
                            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2ZYtHv2OLXmthRPbkmENZRXuqBVDwlsrZ1A&s"
                        />
                        <SlideCard
                            title="Three.js"
                            image="https://d2ooyrflu7lhqd.cloudfront.net/three_js_c065f86333.png"
                        />
                    </div>
                    {/* <div
                        style={{ display: "flex", gap: "20px", margin: "50px" }}
                    >
                        <SlideCard
                            title="Canva"
                            //description="This card slides in when visible."
                            image="https://static-cse.canva.com/blob/571644/Untitleddesign9.png"
                        />
                        <SlideCard
                            title="Express.js"
                            //description="This card slides in when visible."
                            image="https://www.peanutsquare.com/wp-content/uploads/2024/04/Express.png"
                        />
                        <SlideCard
                            title="Mongodb-Compass"
                            //description="Another card that slides in."
                            image="https://www.kenwalger.com/twitter_cards/mongodb-compass.png"
                        />
                        <SlideCard
                            title="Schema"
                            image="https://spin.atomicobject.com/wp-content/uploads/typescript-json-schema.png"
                            //image="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhnLxTLqF9OdBjMGYIlDs2tlu1Rw1s4C-hVs96zrki0TlB4Ho_SHbyt_lfFsKZ_hcYXMtceO8LUvgfks01xXpdr6wMJq9JT_UZeDV-ayBv5sBYYwTPaHbQME-1UyQLfxxAqxjntAj8TdYSG/w1200-h630-p-k-no-nu/JSON+Schema.jpg"
                        />
                    </div> */}
                    </section>
            </main>
        </>
    );
}
const styles = {
    container: {
        //backgroundColor: "#1A202C", // Dunkler Hintergrund
        backgroundColor:"#0b3954",
        color: "#E2E8F0", // Hellgrauer Text
        padding: "40px",
        borderRadius: "20px",
        textAlign: "center",
        maxWidth: "750px",
        margin: "",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        minHeight: "10vh",
    },
    title: {
        fontSize: "33px",
        fontWeight: "bold",
        color: "#E2E8F0",
    },
    description: {
        fontSize: "16px",
        color: "#A0AEC0",
        margin: "25px 0",
    },
    card: {
        backgroundColor: "#2D3748",
        padding: "20px",
        borderRadius: "12px",
        textAlign: "center",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        transition: "transform 0.3s",
        cursor: "pointer",
    },
    cardTitle: {
        color: "#E2E8F0",
        marginTop: "10px",
        fontSize: "18px",
    },
    name: {
        font: "bold",
        color: "#ffb128",
        marginBottom: "10px",
        fontSize: "19px",
    },
    logo: {
        width: "50px",
        height: "50px",
        borderRadius: "80px",
    },
};
