import { Link } from "react-router";

const About = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-indigo-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-800 mb-3">
            About Mission75
          </h1>
          <p className="text-lg text-slate-600">
            Built by students, for students
          </p>
        </div>

        <div className="space-y-8">
          <section className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">
              Our Story
            </h2>
            <p className="text-slate-700 mb-4">
              Mission75 started as a simple idea: make attendance tracking easy
              for students everywhere. We've all been there - stressing about
              whether we have enough attendance to sit for exams, trying to
              calculate manually, and making mistakes.
            </p>
            <p className="text-slate-700">
              That's why we built Mission75 - a free, simple, and reliable tool
              that does the math for you, so you can focus on what matters:
              learning!
            </p>
          </section>

          <section className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">
              What Makes Us Different?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4 bg-linear-to-br from-indigo-50 to-purple-50 rounded-xl border border-indigo-100">
                <h3 className="font-semibold text-slate-800 mb-2">100% Free</h3>
                <p className="text-slate-700">
                  No hidden fees, no ads, no subscriptions. Just pure utility.
                </p>
              </div>
              <div className="p-4 bg-linear-to-br from-blue-50 to-cyan-50 rounded-xl border border-blue-100">
                <h3 className="font-semibold text-slate-800 mb-2">
                  No Sign-Up Required
                </h3>
                <p className="text-slate-700">
                  Just open the app and start using it immediately.
                </p>
              </div>
              <div className="p-4 bg-linear-to-br from-green-50 to-emerald-50 rounded-xl border border-green-100">
                <h3 className="font-semibold text-slate-800 mb-2">
                  Works Everywhere
                </h3>
                <p className="text-slate-700">
                  Perfect on phones, tablets, laptops - any device with a
                  browser.
                </p>
              </div>
              <div className="p-4 bg-linear-to-br from-orange-50 to-red-50 rounded-xl border border-orange-100">
                <h3 className="font-semibold text-slate-800 mb-2">
                  Built with Care
                </h3>
                <p className="text-slate-700">
                  Designed and tested by students who know what you need.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">
              Get In Touch
            </h2>
            <p className="text-slate-700 mb-4">
              Have ideas for new features? Found a bug? Just want to say hi?
              We'd love to hear from you!
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition-colors"
            >
              Contact Us
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
