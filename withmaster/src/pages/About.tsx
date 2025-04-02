function About() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            About Our Company
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
            Learn more about who we are and what we stand for.
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
          {/* Image + Text Section */}
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <img
                className="h-96 w-full object-cover md:w-96"
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Our team working together"
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-blue-600 font-semibold">Our Story</div>
              <h2 className="mt-2 text-2xl font-bold text-gray-900">Founded in 2020</h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                We started as a small team of passionate individuals with a vision to create meaningful digital experiences. 
                Today, we've grown into a full-service agency serving clients worldwide while staying true to our core values.
              </p>
              <div className="mt-6">
                <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-700 transition duration-300">
                  Meet Our Team
                </button>
              </div>
            </div>
          </div>

          {/* Mission Section */}
          <div className="px-8 py-12 bg-gray-50">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Our Mission</h2>
            <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto leading-relaxed">
              To empower businesses through innovative technology solutions that drive growth, 
              foster connections, and make a positive impact on people's lives.
            </p>
          </div>

          {/* Values Section */}
          <div className="px-8 py-12">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Core Values</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {[
                {
                  title: "Innovation",
                  description: "We embrace creativity and continuously seek better ways to solve problems.",
                  icon: "💡"
                },
                {
                  title: "Integrity",
                  description: "We do what's right, even when no one is watching.",
                  icon: "🤝"
                },
                {
                  title: "Excellence",
                  description: "We're committed to delivering exceptional quality in everything we do.",
                  icon: "🏆"
                }
              ].map((value, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div className="bg-blue-600 text-white px-8 py-12">
            <div className="max-w-7xl mx-auto grid grid-cols-2 gap-8 md:grid-cols-4 text-center">
              <div>
                <div className="text-4xl font-bold">50+</div>
                <div className="mt-2 text-blue-100">Clients</div>
              </div>
              <div>
                <div className="text-4xl font-bold">24</div>
                <div className="mt-2 text-blue-100">Team Members</div>
              </div>
              <div>
                <div className="text-4xl font-bold">98%</div>
                <div className="mt-2 text-blue-100">Satisfaction</div>
              </div>
              <div>
                <div className="text-4xl font-bold">150+</div>
                <div className="mt-2 text-blue-100">Projects</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;