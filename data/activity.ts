export interface ActivityEvent {
  id: string;
  timestamp: string;
  message: string;
  level: "success" | "info" | "debug" | "warn";
}

export const activityEvents: ActivityEvent[] = [
  {
    id: "a1",
    timestamp: "2026-06-10T10:00:00",
    message: "Reviewing Python data structures and algorithm patterns — sharpening fundamentals ahead of BASF internship",
    level: "info",
  },
  {
    id: "a2",
    timestamp: "2026-06-08T15:30:00",
    message: "Finished exam preparation for Q4 Applied Computer Science modules",
    level: "success",
  },
  {
    id: "a3",
    timestamp: "2026-06-07T11:00:00",
    message: "Exploring pandas and scikit-learn — building intuition for data manipulation and basic ML pipelines",
    level: "debug",
  },
  {
    id: "a4",
    timestamp: "2026-06-05T09:00:00",
    message: "Revisiting Qiskit and quantum circuit fundamentals — connecting theory from the IBM project to internship context",
    level: "info",
  },
  {
    id: "a5",
    timestamp: "2026-06-03T14:00:00",
    message: "Practising clean code habits in Python — readable over clever, functions that do one thing",
    level: "success",
  },
  {
    id: "a6",
    timestamp: "2026-06-01T10:30:00",
    message: "Reading up on data pipeline architecture and ETL patterns — understanding how data flows at scale",
    level: "info",
  },
  {
    id: "a7",
    timestamp: "2026-05-27T16:00:00",
    message: "Working on explaining technical topics clearly — practising the ability to break down complex concepts simply",
    level: "debug",
  },
  {
    id: "a8",
    timestamp: "2026-05-25T13:00:00",
    message: "Researching ML model deployment patterns and how to bridge training to production environments",
    level: "info",
  },
  {
    id: "a9",
    timestamp: "2026-05-18T11:00:00",
    message: "Deep-diving into NumPy vectorisation and performance — understanding why it matters for real data workloads",
    level: "debug",
  },
  {
    id: "a10",
    timestamp: "2026-05-05T09:00:00",
    message: "Wrapped up the quantum ML project with IBM — finalised documentation and noted takeaways for the internship",
    level: "success",
  },
];

export const statusItems = [
  { label: "Active focus",  value: "Internship prep" },
  { label: "Focus stack",   value: "Python / ML" },
  { label: "School year",   value: "3rd year" },
  { label: "Internship",    value: "BASF · 2026" },
];
