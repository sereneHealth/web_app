// Programes.jsx
import React, { useState } from "react";
import Modal from "../../../common/Modals";

const plans = [
  {
    title: "Basic",
    initialCost:"140,000",
    cost: "100,000",
    features: [
      "Setting/Inspection of School Healingbay and First Aid Box.",
      "Health talk/Health Education and Promotion.",
      "Training of School Staff and Health prefects.",
      "Distribution of I.E.C materials.",
    ],
    image: "/assets/eduPromotion.jpg",
  },
  {
    title: "Classic",
    initialCost:"250,000",
    cost: "180,000",
    features: [
      "All basic plan",
      "Access to Emergency Preparedness Session.",
      "Access to Primary Medical Provider on request.",
      "Dental and Visual Screening/Session.",
      
    ],
    image: "/assets/eduPromotion.jpg",
  },
  {
    title: "Standard",
    initialCost:"560,000",
    cost: "400,000",
    features: [
      "All Classic Plans",
      "Inspection of school environment and facilities using endorsed checklist",
      "One(1) standby Primary Medical Provider 9am-2pm",
      "Inspection of food vendor and stalls",
      "Access to Annual School Health Fairs",
      "Access to Termly Psychological Counseling Sessions"
    ],
    image: "/assets/eduPromotion.jpg",
  },
  // {
  //   title: "Premium",
  //   initialCost:"560,000",
  //   cost: "250000",
  //   comment: "Recommended",
  //   features: [
  //     "All Premium Plans",
  //     "Medical and Nutritional Screening",
  //     "Medical and Psychological counselling",
  //     "Two (2) standby Primary Medical Provider 9am- 1pm",
  //   ],
  //   image: "/assets/eduPromotion.jpg",
  // },
];

const Programes = () => {
  const [isSubscribeModalOpen, setSubscribeModalOpen] = useState(false);
  const [isSuccessModalOpen, setSuccessModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handleSubscribeClick = (plan) => {
    setSelectedPlan(plan);
    setSubscribeModalOpen(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSubscribeModalOpen(false);
    setSuccessModalOpen(true);
  };

  return (
    <>
      <div>
        <div className="flex flex-col justify-center items-center text-center font-bold text-[24px]/[28px] xl:text-[48px]/[64px] pb-4">
          <p className="text-center font-bold text-2xl xl:text-4xl">Our Programmes</p>
          <div className="bg-teal-300 h-3 md:h-4 w-[35%] md:w-[8.5%] relative left-10 md:left-12 bottom-3 md:bottom-4 -z-10 rounded-sm"></div>
        </div>
        <div className="flex flex-col gap-5 w-[90%] mx-auto text-base md:text-xl text-gray-700">
          <p className="">
            Our program is designed to
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
                className="h-[350px] w-[19rem] md:w-[350px] lg:w-[600px] overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 group"
                style={{
                  backgroundImage: `url(${plan.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="bg-teal-500 w-full flex justify-between text-[24px] px-5 text-white">
                  <p>{plan.title}</p>
                  <div>
                  <p>&#8358;{plan.cost}</p>
                  <div className="flex text-end justify-end">
                  <p className="text-[12px] text-[red] line-through">&#8358;{plan.initialCost}</p>
                  </div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
                  <ul className="mb-6 space-y-2 text-center">
                    {plan.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                  <button                    onClick={() => handleSubscribeClick(plan)} // Pass the plan to handleSubscribeClick
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
