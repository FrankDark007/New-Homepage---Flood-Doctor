
import React from 'react';
import { Hero } from './components/Hero';
import { ValueProps } from './components/ValueProps';
import { FeatureSection } from './components/FeatureSection';
import { ProductOfferings } from './components/ProductOfferings';
import { InsightsSection } from './components/InsightsSection';
import { SuccessStory } from './components/SuccessStory';
import { FinalSteps } from './components/FinalSteps';
import { FAQ } from './components/FAQ';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <Hero />
        <ValueProps />
        
        {/* Feature Row 1: Take charge */}
        <FeatureSection 
          layout="text-left"
          title="Take charge of your first impression"
          subtitle="Highlight essential info and show what makes your business unique, right on your Business Profile."
          listItems={[
            { title: "Add essential info", desc: "Let customers know your location, phone number, and hours so they can reach you easily." },
            { title: "Share photos and logos", desc: "Show off your storefront, products, and team to build trust with potential customers." },
            { 
              title: "Show who you are", 
              desc: "Add attributes to show your business identifies as Black-owned, women-owned, veteran-owned, and is LGBTQ+ friendly so people can learn more about your business." 
            }
          ]}
          visualType="attributes"
        />

        {/* Feature Row 2: Easily connect */}
        <FeatureSection 
          layout="text-right"
          title="Easily connect with customers"
          subtitle="Update customers with the latest via posts, offers, and more."
          listItems={[
            { title: "Create posts, offers, and events", desc: "Add posts to your Business Profile to promote special offers, events, and updates to keep customers in the loop." },
            { title: "Respond to reviews", desc: "Engage with your audience by responding to feedback and building long-term customer loyalty." },
            { title: "Post answers to frequently asked questions", desc: "Reduce the need for direct queries by providing clear answers to common customer questions upfront." }
          ]}
          visualType="posts"
        />

        <ProductOfferings />
        <InsightsSection />
        <SuccessStory />
        <FinalSteps />
        <FAQ />
      </main>
    </div>
  );
};

export default App;
