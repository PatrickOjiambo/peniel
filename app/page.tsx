"use client";

import Image from "next/image";
import { useState } from "react";
import { BsBookFill, BsFillLaptopFill, BsPeopleFill } from "react-icons/bs";
import { FaBook, FaBrain, FaGraduationCap, FaLightbulb, FaPeopleCarry } from "react-icons/fa";
import { FaBookBible, FaHandPeace, FaHandshake, FaHeart, FaPhoneFlip, FaUserGraduate } from "react-icons/fa6";
import { GiBiceps, GiHighFive, GiKenya } from "react-icons/gi";
import { GoLaw } from "react-icons/go";
import { MdChildCare, MdEmail, MdLocationPin } from "react-icons/md";
import { TiWorld } from "react-icons/ti";

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const galleryImages = [
    { src: "/assets/band-in-uniform-landcape.jpeg", alt: "School Band Performance", caption: "Our Talented School Band" },
    { src: "/assets/director.jpeg", alt: "Graduation Ceremony", caption: "Celebrating Excellence" },
    { src: "/assets/director.jpeg", alt: "School Director", caption: "Our Leadership" },
    { src: "/assets/teachers.jpg", alt: "Dedicated Teachers", caption: "Our Amazing Teachers" },
    { src: "/assets/ballerina-landscape.jpg", alt: "Students Activities", caption: "Learning Through Play" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden bg-slate-500">
        {/* Background Image Placeholder */}
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div className="absolute inset-0 bg-[url('/assets/balerina.jpeg')] bg-cover bg-center opacity-80"></div>
        
        {/* Hero Content */}
        <div className="relative z-20 flex h-full flex-col items-center justify-center px-4 text-center text-white">
          <div className="animate-fade-in-up max-w-5xl">
            <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight md:text-7xl lg:text-8xl drop-shadow-lg">
              THE PENIEL ACADEMY UTAWALA
            </h1>
            <p className="mb-8 text-xl md:text-3xl font-light animate-pulse">
              Raising a Generation of Excellence through Christian Values and Competency-Based Education
            </p>
            
            <div className="flex flex-col gap-4 items-center justify-center sm:flex-row mt-8">
              <a
                href="#contact"
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-300 bg-linear-to-r from-yellow-400 to-orange-500 rounded-full hover:scale-105 hover:shadow-2xl"
              >
                <span className="relative z-10">Admissions Now Open</span>
                <span className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></span>
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-300 bg-white/10 backdrop-blur-sm border-2 border-white rounded-full hover:bg-white hover:text-purple-600 hover:scale-105"
              >
                Explore Our School
              </a>
            </div>
            
            <p className="mt-8 text-lg md:text-xl font-light italic">
              Enroll your child today and become part of a nurturing, Christ-centered learning community
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 px-4 bg-linear-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">Our Story</h2>
            <div className="w-24 h-1 bg-linear-to-r from-blue-500 to-purple-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                The Peniel Academy Utawala is a Christian-based school located in Utawala, Off Bypass, Benedicta, Nairobi. 
                Founded in 2015, the school was established with a deep commitment to providing <strong>Competency-Based Education (CBE)</strong> to 
                learners from diverse backgrounds.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our goal is to offer a high-quality, holistic education that empowers children to excel academically, spiritually, 
                socially, and emotionally. Over the years, The Peniel Academy Utawala has grown into a vibrant learning community 
                where students are equipped with real-world skills, nurtured in faith, and encouraged to use their God-given talents 
                to serve others.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed font-semibold">
                We believe that every child is created with purpose—and at Peniel, we help guide them toward fulfilling that purpose.
              </p>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-linear-to-br from-blue-400 to-purple-500 opacity-20"></div>
              {/* Placeholder for school image */}
              <div className="absolute inset-0 flex items-center justify-center text-white text-xl font-bold bg-gray-300">
                <Image
                  src="/assets/graduation.jpeg"
                  alt="The Peniel Academy Utawala School Building"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Mission, Vision, Faith */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border-t-4 border-purple-900">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-700">
                To provide an exceptional education that inspires students to reach their full potential, rooted in Christian faith and values.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border-t-4 border-purple-900">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-700">
                To cultivate a legacy of faith, hope, and love, where students are empowered to live a Christian life in all aspects of their lives.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border-t-4 border-purple-900">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Faith</h3>
              <p className="text-gray-700">
                We believe that every child is created with purpose, guided by Christian values and principles.
              </p>
            </div>
          </div>

          {/* Statement of Faith */}
          <div className="bg-linear-to-r from-slate-900 via-purple-900 to-slate-900 p-10 rounded-2xl shadow-2xl text-white text-center">
            <div className="text-6xl mb-4 mx-auto w-fit">
              <FaBookBible />
            </div>
            <blockquote className="text-2xl md:text-3xl font-light italic mb-4">
              "I can do everything through Christ who strengthens me."
            </blockquote>
            <p className="text-lg font-semibold">— Philippians 4:13</p>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20 px-4 bg-linear-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">Our Programs</h2>
            <p className="text-xl text-gray-600 mb-2">Competency-Based Education (CBE)</p>
            <p className="text-2xl font-semibold text-purple-600">From Playgroup to Grade 9</p>
            <div className="w-24 h-1 bg-linear-to-r from-blue-500 to-purple-500 mx-auto mt-4"></div>
          </div>

          <p className="text-center text-lg text-gray-700 max-w-4xl mx-auto mb-12">
            At The Peniel Academy Utawala, learning is active, practical, and engaging. Our CBE model ensures that 
            students develop knowledge, skills, and values that prepare them for life, not just exams.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Early Years */}
            <div className="bg-linear-to-br from-pink-100 to-pink-200 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-6xl mb-4">
                <MdChildCare/>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Early Years</h3>
              <p className="text-lg font-semibold text-pink-600 mb-4">Ages 3–6</p>
              <p className="text-sm text-gray-600 mb-4">Playgroup (PG) to Pre-Primary 2 (PP2)</p>
              <p className="text-gray-700">
                A warm and stimulating environment where young learners explore, discover, and build foundational 
                skills through play, creativity, and guided learning.
              </p>
            </div>

            {/* Middle School */}
            <div className="bg-linear-to-br from-blue-100 to-blue-200 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-6xl mb-4 text-black ">
                <FaBook/>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Middle School</h3>
              <p className="text-lg font-semibold text-blue-600 mb-4">Ages 6–12</p>
              <p className="text-sm text-gray-600 mb-4">Grade 1 to Grade 6</p>
              <p className="text-gray-700">
                Learners deepen their understanding through hands-on activities, group projects, problem-solving tasks, 
                and real-world experiences.
              </p>
            </div>

            {/* Junior School */}
            <div className="bg-linear-to-br from-purple-100 to-purple-200 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-6xl mb-4 text-black ">
                <FaGraduationCap />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Junior School</h3>
              <p className="text-lg font-semibold text-purple-600 mb-4">Ages 12–14</p>
              <p className="text-sm text-gray-600 mb-4">Grade 7 to Grade 9</p>
              <p className="text-gray-700">
                Students engage in advanced learning pathways, leadership development, digital literacy, and skills 
                that prepare them for senior school and future careers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Competencies & Values */}
      <section id="competencies" className="py-20 px-4 bg-linear-to-b from-white to-purple-50">
        <div className="max-w-7xl mx-auto">
          {/* Core Competencies */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Core Competencies</h2>
              <p className="text-xl text-gray-600">Lifelong Skills for Success</p>
              <div className="w-24 h-1 bg-linear-to-r from-blue-500 to-purple-500 mx-auto mt-4"></div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
              {[
                { icon: <BsPeopleFill />, title: "Communication & Collaboration" },
                { icon: <FaBrain/>, title: "Critical Thinking" },
                { icon: <FaLightbulb/>, title: "Imagination & Creativity" },
                { icon: <TiWorld/>, title: "Citizenship" },
                { icon: <BsBookFill/>, title: "Learning to Learn" },
                { icon: <GiBiceps/>, title: "Self-Efficacy" },
                { icon: <BsFillLaptopFill/>, title: "Digital Literacy" },
              ].map((competency, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center group cursor-pointer"
                >
                  <div className="text-5xl text-gray-900 mx-auto w-fit  mb-3 group-hover:scale-110 transition-transform duration-300">
                    {competency.icon}
                  </div>
                  <p className="text-sm font-semibold text-gray-800">{competency.title}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Core Values */}
          <div>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Core Values</h2>
              <p className="text-xl text-gray-600">Building Christ-Like Character</p>
              <div className="w-24 h-1 bg-linear-to-r from-purple-500 to-pink-500 mx-auto mt-4"></div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
              {[
                { icon: <FaHeart/>, title: "Love", color: "from-red-400 to-pink-400" },
                { icon: <FaHandshake/>, title: "Responsibility", color: "from-blue-400 to-cyan-400" },
                { icon: <GiHighFive/>, title: "Respect", color: "from-green-400 to-emerald-400" },
                { icon: <FaPeopleCarry/>, title: "Unity", color: "from-purple-400 to-pink-400" },
                { icon: <FaHandPeace/>, title: "Peace", color: "from-yellow-400 to-orange-400" },
                { icon: <GiKenya/>, title: "Patriotism", color: "from-green-600 to-red-600" },
                { icon: <GoLaw/>, title: "Integrity", color: "from-indigo-400 to-purple-400" },
              ].map((value, index) => (
                <div
                  key={index}
                  className={`bg-linear-to-br ${value.color} p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center group cursor-pointer`}
                >
                  <div className="text-5xl mb-3 mx-auto w-fit group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <p className="text-sm font-bold text-white">{value.title}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-gray-700 italic max-w-3xl mx-auto">
              These values guide how we learn, interact, and grow together as a school community, 
              nurturing Christ-like character in every learner.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 px-4 bg-linear-to-b from-purple-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">Life at Peniel</h2>
            <p className="text-xl text-gray-600">Experience the energy, warmth, and excellence</p>
            <div className="w-24 h-1 bg-linear-to-r from-blue-500 to-purple-500 mx-auto mt-4"></div>
          </div>

          {/* Main Gallery Display */}
          <div className="relative mb-8">
            <div className="relative h-96 md:h-[600px] rounded-2xl overflow-hidden shadow-2xl sm:mx-20">
              <div className="absolute inset-0 bg-black/10 flex items-center justify-center text-white text-2xl font-bold w-full">
                <Image
                  src={galleryImages[currentImageIndex].src}
                  alt={galleryImages[currentImageIndex].alt}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute top-4 left-4 bg-black/50 text-white px-4 py-2 rounded-lg text-sm">
                Image {currentImageIndex + 1} of {galleryImages.length}
                <br />
                <span className="text-base mt-2">({galleryImages[currentImageIndex].alt})</span>
              </div>
            </div>
            
            {/* Navigation Arrows */}
            <button
              onClick={() => setCurrentImageIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1))}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-gray-600 hover:bg-gray-700 p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            >
              <span className="text-2xl">←</span>
            </button>
            <button
              onClick={() => setCurrentImageIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1))}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-600 hover:bg-gray-700 p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            >
              <span className="text-2xl">→</span>
            </button>

            {/* Image Caption */}
            <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent p-6 text-white">
              <h3 className="text-2xl font-bold">{galleryImages[currentImageIndex].caption}</h3>
            </div>
          </div>

          {/* Thumbnail Grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {galleryImages.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`relative h-32 rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 ${
                  currentImageIndex === index ? "ring-4 ring-purple-500 scale-105" : "opacity-70 hover:opacity-100"
                }`}
              >
                <div className="absolute inset-0 bg-linear-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-xs font-semibold text-center p-2">
                  {image.caption}
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Enrollment Section */}
      <section id="contact" className="py-20 px-4 bg-linear-to-br  from-purple-800 via-violet-900 to-purple-800 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <div className="text-6xl mb-6 mx-auto w-fit">
            <FaUserGraduate/>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Join the Peniel Family Today</h2>
          <p className="text-xl md:text-2xl mb-12 font-light">
            We welcome new learners who are ready to grow in faith, character, and knowledge.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/20 transition-all duration-300">
              <div className="text-5xl mb-4 mx-auto w-fit">
                <FaPhoneFlip />
              </div>
              <h3 className="text-2xl font-bold mb-2">Call Us</h3>
              <a href="tel:0726682492" className="text-3xl font-semibold hover:text-yellow-300 transition-colors">
                0726 682 492
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/20 transition-all duration-300">
              <div className="text-5xl mb-4 mx-auto w-fit">
                <MdEmail/>
              </div>
              <h3 className="text-2xl font-bold mb-2">Email Us</h3>
              <a href="mailto:info@tpau.sc.ke" className="text-3xl font-semibold hover:text-yellow-300 transition-colors">
                info@tpau.sc.ke
              </a>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl mb-8">
            <div className="text-5xl mb-4 mx-auto w-fit">
              <MdLocationPin />
            </div>
            <h3 className="text-2xl font-bold mb-2">Visit Us</h3>
            <p className="text-xl">
              Utawala, Off Bypass, Benedicta<br />
              Nairobi, Kenya
            </p>
          </div>

          <a
            href="tel:0726682492"
            className="inline-flex items-center justify-center px-12 py-5 text-xl font-bold text-purple-600 bg-white rounded-full hover:bg-yellow-300 hover:scale-105 transition-all duration-300 shadow-2xl"
          >
            Enroll Now - Admissions Open
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">THE PENIEL ACADEMY UTAWALA</h3>
          <p className="text-gray-400 mb-6">
            Raising a Generation of Excellence through Christian Values and Competency-Based Education
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-6">
            <a href="#about" className="hover:text-yellow-300 transition-colors">About Us</a>
            <a href="#programs" className="hover:text-yellow-300 transition-colors">Programs</a>
            <a href="#competencies" className="hover:text-yellow-300 transition-colors">Competencies</a>
            <a href="#gallery" className="hover:text-yellow-300 transition-colors">Gallery</a>
            <a href="#contact" className="hover:text-yellow-300 transition-colors">Contact</a>
          </div>
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} The Peniel Academy Utawala. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
