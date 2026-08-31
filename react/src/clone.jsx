import React from "react";

function Clone() {
  return (
    <div className="min-h-screen bg-[#6768a5] flex flex-col">

      {/* ================= HEADER ================= */}
      <header className="h-12 w-full px-8 bg-[#eef1ee] flex justify-between items-center">

        <h1 className="text-xl font-bold">
          Web KO Name!!
        </h1>

        <ul className="flex gap-8 list-none cursor-pointer">
          <li>Courses</li>
          <li>Communityy</li>
          <li>Blogg</li>
        </ul>

        <div className="flex gap-2">
          <button
            className="px-4 py-2 border-2 border-black rounded-lg cursor-pointer hover:bg-green-600 hover:text-white"
          >
            Login
          </button>

          <button
            className="px-4 py-2 border-2 border-black rounded-lg cursor-pointer hover:bg-green-600 hover:text-white"
          >
            Sign Up
          </button>
        </div>

      </header>


      {/* ================= HERO SECTION ================= */}
      <section className="flex flex-col items-center">

        <p className="mt-10 px-2 text-base text-white bg-purple-600 border-2 border-black rounded-lg cursor-pointer hover:bg-[#6768a5]">
          10000+ students already applied!!
        </p>

        <h1 className="text-white text-5xl font-bold mt-5">
          Learn Without Limits.
        </h1>

        <h1 className="text-[#d37676] text-5xl font-bold">
          Grow Without Boundaries.
        </h1>

        <p className="mt-5 text-white text-center">
          Access world-class courses taught by industry experts.
          <br />
          <span className="ml-7">
            Build real skills and advance your career.
          </span>
        </p>


        {/* Hero Buttons */}
        <div className="mt-5 flex gap-3">

          <button
            className="mt-10 px-4 py-2 text-base bg-red-600 text-white border-2 border-black rounded-lg cursor-pointer hover:bg-red-700"
          >
            Browse All Courses
          </button>

          <button
            className="mt-10 px-4 py-2 text-base text-white bg-[#040318] border-2 border-black rounded-lg cursor-pointer hover:bg-black"
          >
            Watch Demo
          </button>

        </div>


        {/* ================= STATS ================= */}
        <div className="w-full border-t border-[#292a40] flex justify-center gap-16 pt-8 mt-20">

          <div className="text-center">
            <h3 className="text-3xl font-bold text-white">
              50+
            </h3>
            <p className="text-base text-[#0e0f16] mt-1">
              COURSES
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-3xl font-bold text-white">
              15K+
            </h3>
            <p className="text-base text-[#0e0f16] mt-1">
              STUDENTS
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-3xl font-bold text-white">
              98%
            </h3>
            <p className="text-base text-[#0e0f16] mt-1">
              SUCCESS RATE
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-3xl font-bold text-white">
              4.9
            </h3>
            <p className="text-base text-[#0e0f16] mt-1">
              AVERAGE RATING
            </p>
          </div>

        </div>

      </section>


      {/* ================= FEATURED COURSES ================= */}
      <section className="bg-white px-[8%] py-16 text-[#17182c]">

        <div className="flex justify-between items-center mb-10">

          <div>
            <h2 className="text-3xl font-bold">
              Featured Courses
            </h2>

            <p className="text-gray-500 mt-2">
              Hand-picked for your career growth
            </p>
          </div>

          <a
            
            className="px-8 py-2 border-2 border-black rounded-lg cursor-pointer hover:bg-black hover:text-white"
          >
            View All Courses
          </a>

        </div>


        {/* Course Cards */}
        <div className="grid grid-cols-3 gap-6">


          {/* Card 1 */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">

            <div className="h-36 relative flex justify-center items-center text-4xl text-white bg-gradient-to-r from-blue-500 to-purple-500">

              🚀

              <span className="absolute bottom-2 left-2 bg-black/70 text-white text-[9px] px-2 py-1 rounded">
                BEGINNER
              </span>

              <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                Bestseller
              </span>

            </div>

            <div className="p-5">

              <h3 className="text-lg font-bold">
                Complete React Developer Bootcamp 2026
              </h3>

              <p className="text-gray-500 mt-2">
                Yujal Khulal Basnet
              </p>

              <div className="flex justify-between mt-4 text-sm">
                <span>⭐ 4.9</span>
                <span>👥 2.5K Students</span>
              </div>

              <div className="mt-5">
                <span className="text-xl font-bold">
                  NPR 4,999
                </span>

                <span className="ml-3 text-gray-400 line-through">
                  NPR 6,999
                </span>
              </div>

            </div>

          </div>


          {/* Card 2 */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">

            <div className="h-36 relative flex justify-center items-center text-4xl text-white bg-gradient-to-r from-green-400 to-green-700">

              🟢

              <span className="absolute bottom-2 left-2 bg-black/70 text-white text-[9px] px-2 py-1 rounded">
                INTERMEDIATE
              </span>

              <span className="absolute top-2 right-2 bg-orange-500 text-white text-xs px-2 py-1 rounded">
                Hot
              </span>

            </div>

            <div className="p-5">

              <h3 className="text-lg font-bold">
                Python for Data Science & Machine Learning
              </h3>

              <p className="text-gray-500 mt-2">
                Yogesh Phuyal
              </p>

              <div className="flex justify-between mt-4 text-sm">
                <span>⭐ 4.8</span>
                <span>👥 1.8K Students</span>
              </div>

              <div className="mt-5">
                <span className="text-xl font-bold">
                  NPR 5,499
                </span>

                <span className="ml-3 text-gray-400 line-through">
                  NPR 7,999
                </span>
              </div>

            </div>

          </div>


          {/* Card 3 */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">

            <div className="h-36 relative flex justify-center items-center text-4xl text-white bg-gradient-to-r from-pink-400 to-purple-500">

              🎨

              <span className="absolute bottom-2 left-2 bg-black/70 text-white text-[9px] px-2 py-1 rounded">
                ALL LEVELS
              </span>

              <span className="absolute top-2 right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded">
                New
              </span>

            </div>

            <div className="p-5">

              <h3 className="text-lg font-bold">
                UI/UX Design Class with Figma
              </h3>

              <p className="text-gray-500 mt-2">
                Ujwal Guragain
              </p>

              <div className="flex justify-between mt-4 text-sm">
                <span>⭐ 4.7</span>
                <span>👥 1.2K Students</span>
              </div>

              <div className="mt-5">
                <span className="text-xl font-bold">
                  NPR 3,999
                </span>

                <span className="ml-3 text-gray-400 line-through">
                  NPR 5,999
                </span>
              </div>

            </div>

          </div>


          {/* Card 4 */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">

            <div className="h-36 relative flex justify-center items-center text-4xl text-white bg-gradient-to-r from-yellow-400 to-orange-500">

              ⚡

              <span className="absolute bottom-2 left-2 bg-black/70 text-white text-[9px] px-2 py-1 rounded">
                INTERMEDIATE
              </span>

            </div>

            <div className="p-5">

              <h3 className="text-lg font-bold">
                Node.js & Express API Development
              </h3>

              <p className="text-gray-500 mt-2">
                Sachin Khadka
              </p>

              <div className="flex justify-between mt-4 text-sm">
                <span>⭐ 4.9</span>
                <span>👥 980 Students</span>
              </div>

              <div className="mt-5">
                <span className="text-xl font-bold">
                  NPR 4,499
                </span>

                <span className="ml-3 text-gray-400 line-through">
                  NPR 6,499
                </span>
              </div>

            </div>

          </div>


          {/* Card 5 */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">

            <div className="h-36 relative flex justify-center items-center text-4xl text-white bg-gradient-to-r from-indigo-400 to-blue-600">

              📈

              <span className="absolute bottom-2 left-2 bg-black/70 text-white text-[9px] px-2 py-1 rounded">
                BEGINNER
              </span>

            </div>

            <div className="p-5">

              <h3 className="text-lg font-bold">
                Digital Marketing 101: Social Media
              </h3>

              <p className="text-gray-500 mt-2">
                Roshan Khatri
              </p>

              <div className="flex justify-between mt-4 text-sm">
                <span>⭐ 4.6</span>
                <span>👥 1.5K Students</span>
              </div>

              <div className="mt-5">
                <span className="text-xl font-bold">
                  NPR 2,999
                </span>

                <span className="ml-3 text-gray-400 line-through">
                  NPR 4,999
                </span>
              </div>

            </div>

          </div>


          {/* Card 6 */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">

            <div className="h-36 relative flex justify-center items-center text-4xl text-white bg-gradient-to-r from-cyan-400 to-blue-600">

              ☁️

              <span className="absolute bottom-2 left-2 bg-black/70 text-white text-[9px] px-2 py-1 rounded">
                ALL LEVELS
              </span>

              <span className="absolute top-2 right-2 bg-purple-500 text-white text-xs px-2 py-1 rounded">
                Trending
              </span>

            </div>

            <div className="p-5">

              <h3 className="text-lg font-bold">
                AWS Cloud Practitioner Certification
              </h3>

              <p className="text-gray-500 mt-2">
                Sagun Basnet
              </p>

              <div className="flex justify-between mt-4 text-sm">
                <span>⭐ 4.8</span>
                <span>👥 2.1K Students</span>
              </div>

              <div className="mt-5">
                <span className="text-xl font-bold">
                  NPR 5,999
                </span>

                <span className="ml-3 text-gray-400 line-through">
                  NPR 8,999
                </span>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= CATEGORIES ================= */}
      <section className="w-full my-20 px-[8%] ">

        <div className="mb-9">

          <h2 className="text-4xl font-bold text-[#111] mb-2">
            Browse Categories
          </h2>

          <p className="text-gray-500 text-[15px]">
            Explore courses across all domains
          </p>

        </div>


        <div className="grid grid-cols-4 gap-5">

          <div className="p-8 rounded-2xl cursor-pointer transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="text-4xl mb-5">💻</div>
            <h3 className="text-lg font-bold mb-2">
              Web Development
            </h3>
            <p className="text-black-500 text-sm">
              125 Courses
            </p>
          </div>

          <div className="p-8 rounded-2xl cursor-pointer transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="text-4xl mb-5">📊</div>
            <h3 className="text-lg font-bold mb-2">
              Data Science
            </h3>
            <p className="text-black-500 text-sm">
              85 Courses
            </p>
          </div>

          <div className="p-8 rounded-2xl cursor-pointer transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="text-4xl mb-5">🎨</div>
            <h3 className="text-lg font-bold mb-2">
              UI/UX Design
            </h3>
            <p className="text-black-500 text-sm">
              73 Courses
            </p>
          </div>

          <div className="p-8 rounded-2xl cursor-pointer transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="text-4xl mb-5">☁️</div>
            <h3 className="text-lg font-bold mb-2">
              Cloud & DevOps
            </h3>
            <p className="text-black-500 text-sm">
              54 Courses
            </p>
          </div>

          <div className="p-8 rounded-2xl cursor-pointer transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="text-4xl mb-5">📱</div>
            <h3 className="text-lg font-bold mb-2">
              Digital Marketing
            </h3>
            <p className="text-black-500 text-sm">
              91 Courses
            </p>
          </div>

          <div className="p-8 rounded-2xl cursor-pointer transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="text-4xl mb-5">🔐</div>
            <h3 className="text-lg font-bold mb-2">
              Cyber Security
            </h3>
            <p className="text-black-500 text-sm">
              67 Courses
            </p>
          </div>

          <div className="p-8 rounded-2xl cursor-pointer transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="text-4xl mb-5">📲</div>
            <h3 className="text-lg font-bold mb-2">
              Mobile Development
            </h3>
            <p className="text-black-500 text-sm">
              59 Courses
            </p>
          </div>

          <div className="p-8 rounded-2xl cursor-pointer transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="text-4xl mb-5">🤖</div>
            <h3 className="text-lg font-bold mb-2">
              AI & Machine Learning
            </h3>
            <p className="text-gray-500 text-sm">
              32 Courses
            </p>
          </div>

        </div>

      </section>


      {/* ================= TRAINER ================= */}
      <section className="py-24 px-5 bg-white flex justify-center items-center text-center">

        <div className="max-w-3xl">

          <h2 className="text-5xl font-bold leading-tight text-[#17172f] mb-5">
            Teach What You Know.
            <br />
            Earn What You Deserve.
          </h2>

          <p className="text-gray-500 leading-8 mb-9">
            Join our trainer community and start earning by sharing
            your expertise with thousands of eager learners.
          </p>

          <div className="flex justify-center gap-5">

            <button className="bg-[#ff4f7b] text-white border-none px-8 py-4 rounded-lg text-base cursor-pointer transition hover:bg-[#e33d69] hover:-translate-y-1">
              Become a Trainer →
            </button>

            <button className="bg-white border border-gray-300 px-8 py-4 rounded-lg cursor-pointer transition hover:bg-[#17172f] hover:text-white">
              Learn More
            </button>

          </div>

        </div>

      </section>


      {/* ================= FOOTER ================= */}
      <footer className="bg-[#17172f] text-white text-center px-5 pt-20 pb-8">

        <div>

          <h2 className="text-5xl font-bold mb-5">
            Ready to Start Your Journey?
          </h2>

          <p className="text-[#c9c9d4] leading-8">
            Join thousands of learners already advancing their careers
            <br />
            with LearnUp.
          </p>

          <button className="mt-9 bg-[#ff4f7b] text-white border-none px-9 py-4 rounded-lg text-base cursor-pointer transition hover:bg-[#e43d68] hover:-translate-y-1">
            Get Started — It's Free
          </button>

        </div>

        <hr className="border-0 h-px bg-[#3c3c58] my-16 mx-auto w-[90%]" />

        <p className="text-sm text-[#9f9fb2]">
          Made With Love By Yujal Khulal Basnet. All Rights Reserved.
        </p>

      </footer>

    </div>
  );
}

export default Clone;