import { useAttendanceStore } from "../store/useAttendanceStore";
import {
  CheckCircle,
  AlertCircle,
  TrendingUp,
  TrendingDown,
  Target,
} from "lucide-react";

const Home = () => {
  const {
    present,
    total,
    targetPercentage,
    simulationClasses,
    setPresent,
    setTotal,
    setTargetPercentage,
    setSimulationClasses,
    getAttendancePercentage,
    getRequiredClasses,
    getWhatIfAttendAll,
    getWhatIfMissAll,
    getErrors,
  } = useAttendanceStore();

  const attendancePercentage = getAttendancePercentage();
  const requiredClasses = getRequiredClasses();
  const whatIfAttendAll = getWhatIfAttendAll();
  const whatIfMissAll = getWhatIfMissAll();
  const errors = getErrors();
  const isTargetMet = attendancePercentage >= targetPercentage && total > 0;

  const handleNumberInput = (value: string, setter: (val: number) => void) => {
    const num = value === "" ? 0 : parseInt(value, 10);
    if (!isNaN(num)) {
      setter(num);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-indigo-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-800 mb-3">
            Mission75
          </h1>
          <p className="text-lg text-slate-600">
            Your attendance tracking companion
          </p>
        </div>

        <div className="grid gap-6">
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
              <Target className="w-6 h-6 text-indigo-600" />
              Attendance Calculator
            </h2>

            {errors.length > 0 && (
              <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-red-800 mb-1">
                      Please fix the following errors:
                    </h3>
                    <ul className="list-disc list-inside text-red-700 space-y-1">
                      {errors.map((error, index) => (
                        <li key={index}>{error}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Classes Present
                </label>
                <input
                  type="number"
                  min="0"
                  value={present}
                  onChange={(e) =>
                    handleNumberInput(e.target.value, setPresent)
                  }
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  placeholder="0"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Total Classes Held
                </label>
                <input
                  type="number"
                  min="0"
                  value={total}
                  onChange={(e) => handleNumberInput(e.target.value, setTotal)}
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  placeholder="0"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Target Attendance Percentage: {targetPercentage}%
              </label>
              <input
                type="range"
                min="50"
                max="100"
                value={targetPercentage}
                onChange={(e) =>
                  setTargetPercentage(parseInt(e.target.value, 10))
                }
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <div className="bg-linear-to-br from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-100">
                <p className="text-sm font-medium text-indigo-700 mb-1">
                  Current Attendance
                </p>
                <p
                  className={`text-4xl font-bold ${
                    isTargetMet ? "text-green-600" : "text-orange-600"
                  }`}
                >
                  {attendancePercentage.toFixed(2)}%
                </p>
              </div>
              <div className="bg-linear-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-100">
                <p className="text-sm font-medium text-blue-700 mb-1">
                  Required to Reach Target
                </p>
                <p className="text-4xl font-bold text-blue-600">
                  {requiredClasses}
                </p>
                <p className="text-xs text-blue-600 mt-1">
                  consecutive classes
                </p>
              </div>
            </div>

            {isTargetMet && (
              <div className="flex items-center gap-3 bg-green-50 border border-green-200 rounded-xl p-4">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <span className="text-green-800 font-medium">
                  Great! You've already reached your target attendance!
                </span>
              </div>
            )}
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
              What-If Scenarios
            </h2>

            <div className="mb-6">
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Number of Simulated Classes: {simulationClasses}
              </label>
              <input
                type="number"
                min="0"
                value={simulationClasses}
                onChange={(e) =>
                  handleNumberInput(e.target.value, setSimulationClasses)
                }
                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-linear-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="w-5 h-5 text-green-600" />
                  <p className="text-sm font-medium text-green-700">
                    Attend All Next {simulationClasses}
                  </p>
                </div>
                <p className="text-3xl font-bold text-green-600">
                  {whatIfAttendAll.toFixed(2)}%
                </p>
              </div>
              <div className="bg-linear-to-br from-red-50 to-rose-50 rounded-xl p-6 border border-red-100">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingDown className="w-5 h-5 text-red-600" />
                  <p className="text-sm font-medium text-red-700">
                    Miss All Next {simulationClasses}
                  </p>
                </div>
                <p className="text-3xl font-bold text-red-600">
                  {whatIfMissAll.toFixed(2)}%
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
