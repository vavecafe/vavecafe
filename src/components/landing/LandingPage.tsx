import React from 'react';
import { Bot, Brain, Rocket, Users, Code, Lightbulb, ArrowRight } from 'lucide-react';

const LandingPage = () => {
  const learningPaths = [
    {
      icon: <Lightbulb className="w-8 h-8 text-yellow-500" />,
      title: "Beginners Welcome",
      description: "Start your automation with simple, fun projects",
      action: "Start Learning",
      color: "bg-yellow-50",
      borderColor: "border-yellow-200"
    },
    {
      icon: <Bot className="w-8 h-8 text-purple-500" />,
      title: "Kids Corner",
      description: "Fun automation projects for young innovators",
      action: "Explore Fun Projects",
      color: "bg-purple-50",
      borderColor: "border-purple-200"
    },
    {
      icon: <Rocket className="w-8 h-8 text-blue-500" />,
      title: "Industry Solutions",
      description: "Real-world automation for your business",
      action: "See Solutions",
      color: "bg-blue-50",
      borderColor: "border-blue-200"
    }
  ];

  const features = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Learn by Doing",
      description: "Build real automations from day one"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Community Support",
      description: "Learn together, grow together"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI Integration",
      description: "Combine automation with AI power"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Learn Automation by
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> Doing</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            From kids to professionals, start building real automations today. 
            No complex theory - just hands-on learning that works.
          </p>
          
          {/* Action Buttons */}
          <div className="flex justify-center gap-4 mb-16">
            <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Start Building
            </button>
            <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition">
              Watch Demo
            </button>
          </div>
        </div>

        {/* Learning Paths */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {learningPaths.map((path, index) => (
            <div 
              key={index} 
              className={`p-6 rounded-xl border-2 ${path.color} ${path.borderColor} hover:scale-105 transition duration-300`}
            >
              <div className="mb-4">{path.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{path.title}</h3>
              <p className="text-gray-600 mb-4">{path.description}</p>
              <button className="flex items-center text-blue-600 hover:text-blue-700">
                {path.action}
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="inline-block p-3 bg-blue-100 rounded-full mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Community Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
          <p className="mb-6">Connect with learners, share your projects, and grow together</p>
          <button className="px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition">
            Join Discord
          </button>
        </div>
      </div>

      {/* Quick Start Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Start Building Now</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border-2 border-gray-100 rounded-lg p-6 hover:border-blue-200 transition">
              <div className="font-semibold mb-2">File Organizer</div>
              <p className="text-gray-600 text-sm mb-4">Build your first automation in 5 minutes</p>
              <button className="text-blue-600 text-sm hover:text-blue-700">
                Start Tutorial →
              </button>
            </div>
            <div className="border-2 border-gray-100 rounded-lg p-6 hover:border-blue-200 transition">
              <div className="font-semibold mb-2">Email Bot</div>
              <p className="text-gray-600 text-sm mb-4">Create an automated email assistant</p>
              <button className="text-blue-600 text-sm hover:text-blue-700">
                Start Tutorial →
              </button>
            </div>
            <div className="border-2 border-gray-100 rounded-lg p-6 hover:border-blue-200 transition">
              <div className="font-semibold mb-2">AI ChatBot</div>
              <p className="text-gray-600 text-sm mb-4">Build your first AI-powered bot</p>
              <button className="text-blue-600 text-sm hover:text-blue-700">
                Start Tutorial →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;