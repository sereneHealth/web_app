import React, { useEffect, useState } from 'react';
import Navbar from '../../common/Navbar';
import Footer from '../../common/Footer';
import Hero from '../../common/Hero';
import axios from 'axios';

const EventsPage = () => {
  const [events, setEvents] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('https://web-api-775r.onrender.com/event/posts');
        console.log(response.data);
        setEvents(response.data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchEvents();
  }, []); 

  if (error) return <div>Error: {error}</div>;
  if (!events.length) return <div>Loading...</div>;

  return (
    <>
      <Navbar />
      <div className="flex flex-col space-y-8 md:space-y-16">
        <Hero title="Our Events" image="/images/serene/img7.jpg" />
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-center mb-6">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-bold">{event.title}</h3>
                <p className="text-gray-600">{event.date}</p>
                <p className="mt-2 text-sm text-gray-700">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EventsPage;
