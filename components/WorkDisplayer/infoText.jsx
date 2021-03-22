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
          user friendly and accessible as possible.
        </>
      );
      break;
    case "Pentland Disruption Lab":
      if (client.project === "Hayst") {
        return (
          <>
            Whilst at Pentland I was helping design a digital platform &
            eCommerce store for a wheelchair a new sports specialist clothing
            brand, Hayst. The platform was designed to be able to get feedback
            from the users online about the products/brand/user experience in
            phases before launch.
          </>
        );
      }
      if (client.project === "Berghaus") {
        return (
          <>
            Designed an e-commerce experience to add-on to the current Berghaus
            site to accompany a new bag designed and built entirely from
            offcuts.
          </>
        );
      }

      return (
        <>
          I worked on Toddl during my time at Pentland, designing an experience
          that would allow parents to accurately measure, and buy shoes for,
          there children's feet with an app on their phone.
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
    case "Settio":
      return (
        <>
          Designed a series of collateral and brochures for Manchester-based
          estate agent Settio.
        </>
      );
      break;
    case "Push Doctor":
      return (
        <>
          Designed a series of icons and marketing material for on phone medical
          service, push doctor.
        </>
      );
      break;
    case "Marks & Spencers":
      return (
        <>
          Worked with VYPR, to produce possible packaging options for M&S to be
          tested ahead of new lines being released.
        </>
      );
      break;
    case "Startist":
      return (
        <>Branding, Design & Development for art supply start-up, Startist.</>
      );
      break;
    case "Love Corn":
      return (
        <>
          Worked with Love Corn to produce all marketing collateral and
          assisting in designing the packaging for a new flavour release.
        </>
      );
      break;
    case "WeWork":
      return (
        <>
          Produced a line of illustrations for WeWork representing their six
          core values as dogs.
        </>
      );
      break;
    case "Dough":
      return (
        <>
          Developed site for the renowned pizza restaurant in Manchester, Dough.
        </>
      );
      break;
    case "Teacher Tapp":
      return (
        <>
          Consulted with Teacher Tapp to improve their site design and clean up
          the code in the background.
        </>
      );
      break;
    case "APX":
      return (
        <>
          Developed APX's new site working with Battalion. This site included a
          proposition app for people to pitch their business for investment and
          a jobs board.
        </>
      );
      break;
    case "Coherent Labs":
      return (
        <>Developed a new site for Coherent Labs working with Battalion.</>
      );
      break;
    case "Flipbook":
      return (
        <>
          Worked with Matt Bay to develop an agency site to display Flipbook
          studios work.
        </>
      );
      break;

    default:
      return null;
  }
};

export default InfoText;
