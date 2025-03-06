import Carousel from "react-bootstrap/Carousel";

import Timer from "../components/Timer";
import SponsorsImg from "../components/SponsorsImg";
import {
  AboutEvent,
  CarouselCover,
  CarouselImages,
  AnnouncementText,
  RegistrationPath,
  PopUpText,
  EventsTimeline,
  EventTitle,
  EventDate,
  AboutInstitute
} from "../../Constants.js";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
const Home = () => {
  const eventDate = new Date({EventDate});
  return (
    <>
      <div className="announcement">
        <a href={RegistrationPath}>
          <h1>{AnnouncementText}</h1>
        </a>
      </div>

      <div className="carouselplay">
        <Carousel>
          {CarouselImages.map((element) => {
            return (
              <Carousel.Item interval={element.interval}>
                <img src={element.image} alt={element.title} />
              </Carousel.Item>
            );
          })}
        </Carousel>

        <div className="cap ">
          <h1 className="text-lg lg:text-4xl">{CarouselCover.fullTitle}</h1>
          <h5 className="text-sm lg:text-xl">{CarouselCover.title}</h5>

          <h4 className="text-blue-400 font-bold text-base lg:text-2xl">
            {CarouselCover.motto}
          </h4>
          <p className="text-sm lg:text-xl">{CarouselCover.date}</p>
          <h5 className="text-base lg:text-xl">
            {CarouselCover.address.firstLine}
          </h5>
          <a
            href={CarouselCover.fileLink}
            target="_blank"
            rel="noreferrer"
            className="text-sm lg:text-base"
          >
            {CarouselCover.file}
          </a>
        </div>
      </div>
      <div className="info w-4/5  lg:w-2/5 h-fit fixed text-lg">
        <div className="popupContent">
          <h2 className="underline purple">{PopUpText.title}</h2>
          <p>{PopUpText.content}</p>
        </div>

        <button
          className="popupClose"
          onClick={() => {
            document.querySelector(".layer").classList.remove("activeL");
            document.querySelector(".info").removeAttribute("id");
            document.querySelector(".popupContent").innerHTML = "";
            document.querySelector(".info").style.display = "none";
          }}
        >
          &#10006;
        </button>
      </div>
      <div className="layer activeL"></div>

      <VerticalTimeline>
        {EventsTimeline.map((e, index) => {
          return(<VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={e.time}
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">{e.event}</h3>
          </VerticalTimelineElement>);
        })}

      </VerticalTimeline>

      {/* PERA Sponsors */}

      <div className="event-sponsors">
        <span className="heading purple">
          <h1>{EventTitle} Sponsors</h1>
        </span>

        {/* TODO */}
        <div className="skills" id="skills">
          {SponsorsImg.map((sponsor) => {
            // if (sponsor.id == "10" || sponsor.id == "11") {
            //   return (
            //     <div className="card" key={sponsor.id}>
            //       <img src={sponsor.image} className="w-2/5" alt="" />
            //     </div>
            //   );
            // } else {
              return (
                <div className="card" key={sponsor.id}>
                  <img src={sponsor.image} alt="" />
                </div>
              );
            // }
          })}
        </div>
      </div>
      <div className="about-event">
        <span className="heading purple">
          <h1>{AboutEvent.title}</h1>
        </span>
        <span className="sub-heading">{AboutEvent.subTitle}</span>
        <p dangerouslySetInnerHTML={{__html : AboutEvent.content}}></p>
      </div>
      <div className="about-event">
        <span className="heading purple">
          <h1>{AboutInstitute.title}</h1>
        </span>

        <p dangerouslySetInnerHTML={{__html : AboutInstitute.content}}>
        </p>
        <p>
          <span className="sub-heading">
            {AboutInstitute.child.title}
          </span>
          <p dangerouslySetInnerHTML={{__html : AboutInstitute.child.content}}>

          </p>
        </p>
      </div>

      <div className="countdown">
        <Timer eventDate={eventDate} />
      </div>
    </>
  );
};

export default Home;
