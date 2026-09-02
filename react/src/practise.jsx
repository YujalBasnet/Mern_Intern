import React from 'react'

function Practise() {
  return (
    <div className="min-h-screen bg-[#f7f8fc]">

      {/* ================= HEADER ================= */}
      <header className="h-12 w-full bg-white flex items-center px-8 border-b border-[#ddd]">

        <h1 className="text-[22px] font-bold">
          Learn <span className="text-[#ed3d68]">Up</span>
        </h1>

        <ul className="flex list-none gap-14 ml-[410px] text-xs">
          <li className="cursor-pointer">Courses</li>
          <li className="cursor-pointer">Community</li>
          <li className="cursor-pointer">Blog</li>
        </ul>

      </header>

      {/* ================= MAIN LAYOUT ================= */}
      <div className="flex min-h-[calc(100vh-48px)]">

        {/* ================= SIDEBAR ================= */}
        <aside className="w-[150px] min-h-[calc(100vh-48px)] bg-[#17172d] text-white py-8 px-3">

          <p className="text-base text-[#9292a5] mb-3 ml-1">
            Main Menu
          </p>

          <div className="h-8 flex items-center gap-2 text-[12px] px-2 mb-1 rounded-md cursor-pointer">
            <span>Overview</span>
          </div>

          <div className="h-8 flex items-center gap-2 text-[12px] px-2 mb-1 rounded-md cursor-pointer bg-[#e83d69]">
            <span>My Courses</span>
          </div>

          <div className="h-8 flex items-center gap-2 text-[12px] px-2 mb-1 rounded-md cursor-pointer">
            <span>My Mentors</span>
          </div>

          <div className="h-8 flex items-center gap-2 text-[12px] px-2 mb-1 rounded-md cursor-pointer">
            <span>Calendar</span>
          </div>

          <div className="h-8 flex items-center gap-2 text-[12px] px-2 mb-1 rounded-md cursor-pointer">
            <span>Message</span>
          </div>

          <p className="text-base text-[#9292a5] mt-8 mb-3 ml-1">
            Account
          </p>

          <div className="h-8 flex items-center gap-2 text-[12px] px-2 mb-1 rounded-md cursor-pointer">
            <span>Settings</span>
          </div>

          <div className="h-8 flex items-center gap-2 text-[12px] px-2 mb-1 rounded-md cursor-pointer">
            <span>Logout</span>
          </div>

          <div className="h-8 flex items-center gap-2 text-[12px] px-2 mb-1 rounded-md cursor-pointer">

            <button className="w-40 py-1 mt-32 bg-[#5f2a37] text-white border-0 rounded cursor-pointer">
              Switch to Learner
            </button>

          </div>

        </aside>

        {/* ================= PAGE CONTENT ================= */}
        <main className="flex-1 flex px-16 py-8 gap-12">

          {/* ================= COURSE CONTENT ================= */}
          <div className="w-[65%] relative">

            {/* COURSE IMAGE */}
            <div className="w-full h-[230px] overflow-hidden relative">

              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
                alt="Web Development"
                className="w-full h-full object-cover"
              />

            </div>

            {/* COURSE IMAGE OVERLAY */}
            <div className="absolute top-0 left-0 w-full h-[230px] bg-black/20 text-white p-2">

              {/* TAGS */}
              <div className="flex items-center gap-12 text-[8px]">

                <span className="bg-[#eeeeee] text-[#222] py-1 px-2 rounded-full">
                  Web Development
                </span>

                <b className="text-[#222]">
                  4.8 reviews (2,450 reviews)
                </b>

              </div>

              {/* COURSE TITLE */}
              <h2 className="text-center mt-12 text-2xl leading-tight font-bold">

                Complete React
                <br />

                Developer
                <br />

                Bootcamp 2025

              </h2>

              {/* COURSE DETAILS */}
              <p className="absolute bottom-2 right-2 text-[8px]">
                Beginner , 42 hrs , 8000+ Students
              </p>

            </div>

            {/* ================= TABS ================= */}
            <div className="flex gap-8 mt-3 border-b border-[#ddd]">

              <div className="text-xs pb-2 cursor-pointer border-b-2 border-[#e83d69]">
                Overview
              </div>

              <div className="text-xs pb-2 cursor-pointer">
                Curriculum
              </div>

              <div className="text-xs pb-2 cursor-pointer">
                Mentors
              </div>

              <div className="text-xs pb-2 cursor-pointer">
                Review
              </div>

            </div>

            {/* ================= OVERVIEW ================= */}
            <div className="mt-4">

              <h2 className="text-xl font-medium mb-1">
                About this Course
              </h2>

              <div className="bg-white p-3 w-full">

                <p className="text-sm leading-relaxed text-[#666] max-w-[95%]">

                  This page shares my best articles to read on topics like
                  health, happiness, creativity, productivity and more. The
                  central question that drives my work is, "How can we live
                  better?" To answer that question, I like to write about
                  science-based ways to solve practical problems.

                </p>

                {/* FEATURES */}
                <div className="grid grid-cols-2 gap-x-8 gap-y-4 mt-6 px-4">

                  <div className="flex items-start gap-3">
                    <p className="text-sm text-[#777]">
                      - Master React hooks
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <p className="text-sm text-[#777]">
                      - Global state management with Redux Toolkit
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <p className="text-sm text-[#777]">
                      - Routing with React Router V6.4+
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <p className="text-sm text-[#777]">
                      - Responsive design with Tailwind and CSS
                    </p>
                  </div>

                </div>

                {/* REQUIREMENTS */}
                <h3 className="text-xl font-medium mt-8 mb-3">
                  Course Requirement
                </h3>

                <ul className="pl-4 list-disc">

                  <li className="text-sm text-[#555] mb-3 pl-1">
                    Basic knowledge of HTML & CSS
                  </li>

                  <li className="text-sm text-[#555] mb-3 pl-1">
                    Intermediate knowledge of Modern Java Script
                  </li>

                  <li className="text-sm text-[#555] mb-3 pl-1">
                    A computer with Node.js installed
                  </li>

                </ul>

              </div>

            </div>

          </div>

          {/* ================= RIGHT SIDE ================= */}
          <section className="w-[250px]">

            {/* ================= PROGRESS CARD ================= */}
            <div className="bg-white rounded-lg px-4 pt-2 pb-4 shadow-md">

              <h3 className="text-center text-xs border-t-2 border-[#d83b64] pt-1">
                Your Progress
              </h3>

              <p className="mt-4 text-sm">
                65 %
              </p>

              <small className="text-xs text-[#777]">
                completed
              </small>

              {/* PROGRESS BAR */}
              <div className="w-full h-1 bg-[#ddd] mt-2 rounded-full">

                <div className="w-[65%] h-full bg-[#d83b64] rounded-full"></div>

              </div>

              <button className="w-full mt-4 py-2 border-0 bg-[#d83b64] text-white rounded text-xs cursor-pointer">

                Continue Learning 

              </button>

            </div>

            {/* ================= COURSE INCLUDES ================= */}
            <div className="mt-10 text-base">

              <h4 className="text-base mb-3">
                THIS COURSE INCLUDES:
              </h4>

              <p className="mb-2">
                - 45 high-quality videos
              </p>

              <p className="mb-2">
                - 12 Coding exercises
              </p>

              <p className="mb-2">
                - 5+ Real world projects
              </p>

              <p className="mb-2">
                - Certificate of Course Completion
              </p>

            </div>

            {/* ================= RELATED COURSES ================= */}
            <div className="mt-8">

              <h3 className="text-base font-medium mb-6 text-center">
                Related Courses
              </h3>

              {/* RELATED CARD 1 */}
              <div className="w-full bg-white rounded-xl overflow-hidden mb-8 shadow-md">

                <div className="w-full h-24 relative overflow-hidden">

                  <img
                    src="https://www.creative-tim.com/blog/content/images/wordpress/2020/03/node-js-736399_1280.png"
                    alt="Node.js"
                    className="w-full h-full object-cover"
                  />

                  <span className="absolute bottom-0 left-0 bg-[#397e4d] text-white text-[8px] py-1 px-2">
                    Backend
                  </span>

                </div>

                <div className="p-2">

                  <h4 className="text-xs leading-relaxed font-medium min-h-9">

                    Node.js & Express Api
                    Development

                  </h4>

                  <div className="flex justify-between items-center mt-4">

                    <p className="text-[8px] text-[#999]">
                      32 Hours · Intermediate
                    </p>

                    <strong className="text-[9px] text-[#e13b65]">
                      NPR 4,999
                    </strong>

                  </div>

                </div>

              </div>

              {/* RELATED CARD 2 */}
              <div className="w-full bg-white rounded-xl overflow-hidden mb-8 shadow-md">

                <div className="w-full h-24 relative overflow-hidden">

                  <img
                    src="https://cdn.sanity.io/images/599r6htc/regionalized/d7de2d412bf40bca4685fd92d84c4ebb68e176fe-2880x1440.png?w=2880&h=1440&q=75&fit=max&auto=format"
                    alt="UI UX Design"
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute bottom-0 left-0 bg-[#397e4d] text-white text-[8px] py-1 px-2">
                    Design
                  </span>

                </div>

                <div className="p-2">

                  <h4 className="text-xs leading-relaxed font-medium min-h-9">

                    UI/UX Design Master Class
                    with Figma

                  </h4>

                  <div className="flex justify-between items-center mt-4">

                    <p className="text-[8px] text-[#999]">
                      28 Hours · All Levels
                    </p>

                    <strong className="text-[9px] text-[#e13b65]">
                      NPR 3,999
                    </strong>

                  </div>

                </div>

              </div>

              {/* RELATED CARD 3 */}
              <div className="w-full bg-white rounded-xl overflow-hidden mb-8 shadow-md">

                <div className="w-full h-24 relative overflow-hidden">

                  <img
                    src="https://assets.community.aws/a/2nNAa2jLn2po8xQMe2nCYkPsHlc/Amaz.webp?imgSize=3000x2000"
                    alt="Aws Cloud Practitioner Certification"
                    className="w-full h-full object-cover"
                  />

                  <span className="absolute bottom-0 left-0 bg-[#397e4d] text-white text-[8px] py-1 px-2">
                    Data Science
                  </span>

                </div>

                <div className="p-2">

                  <h4 className="text-xs leading-relaxed font-medium min-h-9">

                    Aws Cloud Practitioner Certification

                  </h4>

                  <div className="flex justify-between items-center mt-4">

                    <p className="text-[8px] text-[#999]">
                      50 Hours · Intermediate
                    </p>

                    <strong className="text-[9px] text-[#e13b65]">
                      NPR 6,499
                    </strong>

                  </div>

                </div>

              </div>

            </div>

          </section>

        </main>

      </div>

    </div>
  );
}
export default Practise;