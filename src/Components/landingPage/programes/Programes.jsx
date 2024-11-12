// Programes.jsx
import React, { useState } from "react";
import Modal from "../../../common/Modals";

const plans = [
  {
    title: "Basic",
    cost: "#70000",
    features: [
      "setting/inspection of school sickbay and first aid box",
      "training of school health prefects",
      "health talk/Health education and promotion",
      "distribution of I.E.C materials",
    ],
    image: "/assets/eduPromotion.jpg",
  },
  {
    title: "Classic",
    cost: "#120000",
    features: [
      "All basic plan",
      "provision of essential drugs.",
      "Treatment of minor ailments and referral of need.",
      "Provision of Primary Medical Provider on request",
    ],
    image: "/assets/eduPromotion.jpg",
  },
  {
    title: "Standard",
    cost: "#180000",
    features: [
      "All Classic Plans",
      "Inspection of school environment and facilities using endorsed checklist",
      "One(1) standby Primary Medical Provider 9am-1pm",
      "Inspection of food vendor and stalls",
    ],
    image: "/assets/eduPromotion.jpg",
  },
  {
    title: "Premium",
    cost: "#250000",
    comment: "Recommended",
    features: [
      "All Premium Plans",
      "Medical and Nutritional Screening",
      "Medical and Psychological counselling",
      "Two (2) standby Primary Medical Provider 9am- 1pm",
    ],
    image: "/assets/eduPromotion.jpg",
  },
];

const Programes = () => {
  const [isSubscribeModalOpen, setSubscribeModalOpen] = useState(false);
  const [isSuccessModalOpen, setSuccessModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null); // State for the selected plan

  const handleSubscribeClick = (plan) => {
    setSelectedPlan(plan); // Store the selected plan details
    setSubscribeModalOpen(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSubscribeModalOpen(false); // Close subscribe modal
    setSuccessModalOpen(true); // Open success modal
  };

  return (
    <>
      <div>
        <div className="flex flex-col justify-center items-center text-center text-[24px] xl:text-[48px]">
          <p>Our Programs</p>
          <div className="bg-teal-300 h-4 w-[14.5%] relative left-12 bottom-5 -z-10 hidden lg:block rounded-sm"></div>
        </div>
        <div className="flex flex-col gap-5 w-[90%] mx-auto">
          <p>
            <span className="text-teal-500">O</span>ur program is designed to
            empower students with essential knowledge and skills for a healthier
            life. It covers vital subjects such as health education, nutrition
            education, health seminars, counseling, and medical & nutrition
            screenings. We believe that education and counseling play a key role
            in promoting well-being and fostering a culture of wellness in
            schools.
          </p>
          <p>
            At SSI, we understand that each school community is unique, and
            individual needs vary. Our Health Education, Training, and Medical
            and Nutrition Screening services are designed to be flexible and
            adaptable, catering to the specific requirements of each school.
          </p>
        </div>

        <div className="flex flex-wrap justify-center py-8">
          <div className="flex flex-col md:grid md:grid-cols-2 xl:grid-cols-2 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className="h-[300px] w-[19rem] md:w-[350px] lg:w-[600px] overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 group"
                style={{
                  backgroundImage: `url(${plan.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="bg-teal-500 w-full flex justify-between text-[24px] px-5 py-2 text-white">
                  <p>{plan.title}</p>
                  <p>{plan.cost}</p>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
                  <ul className="mb-6 space-y-2 text-center">
                    {plan.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                  <button
                    onClick={() => handleSubscribeClick(plan)} // Pass the plan to handleSubscribeClick
                    className="px-4 py-2 bg-teal-500 hover:bg-teal-600 rounded-full text-white font-semibold transition-colors duration-200"
                  >
                    Subscribe
                  </button>
                  <div className="flex justify-end w-full text-[24px] -mb-[15%] hover:text-black">
                    <p className="bg-teal-500 rounded-tl-md px-1">
                      {plan.comment}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Subscription Modal */}
      <Modal
        isOpen={isSubscribeModalOpen}
        title={`Subscribe to ${selectedPlan?.title} Plan`} // Display the selected plan title
        onClose={() => setSubscribeModalOpen(false)}
      >
        <p className="mb-4">You are subscribing to the {selectedPlan?.title} plan for {selectedPlan?.cost}.</p>
        <form onSubmit={handleFormSubmit}>
          <div className="mb-4">
            <input
              type="text"
              placeholder="School Name"
              className="w-full p-2 border border-gray-300 rounded outline-none"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              placeholder="School Email"
              className="w-full p-2 border border-gray-300 rounded outline-none"
              required
            />
          </div>

          <div className="mb-4">
            <input
              type="tel"
              placeholder="School Phone"
              className="w-full p-2 border border-gray-300 rounded outline-none"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-teal-500 hover:bg-teal-600 rounded text-white font-semibold"
          >
            Submit
          </button>
        </form>
      </Modal>

      {/* Success Modal */}
      <Modal
        isOpen={isSuccessModalOpen}
        title="Success!"
        onClose={() => setSuccessModalOpen(false)}
      >
        <p>Your subscription to the {selectedPlan?.title} plan was successful!</p>
        <button
          onClick={() => setSuccessModalOpen(false)}
          className="mt-4 w-full py-2 bg-teal-500 hover:bg-teal-600 rounded text-white font-semibold"
        >
          Close
        </button>
      </Modal>
    </>
  );
};

export default Programes;
