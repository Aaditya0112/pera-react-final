import poster from "./assets/files/poster2.jpg";


import Home from './assets/pages/Home';
import About from './assets/pages/About';
import SpeakersList from './assets/pages/SpeakersList';
import Committee from './assets/components/Committee';
import EventDetails from './assets/pages/EventDetails';
import Registration from './assets/pages/Registration';
import Contact from './assets/pages/Contact';
import SBC from './assets/pages/SBC';
import StudentTravelSupport from './assets/pages/StudentTravelSupport';
import Accommodation from './assets/pages/Accommodation';
import Poster from './assets/pages/Poster';
import ChiefGuest from './assets/pages/ChiefGuest';

//logos

import iitk_logo from "./assets/images/iitk_logo.png";
import ieee_logo from "./assets/images/ieee.svg";


// carousel images
import slide1 from './assets/images/slide1.jpg';
import slide2 from './assets/images/slide2.jpg';
import slide3 from './assets/images/slide3.jpg';


export const Logos = [
    // left side 
    [
        {
            title: "logo1",
            image: "https://site.ieee.org/sb-iitk-pes/files/2021/08/PES-SBC-768x601.png"
        },
        {
            title: "logo2",
            image: "https://site.ieee.org/sb-iitk-pes/files/2021/06/PERA-Logo.png"
        }
    ],
    // right side
    [
        {
            title: "logo3",
            image: iitk_logo,
            link: "https://iitk.ac.in"
        },
        {
            title: "logo4",
            image: ieee_logo,
            link: "https://www.ieee.org/"
        }
    ]

]



export const NavBarTabs = [
    { title: "Home", path: "/", component: <Home /> },
    { title: "About Us", path: "/about", component: <About /> },
    { title: "Committee", path: "/committee", component: <Committee /> },
    { title: "SBC Members", path: "/sbcMembers", component: <SBC /> },
    { title: "Chief Guest", path: "/chiefGuest", component: <ChiefGuest /> },
    { title: "Speakers", path: "/speakers", component: <SpeakersList /> },
    { title: "Event Details", path: "/eventDetails", component: <EventDetails /> },
    // { title: "Registration", path: "/registration", component: <Registration /> }, // registration ended
    { title: "Student Poster Competition", path: "/posterComp", component: <Poster /> },
    { title: "Student Travel Support", path: "/studentSupport", component: <StudentTravelSupport /> },
    { title: "Accommodation", path: "/accommodation", component: <Accommodation /> },
    { title: "Contact", path: "/contact", component: <Contact /> }
];

export const RegistrationPath = "/registration"

export const EventDate = "2024-11-29T08:30:00Z" // format  : 2024-11-29T08:30:00Z

// to handle timeline of event
export const EventsTimeline = [
    {
        event: "Registration Begins",
        time: "15 Aug 2024"  // can also add timestamps (e.g. - 3:00 PM to 4:00 PM)
    },
    {
        event: "Registration Closes",
        time: "15 Oct 2024"
    },
    {
        event: "Workshop Begins",
        time: "29 Nov 2024"
    }
]


export const AnnouncementText = "Registration Ended."

export const CarouselImages = [
    {
        title: "slide1",
        image: slide1,
        interval: 4000, // in milliseconds
    },
    {
        title: "slide2",
        image: slide2,
        interval: 4000, // in milliseconds

    },
    {
        title: "slide3",
        image: slide3,
        interval: 4000, // in milliseconds

    },
]

export const CarouselCover =
{
    fullTitle: "Power Engineering Research and Applications 2024",
    title: "PERA 2024",
    motto: "Empowering a Sustainable Future: Resilient Renewable Energy and Electric Mobility",
    date: "29 November - 1 December 2024",
    address: {
        firstLine: "Indian Institute of Technology Kanpur, India",
    },
    file: "Brochure",
    fileLink: poster
}

//  for sponsors go to assets/components/SponsorsImg


export const AboutEvent = {
    title: "About PERA",
    subTitle: "FLAGSHIP EVENT OF IEEE PES SBC IIT KANPUR.",
    content: `The focus on clean energy has led to a shift towards the need for a sustainable and resilient power system. 
    The sustainable power system has its own challenges because of the intermittencies in renewable energy sources. It causes various power system dynamics and transients, which affect the system's performance. 
    Such unplanned scenarios need to be addressed for a robust power system operation. Further, resilient power systems should be able to restrict the extent, severity, and duration of system degradation following any extreme events. 
    Thus, sustainable and resilient power systems present several opportunities and challenges, such as their design and development, control and protection, stability and reliability, operation and planning, from economic, social, and environmental perspectives.
     PERA24 (offline event) covers the state of the art of several present-day and future challenges and prospects related to grid resiliency. 
    This workshop includes expert talks, panel discussions, and demonstrations of various simulators and tools from multiple reputed institutes and industries. We invite faculty members, practicing engineers, and students from across the globe to participate and benefit from this workshop.`
}

export const AboutInstitute = {
    title: "About IIT Kanpur",
    content: `<b>Indian Institute of Technology Kanpur</b> is a public institute of technology located in Kanpur, Uttar Pradesh, India. 
    It was declared an Institute of National Importance by the Government of India under the Institutes of Technology Act. 
    The institute has around 6478 students with 3938 undergraduate students and 2540 postgraduate students and about 500 research associates.`,
    child: 
        {
            title: "Department of Electrical Engineering",
            content: `The Electrical Engineering Department was one of the first few departments with which IIT Kanpur started in 1960. Electrical Engineering Department is currently the largest multidisciplinary department at IIT Kanpur and covers practically all sub-disciplines under Electrical Power, Electronics and Communications. The vision of the EE department is
                to create talented and socially responsible engineers to make a better India and, in turn, a better world. It will strive to become a hub of research excellence in cutting edge, state of the art, and contemporary areas of national and international relevance. 
                The department also envisions itself as a center of excellence in teaching to create a well-educated, technically competent, and socially responsible workforce for meaningful, inclusive, and overall societal development of India and the world.`
        }
    
}
export const EventTitle = CarouselCover.title



export const PopUpText = {
    title: "Important Announcement",
    content: "Any requests for refund will not be entertained as all the preparations leading to the event are finalised, and all the arrangements have been made."
}



// ABOUT US PAGE

export const ReachingInstitute = ""

export const Institute = ""

export const Department = ""

export const Society = ""

// Contact Us page

export const Contacts = [
    { title: "Email", contact: "pera2024.iitk@gmail.com" }
]

// Footer 

export const footerText = "&copy; 2024 PERA-IITK. All Rights Reserved."

