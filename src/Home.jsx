import React, { useState } from "react";
import { AcademicCapIcon } from "@heroicons/react/24/outline";
import Navbar from "./pages/components/Navbar";
import Footer from "./pages/components/Footer";
import { ChevronDown, ChevronUp, Facebook, Twitter, Instagram, MapPin, Phone, Mail } from "lucide-react";




const HeroSection = () => (
  <section className="bg-gradient-to-br from-blue-100 via-cyan-100 to-blue-100/30 text-[#0A192F] py-40 px-4 md-[80]">
    <div className="flex flex-col md:flex-row justify-center items-center gap-8 max-w-5xl mx-auto">
      {/* Kiri: Tulisan */}
      <div className="w-full md:w-4/2 max-w-md">
        <h1 className="text-5xl md:text-5xl font-bold mb-4 text-left">
          Prevent <span className="text-blue-500">Stunting</span>.<br />
          Promote Healthy Growth.
        </h1>
        <p className="mb-6 text-gray-700 text-left">
          Early detection and intervention are key to preventing stunting and ensuring optimal child development. Get personalized assessments and recommendations.
        </p>
        <div className="flex gap-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg shadow">Start Assessment →</button>
          <button className="border border-blue-400 text-blue-500 hover:bg-blue-500 hover:text-white px-6 py-2 rounded-lg">Learn More</button>
        </div>
      </div>
      {/* Kanan: Carousel/Card */}
      <div className="w-full md:w-1/2 flex justify-center">
        <div className="bg-gray-100 p-6 rounded-xl text-[#0A192F] min-w-[320px] max-w-lg w-full flex flex-col items-center">
          <img src="https://via.placeholder.com/400x180" alt="Mother and child" className="mb-4 rounded" />
          <h2 className="text-lg font-bold text-center">Early Detection Matters</h2>
          <p className="text-sm text-gray-700 text-center">Identifying stunting risk factors early can make all the difference.</p>
          <div className="flex justify-center mt-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full mx-1"></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full mx-1"></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full mx-1"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const StatsSection = () => (
  <section className="text-center py-16 bg-white text-[#0A192F]">
    <h2 className="text-2xl md:text-3xl font-bold mb-2">Stunting Impact Statistics</h2>
    <p className="text-gray-700 max-w-2xl mx-auto">
      Stunting affects millions of children worldwide with long-term consequences for physical and cognitive development.
    </p>
    <div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-8">
        <div className="bg-gray-100 text-[#0A192F] px-6 py-4 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold">1 in 4</h3>
          <p className="text-sm">Children under 5 are stunted globally.</p>
        </div>
        <div className="bg-gray-100 text-[#0A192F] px-6 py-4 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold">50%</h3>
          <p className="text-sm">Of stunted children live in Asia.</p>
        </div>
        <div className="bg-gray-100 text-[#0A192F] px-6 py-4 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold">20%</h3>
          <p className="text-sm">Of stunted children live in Africa.</p>
        </div>
        <div className="bg-gray-100 text-[#0A192F] px-6 py-4 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold">20%</h3>
          <p className="text-sm">Of stunted children live in Africa.</p>
        </div>
      </div>
    </div>
  </section>
);

const StuntHelpSection = () => (

  <section className="text-center py-16 bg-neutral-50 text-[#0A192F]">
    <h2 className="text-2xl md:text-3xl font-bold mb-4">How StuntGuard Help</h2>
    <p className="text-gray-700 max-w-2xl mx-auto mb-6">
      Our platform provides tools and resources to help parents and healthcare providers monitor and prevent stunting.
    </p>
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 max-w-4xl mx-auto">
        <div className="bg-white-50 text-[#0A192F] px-6 py-4 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold">1 in 4</h3>
          <p className="text-sm">Children under 5 are stunted globally.</p>
        </div>
        <div className="bg-white-50 text-[#0A192F] px-6 py-4 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold">50%</h3>
          <p className="text-sm">Of stunted children live in Asia.</p>
        </div>
        <div className="bg-white-50 text-[#0A192F] px-6 py-4 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold">20%</h3>
          <p className="text-sm">Of stunted children live in Africa.</p>
        </div>
        <div className="bg-white-50 text-[#0A192F] px-6 py-4 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold">20%</h3>
          <p className="text-sm">Of stunted children live in Africa.</p>
        </div>
      </div>
    </div>
  </section>
);

const UnderstandingStuntingAccordion = () => {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (sectionId) => {
    setOpenSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const accordionData = [
    {
      id: 'what-is-stunting',
      title: 'What is stunting?',
      content: `Stunting is a form of malnutrition that occurs when a child is significantly shorter than the average height for their age group. It is defined as having a height-for-age z-score below -2 standard deviations from the median of the WHO Child Growth Standards.

Stunting is not just about being short - it reflects chronic malnutrition during the most critical periods of growth and development in early life. It is largely irreversible after the age of 2 years and can have long-lasting effects on a child's physical and cognitive development.

Key characteristics of stunting include:
• Height below the expected range for age
• Often accompanied by delayed motor and cognitive development
• Higher susceptibility to infections and diseases
• Reduced learning capacity and school performance`
    },
    {
      id: 'common-causes',
      title: 'Common causes of stunting',
      content: `Stunting results from multiple interconnected factors that affect a child's growth and development:

**Nutritional Factors:**
• Inadequate maternal nutrition during pregnancy
• Poor breastfeeding practices and early weaning
• Insufficient complementary feeding after 6 months
• Micronutrient deficiencies (iron, zinc, vitamin A)
• Food insecurity and limited access to nutritious foods

**Health Factors:**
• Frequent infections (diarrhea, respiratory infections)
• Poor sanitation and hygiene practices
• Inadequate healthcare access and quality
• Parasitic infections

**Socioeconomic Factors:**
• Poverty and limited household resources
• Low maternal education levels
• Poor water and sanitation infrastructure
• Limited access to healthcare services

**Environmental Factors:**
• Poor living conditions
• Exposure to environmental toxins
• Climate-related food insecurity`
    },
    {
      id: 'prevention-strategies',
      title: 'Prevention strategies',
      content: `Preventing stunting requires a comprehensive approach addressing multiple factors:

**During Pregnancy:**
• Ensure adequate maternal nutrition and weight gain
• Provide prenatal vitamins and supplements (folic acid, iron)
• Regular prenatal healthcare visits
• Prevent and treat maternal infections

**Early Infancy (0-6 months):**
• Promote exclusive breastfeeding for the first 6 months
• Ensure proper breastfeeding techniques and support
• Provide postnatal care for mother and baby
• Monitor infant growth regularly

**After 6 Months:**
• Introduce appropriate complementary foods while continuing breastfeeding
• Ensure diverse, nutrient-rich diet
• Maintain good hygiene practices during food preparation
• Regular growth monitoring and immunizations

**Community Level:**
• Improve water, sanitation, and hygiene infrastructure
• Strengthen healthcare systems and access
• Implement nutrition education programs
• Address poverty and food security issues
• Empower women and improve their status

**Policy Level:**
• Implement national nutrition programs
• Fortify staple foods with essential nutrients
• Provide social protection for vulnerable families
• Integrate nutrition services across sectors`
    },
    {
      id: 'impact-development',
      title: 'Impact on child development',
      content: `Stunting has far-reaching consequences that extend well beyond childhood:

**Physical Development:**
• Reduced adult height and body size
• Increased risk of obesity and chronic diseases later in life
• Compromised immune system function
• Higher mortality risk during childhood
• Reduced physical work capacity in adulthood

**Cognitive Development:**
• Delayed motor and language development
• Reduced cognitive abilities and IQ scores
• Poor academic performance and school outcomes
• Limited learning capacity and memory function
• Difficulty with problem-solving and critical thinking

**Economic Impact:**
• Reduced earning potential in adulthood (up to 20% lower wages)
• Lower productivity and economic contribution
• Increased healthcare costs throughout life
• Perpetuation of intergenerational poverty cycles
• Reduced national economic growth

**Social Consequences:**
• Limited educational and career opportunities
• Reduced quality of life and well-being
• Social stigma and discrimination
• Impact on mental health and self-esteem
• Reduced participation in community activities

**Long-term Effects:**
• Increased risk of non-communicable diseases
• Poor reproductive health outcomes
• Higher risk of pregnancy complications
• Transmission of malnutrition to next generation`
    },
    {
      id: 'global-indonesia-data',
      title: 'Global and Indonesia stunting data',
      content: `Stunting remains a significant global health challenge with concerning statistics:

**Global Statistics:**
• Approximately 149 million children under 5 are stunted worldwide (2020)
• 22% of children globally are affected by stunting
• 75% of stunted children live in Sub-Saharan Africa and South Asia
• Progress in reducing stunting has been slow but steady over the past decade

**Indonesia Specific Data:**
• Indonesia has one of the highest stunting rates in Southeast Asia
• National stunting prevalence: approximately 24.4% (2021)
• This affects about 5.3 million children under 5 years old
• Rural areas tend to have higher stunting rates than urban areas
• Eastern provinces generally show higher prevalence rates

**Regional Variations in Indonesia:**
• East Nusa Tenggara: ~35-40% stunting rate
• West Sulawesi: ~35% stunting rate
• Aceh: ~30-35% stunting rate
• Jakarta and Bali: Lower rates around 15-20%

**Trends and Progress:**
• Indonesia has shown gradual improvement over the past decade
• Government target: Reduce stunting to 14% by 2024
• Various national programs implemented including specific nutrition interventions
• Increased focus on the first 1,000 days of life programs
• Enhanced community-based nutrition programs

**Contributing Factors in Indonesia:**
• Geographic disparities and access to services
• Socioeconomic inequalities
• Cultural feeding practices
• Infrastructure challenges in remote areas`
    }
  ];

  return (
    <section className="py-16 bg-white text-[#0A192F]">
      <div className="max-w-6xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Understanding Stunting</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Learn more about stunting, its causes, prevention strategies, and impact on child development.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {accordionData.map((section) => (
            <div
              key={section.id}
              className="bg-gray-100 rounded-lg border border-gray-200 overflow-hidden transition-all duration-200 hover:border-gray-300"
            >
              {/* Accordion Header */}
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full px-6 py-4 text-left flex items-center justify-between text-[#0A192F] hover:bg-gray-200 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
              >
                <span className="font-medium text-lg">{section.title}</span>
                <div className="ml-4 flex-shrink-0">
                  {openSections[section.id] ? (
                    <ChevronUp className="h-5 w-5 text-blue-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-blue-500" />
                  )}
                </div>
              </button>

              {/* Accordion Content */}
              {openSections[section.id] && (
                <div className="px-6 pb-6">
                  <div className="border-t border-gray-200 pt-4">
                    <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                      {section.content}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
const ReadyToMonitorSection = () => (
  <section className="text-center py-16 bg-gradient-to-r from-[#05956b] to-[#0284c4] text-white">
    <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Monitor Your Child's Growth?</h2>
    <p className="text-white-700 max-w-2xl mx-auto mb-6">
      Start your assessment today and take the first step towards ensuring a healthy future for your child.
    </p>
    <button className="bg-neutral-50 hover:bg-neutral-300 text-white px-6 py-2 rounded-lg shadow">Start Assessment →</button>
  </section>
);

export default function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <StuntHelpSection />
      <UnderstandingStuntingAccordion />
      <ReadyToMonitorSection />
      <Footer />
    </div>
  );
}
