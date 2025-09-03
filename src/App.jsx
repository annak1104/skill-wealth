import "./App.css";
import CourseOverview from "./components/CourseOverview/CourseOverview.jsx";
import FaqAccordion from "./components/CourseOverview/FaqAccordion/FaqAccordion.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { Header } from "./components/Header/Header.jsx";
import  CommentsSection  from "./components/CommentsSection/CommentsSection.jsx";
import PricingPaymentDetails from "./components/PricingPaymentDetails/PricingPaymentDetails.jsx";
import { WhySkillWealth } from "./components/WhySkillWealth/WhySkillWealth.jsx";

function App() {
  return (
    <>
      <Header />
      <div id="why-section">
        <WhySkillWealth />
      </div>
      <div id="course-overview">
        <CourseOverview />
      </div>
        <div id="pricing">
        <CommentsSection />
      </div>
      <div id="pricing">
        <PricingPaymentDetails />
      </div>
       <div id="faq-section">
        <FaqAccordion />
      </div>
      <div id="contact-section">
        <Footer />
      </div>
    </>
  );
}

export default App;
