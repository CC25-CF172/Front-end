import React, { useState } from 'react';
import Navbar from './pages/components/Navbar';
import Footer from './pages/components/Footer';
import { Calendar, Clock, Search } from 'lucide-react';

const EducationalResources = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const tabs = ['All', 'Research', 'Community', 'Education', 'Nutrition', 'Policy'];

  const articles = [
    {
      id: 1,
      category: 'Research',
      image: '/api/placeholder/400/250',
      date: 'May 10, 2025',
      readTime: '5 min read',
      title: 'New Research Links Gut Health to Stunting Prevention',
      description: 'Researchers discover important connections between microbiome health and child growth patterns that could lead to new prevention strategies.',
      categoryColor: 'bg-blue-500'
    },
    {
      id: 2,
      category: 'Community',
      image: '/api/placeholder/400/250',
      date: 'May 7, 2025',
      readTime: '4 min read',
      title: 'Nutrition Programs Show Success in Rural Communities',
      description: 'Community-based nutrition education programs are making significant impact in reducing stunting rates in rural Indonesian villages.',
      categoryColor: 'bg-teal-500'
    },
    {
      id: 3,
      category: 'Education',
      image: '/api/placeholder/400/250',
      date: 'May 5, 2025',
      readTime: '6 min read',
      title: 'The First 1000 Days: Critical Window for Child Development',
      description: 'Why the period from conception to a child\'s second birthday is crucial for preventing stunting and ensuring optimal development.',
      categoryColor: 'bg-yellow-500'
    },
    {
      id: 4,
      category: 'Education',
      image: '/api/placeholder/400/250',
      date: 'May 5, 2025',
      readTime: '6 min read',
      title: 'The First 1000 Days: Critical Window for Child Development',
      description: 'Why the period from conception to a child\'s second birthday is crucial for preventing stunting and ensuring optimal development.',
      categoryColor: 'bg-yellow-500'
    },
    {
      id: 5,
      category: 'Nutrition',
      image: '/api/placeholder/400/250',
      date: 'May 5, 2025',
      readTime: '6 min read',
      title: 'The First 1000 Days: Critical Window for Child Development',
      description: 'Why the period from conception to a child\'s second birthday is crucial for preventing stunting and ensuring optimal development.',
      categoryColor: 'bg-green-500'
    },
    {
      id: 6,
      category: 'Policy',
      image: '/api/placeholder/400/250',
      date: 'May 5, 2025',
      readTime: '6 min read',
      title: 'The First 1000 Days: Critical Window for Child Development',
      description: 'Why the period from conception to a child\'s second birthday is crucial for preventing stunting and ensuring optimal development.',
      categoryColor: 'bg-green-500'
    }
  ];

  const filteredArticles = articles.filter(article => 
    activeTab === 'All' || article.category === activeTab
  );

  return (
    <div className="min-h-screen bg-gray-50">
        <Navbar />
      {/* Hero Section with Gradient */}
      <div className="bg-gradient-to-br from-blue-500 via-teal-500 to-green-500 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Educational Resources
          </h1>
          <p className="text-lg md:text-xl mb-8 text-blue-50 max-w-3xl mx-auto">
            Explore our collection of articles, videos, and resources to learn more about child growth, 
            nutrition, and stunting prevention.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
            />
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === tab
                  ? 'bg-blue-500 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article) => (
            <div key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              {/* Article Image */}
              <div className="relative h-48 bg-gray-200">
                {article.id === 1 && (
                  <div className="w-full h-full bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center">
                    <div className="w-32 h-20 bg-amber-300 rounded-lg flex items-center justify-center">
                      <div className="w-16 h-12 bg-amber-400 rounded"></div>
                    </div>
                  </div>
                )}
                {article.id === 2 && (
                  <div className="w-full h-full bg-gradient-to-br from-teal-100 to-teal-200 flex items-center justify-center">
                    <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <div className="w-16 h-16 bg-teal-400 rounded-full"></div>
                    </div>
                  </div>
                )}
                {article.id === 3 && (
                  <div className="w-full h-full bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                    <div className="text-6xl">👶</div>
                  </div>
                )}
                {article.id === 4 && (
                  <div className="w-full h-full bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                    <div className="text-6xl">👶</div>
                  </div>
                )}
                {article.id === 5 && (
                  <div className="w-full h-full bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                    <div className="text-6xl">👶</div>
                  </div>
                )}
                {article.id === 6 && (
                  <div className="w-full h-full bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                    <div className="text-6xl">👶</div>
                  </div>
                )}
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`${article.categoryColor} text-white px-3 py-1 rounded-full text-xs font-medium`}>
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Article Content */}
              <div className="p-6">
                {/* Date and Read Time */}
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {article.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {article.readTime}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3 leading-tight">
                  {article.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {article.description}
                </p>

                {/* Read More Link */}
                <button className="text-blue-500 hover:text-blue-600 font-medium text-sm transition-colors">
                  Read more
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-colors">
            Load More Articles
          </button>
        </div>
      </div>
        <Footer />
    </div>
    
  );
};

export default EducationalResources;