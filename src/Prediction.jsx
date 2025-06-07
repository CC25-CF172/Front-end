import React, { useState } from 'react';
import Navbar from "./pages/components/Navbar";
import Footer from "./pages/components/Footer";
import { API_BASE_URL } from "./api";



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
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');
  const [showRecommendations, setShowRecommendations] = useState(false); // State to control recommendations visibility

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setResult(null);

    const payload = {
      gender: formData.childGender === "male" ? "M" : "F",
      age_months: Number(formData.ageMonths),
      birth_weight_kg: Number(formData.birthWeight),
      birth_length_cm: Number(formData.birthLength),
      current_weight_kg: Number(formData.currentWeight),
      current_length_cm: Number(formData.currentLength),
      exclusive_breastfeeding: formData.exclusiveBreastfeeding === "Yes" ? "Yes" : "No" // pastikan hanya "yes" atau "no"
    };

    console.log("Payload to API:", payload);

    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`${API_BASE_URL}/api/v1/stunting`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(payload)
      });
      const data = await response.json();
      if (response.ok && data.success) {
        setResult(data.data);
      } else {
        setError(data.message || "Prediction failed.");
        console.error("API error:", data);
      }
    } catch (err) {
      setError("Network error. Please try again.");
      console.error("Network error:", err);
    }
    setLoading(false);
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
                    name="childGender" // <-- sudah sesuai dengan state
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
                disabled={loading}
              >
                {loading ? "Processing..." : "Get Assessment"}
              </button>
            </div>
          </form>

          {/* Hasil Prediksi */}
          {error && <div className="mt-6 text-red-600">{error}</div>}
          {result && (
            <div className="mt-8 bg-white rounded-lg shadow-lg border p-6">
              {/* Assessment Result Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-green-100 p-2 rounded-full">
                  <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-xl font-bold">Assessment Result</h2>
                  <div className="flex items-center gap-2">
                    <span className={`font-medium ${
                      result.height_for_age_z_score > -1.0 ? 'text-green-600' :
                      result.height_for_age_z_score > -2.0 ? 'text-yellow-700' :
                      result.height_for_age_z_score > -3.0 ? 'text-yellow-600' :
                      'text-red-600'
                    }`}>
                      {result.height_for_age_z_score > -1.0 ? 'Normal' :
                       result.height_for_age_z_score > -2.0 ? 'Mild' :
                       result.height_for_age_z_score > -3.0 ? 'Moderate' :
                       'Severe'}
                    </span>
                    <span className="text-gray-600">•</span>
                    <span className="text-gray-600">Z-score: {result.height_for_age_z_score.toFixed(2)}</span>
                  </div>
                </div>
                <button className="ml-auto bg-blue-50 text-blue-600 px-4 py-2 rounded-lg flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download PDF
                </button>
              </div>

              {/* Status Bar */}
              <div className="relative h-2 bg-gray-200 rounded-full mb-10"> {/* Increased bottom margin */}
                <div 
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-full" 
                  style={{width: '100%'}}
                />
                <div className="absolute -bottom-8 left-0 text-xs">
                  <span className="text-red-600 block">Severe</span>
                  <span className="text-gray-500 text-[10px]">Z-score: &lt; -3.0</span>
                </div>
                <div className="absolute -bottom-8 left-1/3 text-xs">
                  <span className="text-yellow-600 block">Moderate</span>
                  <span className="text-gray-500 text-[10px]">Z-score: -3.0 to -2.0</span>
                </div>
                <div className="absolute -bottom-8 left-2/3 text-xs">
                  <span className="text-yellow-700 block">Mild</span>
                  <span className="text-gray-500 text-[10px]">Z-score: -2.0 to -1.0</span>
                </div>
                <div className="absolute -bottom-8 right-0 text-xs text-right">
                  <span className="text-green-600 block">Normal</span>
                  <span className="text-gray-500 text-[10px]">Z-score: {'>'} -1.0</span>
                </div>
              </div>

              {/* Key Observations */}
              <div className="mt-8">
                <h3 className="font-semibold text-lg mb-2">Key Observations</h3>
                <p className="text-gray-700 mb-4">
                  Your child's growth parameters are within normal range for their age and sex. 
                  The height-for-age measurement shows healthy development.
                </p>
              </div>

              {/* Detailed Recommendations */}
              <div className="mt-6">
                <button 
                  className="flex items-center justify-between w-full text-left font-semibold mb-4"
                  onClick={() => setShowRecommendations(!showRecommendations)}
                >
                  {showRecommendations ? "Hide" : "Show"} detailed recommendations
                  <svg className="w-5 h-5 transform transition-transform duration-200" 
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    style={{ transform: showRecommendations ? 'rotate(180deg)' : '' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Recommendations Sections */}
                {showRecommendations && (
                  <div className="space-y-6">
                    {/* Nutritional Recommendations */}
                    <div className="pl-4 border-l-4 border-green-400">
                      <h4 className="font-semibold mb-2">1. Nutritional Recommendations</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Continue providing a balanced diet with variety of foods</li>
                        <li>• Ensure adequate calcium intake for ongoing bone development</li>
                        <li>• Maintain regular meal schedules with healthy snacks as needed</li>
                        <li>• Continue regular growth monitoring as recommended by your healthcare provider</li>
                        <li>• Keep encouraging healthy eating habits and physical activity</li>
                      </ul>
                    </div>

                    {/* Parental Care Tips */}
                    <div className="pl-4 border-l-4 border-blue-400">
                      <h4 className="font-semibold mb-2">2. Parental Care Tips</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Continue regular pediatric check-ups as recommended</li>
                        <li>• Promote positive mealtime environment without pressure</li>
                        <li>• Encourage family meals and healthy eating habits</li>
                        <li>• Balance structured activities with free play time</li>
                        <li>• Be a healthy role model for eating and activity patterns</li>
                      </ul>
                    </div>

                    {/* Medical Recommendations */}
                    <div className="pl-4 border-l-4 border-purple-400">
                      <h4 className="font-semibold mb-2">3. Medical Recommendations</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Maintain standard well-child visit schedule</li>
                        <li>• Continue normal growth and development monitoring</li>
                        <li>• Update vaccinations according to recommended schedule</li>
                        <li>• Discuss nutrition at regular pediatric check-ups</li>
                        <li>• No special interventions required beyond standard care</li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>

              {/* Disclaimer */}
              <div className="mt-8 text-xs text-gray-500 italic">
                <strong>Disclaimer:</strong> This tool provides a simulated assessment based on simplified calculations 
                and is for educational purposes only. Always consult with healthcare professionals for accurate medical advice.
              </div>
            </div>
          )}
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