export default function About() {
  return (
    <div className="max-w-5xl mx-auto p-8 space-y-16 font-sans">

      {/* Hero Section */}
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-extrabold text-gray-900 tracking-tight">Hi, I'm Himanshu 👋</h1>
        <p className="text-xl text-gray-600">Engineering Student | Web Developer | AI/ML Enthusiast</p>
        <p className="text-md text-gray-500">SRM Institute Of Science And Technology , Chennai Kattankulathur</p>
      </div>

      {/* About Me Section */}
      <section className="bg-gradient-to-r from-blue-50 to-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
        <h2 className="text-3xl font-semibold mb-4 text-gray-900 border-b-2 border-sky-300 inline-block pb-1">About Me</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          I am passionate about building web applications, solving coding challenges, and learning cutting-edge technologies like AI and Machine Learning.
          I enjoy creating projects that have real-world impact and help me grow as a software engineer. My core programming language is <span className="font-semibold text-orange-600">Java</span>.
        </p>
      </section>

      {/* Skills Section */}
      <section>
        <h2 className="text-3xl font-semibold mb-6 text-gray-900 text-center border-b-2 border-sky-300 inline-block pb-1">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {['Java','Java Backend', 'C++', 'Python', 'React', 'Spring Boot', 'SQL', 'Tailwind CSS', 'DSA', 'AI/ML' , 'Spring FrameWork'].map(skill => (
            <span
              key={skill}
              className={`px-5 py-2 rounded-full font-medium shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 ${
                skill === 'Java' ? 'bg-orange-100 text-orange-700' : 'bg-sky-100 text-sky-700'
              }`}
            >
              {skill} {skill === 'Java' && <span className="ml-1 text-xs font-semibold bg-orange-200 text-orange-800 px-2 py-0.5 rounded-full">Core</span>}
            </span>
          ))}
        </div>
      </section>
          {/* CGPA Section */}
<section className="max-w-4xl mx-auto mb-12 bg-white/40 backdrop-blur-md p-8 rounded-3xl shadow-lg text-center">
  <h2 className="text-3xl font-bold mb-4 text-gray-900">Academic Performance</h2>
  <p className="text-xl text-gray-800">1st Year CGPA: <span className="font-semibold text-indigo-600">8.8</span></p>
</section>


         {/* Certificates Section */}
<section>
  <h2 className="text-3xl font-semibold mb-6 text-gray-900 text-center border-b-2 border-sky-300 inline-block pb-1">
    Certificates
  </h2>

  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">

    {/* First Coursera Certificate */}
    <a
      href="https://coursera.org/share/3b2722ffa10229337d6ef75361d8e141"
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 text-center"
    >
      <h3 className="text-xl font-semibold text-gray-900 mb-2">
        Machine Learning by Andrew Ng
      </h3>
      <p className="text-gray-700 text-sm mb-4">
        Completed the Machine Learning course on Coursera.
      </p>
      <button className="bg-sky-500 text-white px-4 py-2 rounded-full hover:bg-sky-600 transition">
        View Certificate
      </button>
    </a>

    {/* Second Coursera Certificate */}
    <a
      href="https://coursera.org/share/a03afded9677aa0a50f037469e675881"
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 text-center"
    >
      <h3 className="text-xl font-semibold text-gray-900 mb-2">
        Machine Learning by Andrew Ng (Alternate)
      </h3>
      <p className="text-gray-700 text-sm mb-4">
        Completed the Machine Learning course on Coursera.
      </p>
      <button className="bg-sky-500 text-white px-4 py-2 rounded-full hover:bg-sky-600 transition">
        View Certificate
      </button>
    </a>

    {/* Udemy LLAMA Certificate */}
    <a
      href="https://udemy-certificate.s3.amazonaws.com/image/UC-a87c6303-f174-4eb7-a615-fbc4bb8a2fcf.jpg"
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 text-center"
    >
      <h3 className="text-xl font-semibold text-gray-900 mb-2">
        LLAMA by Udemy
      </h3>
      <p className="text-gray-700 text-sm mb-4">
        Completed the LLAMA course on Udemy.
      </p>
      <button className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition">
        View Certificate
      </button>
    </a>

    {/* NPTEL C++ OOPs Certificate */}
    <a
      href="https://archive.nptel.ac.in/content/noc/NOC25/SEM1/Ecertificates/106/noc25-cs34/Course/NPTEL25CS34S64320762504307836.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 text-center"
    >
      <h3 className="text-xl font-semibold text-gray-900 mb-2">
        C++ OOPs by NPTEL
      </h3>
      <p className="text-gray-700 text-sm mb-4">
        Completed the Fundamentals of Object-Oriented Programming course (Elite Certificate).
      </p>
      <button className="bg-sky-500 text-white px-4 py-2 rounded-full hover:bg-sky-600 transition">
        View Certificate
      </button>
    </a>

  </div>
</section>



      {/* Projects Section */}
      <section>
        <h2 className="text-3xl font-semibold mb-6 text-gray-900 text-center border-b-2 border-sky-300 inline-block pb-1">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Food Waste Management</h3>
            <p className="text-gray-700">
              A project aimed at reducing food wastage. <span className="italic text-gray-500">Currently working on this project.</span>
            </p>
          </div>
          <div className="bg-white p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Dokify</h3>
            <p className="text-gray-700">
              A smart notes management system for studentsTo manage their Assignments <span className="italic text-gray-500">Currently under development.</span>
            </p>
          </div>
        </div>
      </section>

          
          





      {/* Contact Section */}
      <section className="bg-gradient-to-r from-blue-50 to-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
        <h2 className="text-3xl font-semibold mb-4 text-gray-900 border-b-2 border-sky-300 inline-block pb-1">Contact</h2>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
          <p className="text-gray-700 text-lg space-y-1">
            📧 Email: <a href="mailto:baggahimanshu311@gmail.com" className="text-sky-500 hover:underline">baggahimanshu311@gmail.com</a><br/>
            🔗 GitHub: <a href="https://github.com/TheBugHunter-HimanshuBagga" className="text-sky-500 hover:underline">TheBugHunter-HimanshuBagga</a><br/>
            🔗 LinkedIn: <a href="https://www.linkedin.com/in/himanshu-bagga-30b747323/" className="text-sky-500 hover:underline">himanshu-bagga-30b747323</a>
          </p>
        </div>
      </section>

    </div>
  );
}
