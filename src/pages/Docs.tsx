import { Link } from 'react-router';

const Docs = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-indigo-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-800 mb-3">
            Welcome to Mission75!
          </h1>
          <p className="text-lg text-slate-600">
            Your easy-to-use attendance tracking companion
          </p>
        </div>

        <div className="space-y-8">
          <section className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">What is Mission75?</h2>
            <p className="text-slate-700 mb-4">
              Mission75 is a simple web app that helps students track their attendance and make sure they meet their target percentage (usually 75% for most colleges). No installation required - just open it in your browser and start using it!
            </p>
            <h3 className="text-xl font-semibold text-slate-800 mb-3">What can it do?</h3>
            <ul className="list-disc list-inside text-slate-700 space-y-2">
              <li>Calculate your current attendance percentage instantly</li>
              <li>Tell you how many more classes you need to attend to reach your target</li>
              <li>Let you set your own target attendance percentage</li>
              <li>Show you what would happen if you attend or miss future classes</li>
              <li>Works on your phone, tablet, or computer</li>
            </ul>
          </section>

          <section className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Getting Started (5 Quick Steps)</h2>
            <ol className="list-decimal list-inside text-slate-700 space-y-4">
              <li className="p-4 bg-slate-50 rounded-xl">
                <h4 className="font-semibold text-slate-800 mb-2">1. Open the App</h4>
                <p>Just visit the website in your browser (Chrome, Firefox, Safari, Edge - all work!)</p>
              </li>
              <li className="p-4 bg-slate-50 rounded-xl">
                <h4 className="font-semibold text-slate-800 mb-2">2. Enter Your Attendance</h4>
                <p>Type in two numbers:
                  <ul className="list-disc list-inside mt-2 ml-4 space-y-1">
                    <li><strong>Classes Present:</strong> How many classes you've attended</li>
                    <li><strong>Total Classes Held:</strong> Total classes that have happened so far</li>
                  </ul>
                </p>
              </li>
              <li className="p-4 bg-slate-50 rounded-xl">
                <h4 className="font-semibold text-slate-800 mb-2">3. See Your Results</h4>
                <p>Your current attendance percentage will show up right away, along with how many classes you need to attend consecutively to hit your target.</p>
              </li>
              <li className="p-4 bg-slate-50 rounded-xl">
                <h4 className="font-semibold text-slate-800 mb-2">4. Adjust Target (Optional)</h4>
                <p>If your college requires a different percentage (like 80%), use the slider to change your target.</p>
              </li>
              <li className="p-4 bg-slate-50 rounded-xl">
                <h4 className="font-semibold text-slate-800 mb-2">5. Try What-If Scenarios</h4>
                <p>Curious about the future? Enter how many classes are coming up, and see what your attendance would be if you attend all or miss all!</p>
              </li>
            </ol>
          </section>

          <section className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Example: Let's Calculate!</h2>
            <div className="bg-linear-to-br from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-100 mb-4">
              <p className="text-slate-700"><strong>Suppose:</strong></p>
              <ul className="list-disc list-inside text-slate-700 space-y-1 my-2">
                <li>You've attended 14 classes</li>
                <li>Total classes held: 20</li>
                <li>Your target: 75%</li>
              </ul>
              <p className="text-slate-700 mt-4"><strong>What Mission75 tells you:</strong></p>
              <ul className="list-disc list-inside text-slate-700 space-y-1 my-2">
                <li>Current attendance: 70% (needs 5% more)</li>
                <li>Classes needed to reach target: 2 (if you attend the next 2 classes, you'll hit 75%)</li>
              </ul>
            </div>
          </section>

          <section className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Common Questions (FAQ)</h2>
            <div className="space-y-4">
              <div className="p-4 bg-slate-50 rounded-xl">
                <h4 className="font-semibold text-slate-800 mb-1">Q: Do I need to create an account?</h4>
                <p className="text-slate-700">
                  A: No! Mission75 is completely free and doesn't require any sign-up. Just use it directly in your browser.
                </p>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl">
                <h4 className="font-semibold text-slate-800 mb-1">Q: Is my data saved?</h4>
                <p className="text-slate-700">
                  A: Currently, your data is only saved for your current session. If you refresh the page, you'll need to re-enter your numbers.
                </p>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl">
                <h4 className="font-semibold text-slate-800 mb-1">Q: Can I use this on my phone?</h4>
                <p className="text-slate-700">
                  A: Yes! Mission75 is designed to work perfectly on phones, tablets, and computers.
                </p>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl">
                <h4 className="font-semibold text-slate-800 mb-1">Q: I'm getting an error - what do I do?</h4>
                <p className="text-slate-700">
                  A: Make sure:
                  <ul className="list-disc list-inside mt-2 ml-4 space-y-1">
                    <li>Both numbers are positive (no negatives)</li>
                    <li>"Classes Present" is not more than "Total Classes Held"</li>
                    <li>You're using whole numbers (no decimals like 14.5)</li>
                  </ul>
                </p>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl">
                <h4 className="font-semibold text-slate-800 mb-1">Q: Is Mission75 free?</h4>
                <p className="text-slate-700">
                  A: Yes! It's 100% free, forever.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Need More Help?</h2>
            <p className="text-slate-700 mb-4">
              If you have other questions or need assistance, we're here for you!
            </p>
            <ul className="list-disc list-inside text-slate-700 space-y-2">
              <li>Visit our <Link to="/contact" className="text-indigo-600 hover:underline font-medium">Contact Us</Link> page to send us a message</li>
              <li>Learn more about the app on our <Link to="/about" className="text-indigo-600 hover:underline font-medium">About</Link> page</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Docs;
