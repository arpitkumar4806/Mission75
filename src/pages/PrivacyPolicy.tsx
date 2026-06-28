const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-indigo-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-800 mb-3">
            Privacy Policy
          </h1>
          <p className="text-lg text-slate-600">
            Your privacy is important to us
          </p>
        </div>

        <div className="space-y-8">
          <section className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">
              Introduction
            </h2>
            <p className="text-slate-700">
              Welcome to Mission75! We respect your privacy and are committed to
              protecting any personal information you may provide while using
              our website. This Privacy Policy explains how we collect, use, and
              safeguard your information.
            </p>
          </section>

          <section className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">
              Information We Collect
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">
                  No Personal Data Collection
                </h3>
                <p className="text-slate-700">
                  Mission75 does not collect, store, or share any personal
                  information, attendance data, or any other data you enter into
                  the app. All calculations happen locally in your browser.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">
                  Anonymous Usage Data
                </h3>
                <p className="text-slate-700">
                  We may collect anonymous, non-personal usage data (like how
                  many people visit the site) to help us improve the app. This
                  data cannot be used to identify you personally.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Cookies</h2>
            <p className="text-slate-700">
              Mission75 does not use any cookies or tracking technologies to
              collect personal information.
            </p>
          </section>

          <section className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">
              Third-Party Services
            </h2>
            <p className="text-slate-700">
              Our website may be hosted by third-party services, but they do not
              have access to any of your personal data.
            </p>
          </section>

          <section className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">
              Changes to This Policy
            </h2>
            <p className="text-slate-700">
              We may update this Privacy Policy from time to time. Any changes
              will be posted on this page.
            </p>
          </section>

          <section className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">
              Contact Us
            </h2>
            <p className="text-slate-700">
              If you have any questions about this Privacy Policy, please reach
              out through our Contact page.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
