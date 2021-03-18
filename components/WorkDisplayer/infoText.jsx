const InfoText = ({ client }) => {
  switch (client.clientName) {
    case "Oak":
      return (
        <>
          From conception, I was responsible for the UX design, UI design &
          Front End development of the education platform Oak which grew to
          millions of daily users during the last year of COVID-19.
          <br />
          <br />
          This involved designing 3 apps, over months of non-stop designing,
          testing and coding.
        </>
      );
      break;
    case "Oak Classroom & Teacher Hub":
      return (
        <>
          The teacher hub was designed to assist teachers in their resources
          during the pandemic. We designed it to have over 10,000 free
          customisable downloadable lessons.
          <br />
          <br />
          The classroom was the student-facing side of this, designed to be more
          user friendly to students and to keep them focused on their learning!
        </>
      );
      break;
    case "Pentland Disruption Lab":
      if (client.project === "Hayst") {
        return (
          <>
            Whilst at Pentland I was helping design a digital platform &
            eCommerce store for a wheelchair sports specialist clothing brand.
            The platform was designed to be able to get feedback from the users
            online about the products/brand/user experience.
          </>
        );
      }
      return (
        <>
          I worked on Toddl during my time at Pentland, designing an experience
          that would allow parents to accurately measure there children's feet
          with their phone.
        </>
      );
      break;
    case "Edapt":
      return (
        <>
          At Edapt I worked on designing and implementing a full digital
          subscription service for their subscribers. This service included a
          sign-up process, account area, payment management zone, referral
          system & knowledge base of articles. After this projects, I continued
          with Edapt working on ongoing improvements to the product.
        </>
      );
      break;
    case "John Roberts":
      return (
        <>
          Redesigned the user journeys through to interface and feel for the
          newly renamed Center for Education & Youth. Ongoing project allowing
          for changes to improve the site for their users.
        </>
      );
      break;
    case "Climbpass":
      return (
        <>
          Worked with an experienced professional climber to produce the
          prototype for Climbpass. I designed the full brand inspired by
          climbing ropes through to the user journeys and interface.
        </>
      );
      break;
    case "Putty Studio":
      if (client.project === "SOWN") {
        return (
          <>
            Redesigned SOWN's online experience to showcase their client work
            and give a premium agency feel. I also went on to code out and
            launch the site.
          </>
        );
      }
      return (
        <>
          Redesigned BME's online experience across their multiple brands. This
          project included a full rebrand, UI design and build process for 3
          interrelated brands.
        </>
      );
      break;
    case "Revere":
      return (
        <>
          Worked producing a new marketing site and CO2 calculator with gone
          west.
        </>
      );
      break;

    default:
      return null;
  }
};

export default InfoText;
