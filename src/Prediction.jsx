import React, { useState } from 'react';
import { User, Moon, Sun } from 'lucide-react';
import Navbar from "./pages/components/Navbar";
import Footer from "./pages/components/Footer";

// Main Prediction Component
const PredictionPage = () => {
  const [formData, setFormData] = useState({
    childGender: '',
    ageMonths: '',
    birthWeight: '',
    birthLength: '',
    currentWeight: '',
    currentLength: '',
    exclusiveBreastfeeding: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    alert('Assessment submitted! (This is a demo)');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Stunting Prediction Tool</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Enter your child's measurements and information to receive a personalized assessment of potential 
            stunting risk. Our tool uses WHO growth standards to evaluate height-for-age and other critical 
            parameters.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Child Growth Assessment</h2>
              
          <form onSubmit={handleSubmit}>
            <div className="space-y-6">
              {/* Basic Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Child's Gender <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="childSex"
                    value={formData.childGender}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Age (months) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    name="ageMonths"
                    value={formData.ageMonths}
                    onChange={handleInputChange}
                    placeholder="e.g., 24"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    min="0"
                    max="60"
                    required
                  />
                  <p className="text-xs text-gray-500 mt-1">Enter age between 0-60 months</p>
                </div>
              </div>

              {/* Birth Measurements */}
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">BIRTH MEASUREMENTS</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Birth Weight (kg) <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      name="birthWeight"
                      value={formData.birthWeight}
                      onChange={handleInputChange}
                      placeholder="e.g., 3.2"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      step="0.1"
                      min="0.5"
                      max="6"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Birth Length (cm) <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      name="birthLength"
                      value={formData.birthLength}
                      onChange={handleInputChange}
                      placeholder="e.g., 50"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      min="30"
                      max="70"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Current Measurements */}
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">CURRENT MEASUREMENTS</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Current Weight (kg) <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      name="currentWeight"
                      value={formData.currentWeight}
                      onChange={handleInputChange}
                      placeholder="e.g., 12.5"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      step="0.1"
                      min="1"
                      max="50"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Current Length/Height (cm) <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      name="currentLength"
                      value={formData.currentLength}
                      onChange={handleInputChange}
                      placeholder="e.g., 85"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      min="40"
                      max="150"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Nutrition History */}
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">NUTRITION HISTORY</h3>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Exclusive Breastfeeding for first 6 months <span className="text-red-500">*</span>
                  </label>
                  <div className="flex space-x-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="exclusiveBreastfeeding"
                        value="yes"
                        checked={formData.exclusiveBreastfeeding === 'yes'}
                        onChange={handleInputChange}
                        className="mr-2 text-blue-600"
                        required
                      />
                      Yes
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="exclusiveBreastfeeding"
                        value="no"
                        checked={formData.exclusiveBreastfeeding === 'no'}
                        onChange={handleInputChange}
                        className="mr-2 text-blue-600"
                        required
                      />
                      No
                    </label>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200"
              >
                Get Assessment
              </button>
            </div>
          </form>
          </div>
          {/* End of Form Section */}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* About This Tool */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">About This Tool</h3>
              <p className="text-gray-600 text-sm mb-4">
                This prediction tool provides an educational assessment based on World Health 
                Organization (WHO) child growth standards. It evaluates your child's growth pattern to 
                identify potential stunting risks.
              </p>
              <p className="text-gray-600 text-sm mb-4">
                For children under 5 years old, stunting is defined as height-for-age more than two 
                standard deviations below the WHO Child Growth Standards median.
              </p>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                <p className="text-yellow-800 text-sm">
                  <strong>Note:</strong> This tool is for educational purposes and 
                  does not replace professional medical advice. Always consult healthcare professionals for 
                  accurate diagnosis and treatment.
                </p>
              </div>
            </div>

            {/* Measurement Tips */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Measurement Tips</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-medium">1</span>
                  <p className="text-gray-600 text-sm">
                    Measure height/length with child lying flat (under 2 years) or standing (over 2 years)
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-medium">2</span>
                  <p className="text-gray-600 text-sm">
                    Use a digital scale for weight measurements for better accuracy
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-medium">3</span>
                  <p className="text-gray-600 text-sm">
                    Take measurements at the same time of day for consistency
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PredictionPage;