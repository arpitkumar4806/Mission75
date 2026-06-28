import { create } from "zustand";

interface AttendanceStore {
  present: number;
  total: number;
  targetPercentage: number;
  simulationClasses: number;

  setPresent: (value: number) => void;
  setTotal: (value: number) => void;
  setTargetPercentage: (value: number) => void;
  setSimulationClasses: (value: number) => void;

  getAttendancePercentage: () => number;
  getRequiredClasses: () => number;
  getWhatIfAttendAll: () => number;
  getWhatIfMissAll: () => number;
  getErrors: () => string[];
}

export const useAttendanceStore = create<AttendanceStore>((set, get) => ({
  present: 0,
  total: 0,
  targetPercentage: 75,
  simulationClasses: 5,

  setPresent: (value) => set({ present: value }),
  setTotal: (value) => set({ total: value }),
  setTargetPercentage: (value) => set({ targetPercentage: value }),
  setSimulationClasses: (value) => set({ simulationClasses: value }),

  getAttendancePercentage: () => {
    const { present, total } = get();
    if (total === 0) return 0;
    return (present / total) * 100;
  },

  getRequiredClasses: () => {
    const { present, total, targetPercentage } = get();
    if (total === 0) return 0;

    const currentPercentage = (present / total) * 100;
    if (currentPercentage >= targetPercentage) return 0;

    let required = 0;
    let tempPresent = present;
    let tempTotal = total;

    while ((tempPresent / tempTotal) * 100 < targetPercentage) {
      tempPresent++;
      tempTotal++;
      required++;
    }

    return required;
  },

  getWhatIfAttendAll: () => {
    const { present, total, simulationClasses } = get();
    const newTotal = total + simulationClasses;
    if (newTotal === 0) return 0;
    return ((present + simulationClasses) / newTotal) * 100;
  },

  getWhatIfMissAll: () => {
    const { present, total, simulationClasses } = get();
    const newTotal = total + simulationClasses;
    if (newTotal === 0) return 0;
    return (present / newTotal) * 100;
  },

  getErrors: () => {
    const { present, total } = get();
    const errors: string[] = [];

    if (present < 0) errors.push("Present classes cannot be negative");
    if (total < 0) errors.push("Total classes cannot be negative");
    if (present > total)
      errors.push("Present classes cannot exceed total classes");
    if (!Number.isInteger(present))
      errors.push("Present classes must be an integer");
    if (!Number.isInteger(total))
      errors.push("Total classes must be an integer");

    return errors;
  },
}));
