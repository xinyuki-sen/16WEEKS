/* ================= APEX 16 DATA STORE ================= */
const WEEKS_DATA = [
  // ---------- PHASE 1: WEEKS 1 TO 4 ----------
  {
    week: 1,
    phase: "Phase 1: Foundations & EDA",
    dates: "Oct 5 – Oct 11, 2026",
    title: "Week 1: Clean Git, CLI & Pandas Foundations",
    outcome: "Repository 1 initialized with verified commits and foundational Pandas scripts.",
    summary: "Master dataframes and command-line version control without web-UI shortcuts.",
    dsa: "Java: Arrays & Two Pointers on LeetCode (Solve 1 problem: e.g. Two Sum).",
    resources: [
      { name: "Kaggle Pandas Micro-Course", url: "https://www.kaggle.com/learn/pandas" },
      { name: "GitHub CLI & Git Cheat Sheet", url: "https://education.github.com/git-cheat-sheet-education.pdf" },
      { name: "LeetCode Two Sum (Java)", url: "https://leetcode.com/problems/two-sum/" }
    ],
    tasks: [
      {
        id: "w1_t1",
        title: "Create GitHub Repo 'data-analysis-foundations'",
        desc: "Initialize via terminal (git init), add .gitignore (Python), and write an initial README with project objectives.",
        tag: "Git & Setup",
        tagType: "blue"
      },
      {
        id: "w1_t2",
        title: "Complete Kaggle Pandas Micro-Course (Lessons 1–4)",
        desc: "Cover Creating/Reading/Writing, Indexing, Selecting & Assigning, and Summary Functions & Maps.",
        tag: "Pandas",
        tagType: "purple"
      },
      {
        id: "w1_t3",
        title: "Run Local Analysis Script in Terminal",
        desc: "Download a small CSV (e.g. Kaggle sales/EV logs) and write a script to inspect .head(), .info(), and .describe().",
        tag: "Hands-On",
        tagType: "emerald"
      },
      {
        id: "w1_t4",
        title: "DSA Checkpoint: Java Two Sum",
        desc: "Solve Two Sum in Java using HashMap (O(n) time). Explain logic aloud before moving on.",
        tag: "DSA Java",
        tagType: "amber"
      }
    ]
  },
  {
    week: 2,
    phase: "Phase 1: Foundations & EDA",
    dates: "Oct 12 – Oct 18, 2026",
    title: "Week 2: Data Cleaning & Kaggle Intro to SQL",
    outcome: "Clean data pipeline handling missing values + first SQL queries executed.",
    summary: "Eliminate corrupted data points and master foundational relational queries.",
    dsa: "Java: Two Pointers (Valid Palindrome or Remove Duplicates).",
    resources: [
      { name: "Kaggle Intro to SQL", url: "https://www.kaggle.com/learn/intro-to-sql" },
      { name: "Kaggle Data Cleaning", url: "https://www.kaggle.com/learn/data-cleaning" },
      { name: "LeetCode Valid Palindrome", url: "https://leetcode.com/problems/valid-palindrome/" }
    ],
    tasks: [
      {
        id: "w2_t1",
        title: "Complete Kaggle Data Cleaning Lessons",
        desc: "Practice handling missing values (.fillna, .dropna), scaling vs normalizing, and parsing dates.",
        tag: "Cleaning",
        tagType: "purple"
      },
      {
        id: "w2_t2",
        title: "Complete Kaggle Intro to SQL",
        desc: "Master SELECT, FROM, WHERE, GROUP BY, HAVING, and COUNT/AVG on BigQuery datasets.",
        tag: "SQL",
        tagType: "blue"
      },
      {
        id: "w2_t3",
        title: "Git Commit: Data Cleaning Pipeline",
        desc: "Commit clean.py script to your repo with descriptive commit messages.",
        tag: "Git",
        tagType: "emerald"
      },
      {
        id: "w2_t4",
        title: "DSA: Valid Palindrome (Java)",
        desc: "Solve using two-pointer approach from both ends in O(n) time.",
        tag: "DSA Java",
        tagType: "amber"
      }
    ]
  },
  {
    week: 3,
    phase: "Phase 1: Foundations & EDA",
    dates: "Oct 19 – Oct 25, 2026",
    title: "Week 3: Advanced SQL Joins & Real Dataset Selection",
    outcome: "15 LeetCode SQL problems solved + real-world non-toy dataset selected.",
    summary: "Deloitte and corporate analytics tests heavily weight SQL Joins. Master them now.",
    dsa: "Java: Best Time to Buy and Sell Stock (Sliding Window / Greedy).",
    resources: [
      { name: "LeetCode SQL 50 Study Plan", url: "https://leetcode.com/studyplan/top-sql-50/" },
      { name: "Open Government Data India", url: "https://data.gov.in" },
      { name: "Kaggle Datasets", url: "https://www.kaggle.com/datasets" }
    ],
    tasks: [
      {
        id: "w3_t1",
        title: "Solve Top 10 LeetCode SQL 50 Problems",
        desc: "Focus strictly on INNER JOIN, LEFT JOIN, and GROUP BY ... HAVING problems.",
        tag: "SQL",
        tagType: "blue"
      },
      {
        id: "w3_t2",
        title: "Pick Your Real Dataset (Avoid Titanic/Iris)",
        desc: "Choose an Indian Air Quality (AQI), Zomato orders, or EV charging dataset from data.gov.in or Kaggle.",
        tag: "Dataset",
        tagType: "emerald"
      },
      {
        id: "w3_t3",
        title: "Draft Initial EDA Notebook",
        desc: "Load chosen dataset, compute correlation matrices, and generate distributions with Matplotlib/Seaborn.",
        tag: "EDA",
        tagType: "purple"
      },
      {
        id: "w3_t4",
        title: "DSA: Best Time to Buy and Sell Stock (Java)",
        desc: "Solve in O(n) time tracking minimum price and maximum profit.",
        tag: "DSA Java",
        tagType: "amber"
      }
    ]
  },
  {
    week: 4,
    phase: "Phase 1: Foundations & EDA",
    dates: "Oct 26 – Nov 1, 2026",
    title: "Week 4: Repository 1 Milestone — Production EDA Report",
    outcome: "PUBLIC REPO 1: Published with structured findings, clean charts & executive summary.",
    summary: "Ship your first verified repository showing data wrangling competence.",
    dsa: "Java: Contains Duplicate (HashSet).",
    resources: [
      { name: "Data Visualization with Seaborn", url: "https://seaborn.pydata.org/tutorial.html" },
      { name: "Markdown Guide for GitHub READMEs", url: "https://docs.github.com/en/get-started/writing-on-github" }
    ],
    tasks: [
      {
        id: "w4_t1",
        title: "Finalize EDA Analysis & Charts",
        desc: "Export 4 high-contrast charts (histograms, heatmaps, boxplots) highlighting genuine anomalies in the data.",
        tag: "Deliverable",
        tagType: "emerald"
      },
      {
        id: "w4_t2",
        title: "Write Professional GitHub README",
        desc: "Include Overview, Data Pipeline, Key Insights (3 bullet points), and Setup Instructions.",
        tag: "Documentation",
        tagType: "blue"
      },
      {
        id: "w4_t3",
        title: "Verbal Checkpoint Test",
        desc: "Close the code and explain aloud: 'What is the difference between median and mean in skewed telemetry?'",
        tag: "Checkpoint",
        tagType: "amber"
      },
      {
        id: "w4_t4",
        title: "DSA: Contains Duplicate (Java)",
        desc: "Solve using HashSet in O(n) time and O(n) space.",
        tag: "DSA Java",
        tagType: "amber"
      }
    ]
  },

  // ---------- PHASE 2: WEEKS 5 TO 9 ----------
  {
    week: 5,
    phase: "Phase 2: Scikit-Learn ML Fundamentals",
    dates: "Nov 2 – Nov 8, 2026",
    title: "Week 5: Intro to Machine Learning & Train-Test Splitting",
    outcome: "First baseline Decision Tree and Random Forest models trained in scikit-learn.",
    summary: "Understand predictive algorithms, features vs targets, and preventing data leakage.",
    dsa: "Java: Valid Anagram (HashMap / Frequency Array).",
    resources: [
      { name: "Kaggle Intro to Machine Learning", url: "https://www.kaggle.com/learn/intro-to-machine-learning" },
      { name: "Scikit-Learn Official User Guide", url: "https://scikit-learn.org/stable/user_guide.html" }
    ],
    tasks: [
      {
        id: "w5_t1",
        title: "Initialize Repo 2 'applied-ml-models'",
        desc: "Set up project structure: data/, notebooks/, src/train.py, and requirements.txt.",
        tag: "Setup",
        tagType: "blue"
      },
      {
        id: "w5_t2",
        title: "Complete Kaggle Intro to ML Course",
        desc: "Build your first DecisionTreeRegressor and evaluate with Mean Absolute Error (MAE).",
        tag: "ML Core",
        tagType: "purple"
      },
      {
        id: "w5_t3",
        title: "Implement Train-Test Split",
        desc: "Write train_test_split(test_size=0.2, random_state=42) and verify zero target leakage.",
        tag: "Scikit-Learn",
        tagType: "emerald"
      },
      {
        id: "w5_t4",
        title: "DSA: Valid Anagram (Java)",
        desc: "Solve using a 26-element character frequency counter in O(n) time.",
        tag: "DSA Java",
        tagType: "amber"
      }
    ]
  },
  {
    week: 6,
    phase: "Phase 2: Scikit-Learn ML Fundamentals",
    dates: "Nov 9 – Nov 15, 2026",
    title: "Week 6: Intermediate ML & Cross-Validation",
    outcome: "Robust model evaluation avoiding overfitting using K-Fold cross validation.",
    summary: "Move beyond single test splits into production validation standards.",
    dsa: "Java: Maximum Subarray (Kadane's Algorithm).",
    resources: [
      { name: "Kaggle Intermediate Machine Learning", url: "https://www.kaggle.com/learn/intermediate-machine-learning" },
      { name: "Scikit-Learn Cross-Validation Guide", url: "https://scikit-learn.org/stable/modules/cross_validation.html" }
    ],
    tasks: [
      {
        id: "w6_t1",
        title: "Complete Categorical Encoding & Imputation",
        desc: "Implement OneHotEncoder and SimpleImputer inside a clean Scikit-Learn Pipeline.",
        tag: "Feature Eng",
        tagType: "purple"
      },
      {
        id: "w6_t2",
        title: "Implement 5-Fold Cross-Validation",
        desc: "Use cross_val_score on your baseline model and analyze variance across folds.",
        tag: "Validation",
        tagType: "emerald"
      },
      {
        id: "w6_t3",
        title: "Audit for Data Leakage",
        desc: "Ensure all fit() calls occur strictly on training folds, never on validation/test folds.",
        tag: "Integrity",
        tagType: "blue"
      },
      {
        id: "w6_t4",
        title: "DSA: Maximum Subarray (Java)",
        desc: "Implement Kadane's algorithm in O(n) time and O(1) space.",
        tag: "DSA Java",
        tagType: "amber"
      }
    ]
  },
  {
    week: 7,
    phase: "Phase 2: Scikit-Learn ML Fundamentals",
    dates: "Nov 16 – Nov 22, 2026",
    title: "Week 7: Classification Metrics Deep-Dive",
    outcome: "Full comprehension of Precision, Recall, F1-Score & ROC-AUC curves.",
    summary: "Accuracy is a trap on imbalanced datasets. Learn what enterprise interviewers grill on.",
    dsa: "Java: Binary Search on Sorted Array.",
    resources: [
      { name: "StatQuest: Precision & Recall (YouTube)", url: "https://www.youtube.com/watch?v=j-EB6RqqjGI" },
      { name: "Scikit-Learn Classification Metrics", url: "https://scikit-learn.org/stable/modules/model_evaluation.html#classification-metrics" }
    ],
    tasks: [
      {
        id: "w7_t1",
        title: "Train an Imbalanced Classifier",
        desc: "Train on a fraud or disease dataset where positive class is <5% of samples.",
        tag: "Modeling",
        tagType: "purple"
      },
      {
        id: "w7_t2",
        title: "Plot Confusion Matrix & ROC-AUC",
        desc: "Generate ConfusionMatrixDisplay and ROC curve with threshold trade-offs.",
        tag: "Evaluation",
        tagType: "emerald"
      },
      {
        id: "w7_t3",
        title: "Verbal Checkpoint: Precision vs Recall",
        desc: "Explain out loud: 'Why is High Recall critical in cancer diagnosis or sensor failure detection?'",
        tag: "Checkpoint",
        tagType: "amber"
      },
      {
        id: "w7_t4",
        title: "DSA: Binary Search (Java)",
        desc: "Implement standard binary search iteratively without integer overflow.",
        tag: "DSA Java",
        tagType: "amber"
      }
    ]
  },
  {
    week: 8,
    phase: "Phase 2: Scikit-Learn ML Fundamentals",
    dates: "Nov 23 – Nov 29, 2026",
    title: "Week 8: Ensembles, Random Forests & Anomaly Foundations",
    outcome: "Trained Random Forest & Isolation Forest on high-dimensional data.",
    summary: "Bridge standard classification into unsupervised anomaly detection.",
    dsa: "Java: Reverse Linked List (Iterative).",
    resources: [
      { name: "Isolation Forest Paper & Scikit Docs", url: "https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.IsolationForest.html" }
    ],
    tasks: [
      {
        id: "w8_t1",
        title: "Tune Random Forest Classifier",
        desc: "Compare Decision Tree vs Random Forest on test accuracy and variance.",
        tag: "Ensembles",
        tagType: "purple"
      },
      {
        id: "w8_t2",
        title: "First Anomaly Detector (Isolation Forest)",
        desc: "Run IsolationForest(contamination=0.05) on synthetic outliers and inspect decision scores.",
        tag: "Anomaly AI",
        tagType: "emerald"
      },
      {
        id: "w8_t3",
        title: "Commit Model Artifact (.joblib / .pkl)",
        desc: "Export trained model weights using joblib.dump() and test loading in a clean script.",
        tag: "Serialization",
        tagType: "blue"
      },
      {
        id: "w8_t4",
        title: "DSA: Reverse Linked List (Java)",
        desc: "Implement in-place iterative pointer reversal in O(n) time.",
        tag: "DSA Java",
        tagType: "amber"
      }
    ]
  },
  {
    week: 9,
    phase: "Phase 2: Scikit-Learn ML Fundamentals",
    dates: "Nov 30 – Dec 6, 2026",
    title: "Week 9: Repository 2 Milestone — End-to-End ML Pipeline",
    outcome: "PUBLIC REPO 2: Published model with cross-validation and verbal mastery.",
    summary: "Proves you understand machine learning principles without copying blind tutorials.",
    dsa: "Java: Merge Two Sorted Lists.",
    resources: [
      { name: "GitHub Model Release Best Practices", url: "https://github.com/features/actions" }
    ],
    tasks: [
      {
        id: "w9_t1",
        title: "Clean Repo 2 Codebase & README",
        desc: "Document model accuracy, precision/recall metrics, hyperparameters, and setup instructions.",
        tag: "Deliverable",
        tagType: "emerald"
      },
      {
        id: "w9_t2",
        title: "Midpoint Knowledge Defense Checkpoint",
        desc: "Explain aloud: Overfitting, Cross-Validation, Data Leakage, and why Isolation Forest isolates anomalies.",
        tag: "Checkpoint",
        tagType: "amber"
      },
      {
        id: "w9_t3",
        title: "Verify RTX 3050 Ollama Setup",
        desc: "Install Ollama locally and pull llama3.2:3b to confirm 3B model runs within 4GB VRAM.",
        tag: "Hardware Prep",
        tagType: "blue"
      },
      {
        id: "w9_t4",
        title: "DSA: Merge Two Sorted Lists (Java)",
        desc: "Solve using two pointers on linked list nodes in O(n) time.",
        tag: "DSA Java",
        tagType: "amber"
      }
    ]
  },

  // ---------- PHASE 3: WEEKS 10 TO 14 ----------
  {
    week: 10,
    phase: "Phase 3: Flagship Sensor-Anomaly System",
    dates: "Dec 7 – Dec 13, 2026",
    title: "Week 10: Flagship Ingestion & NASA C-MAPSS Telemetry",
    outcome: "Repository 3 initialized: Sensor telemetry preprocessed from real run-to-failure engines.",
    summary: "Ingest NASA turbofan sensor logs; calculate rolling means and degradation markers.",
    dsa: "Java: Valid Parentheses (Stack).",
    resources: [
      { name: "NASA C-MAPSS Dataset (Kaggle)", url: "https://www.kaggle.com/datasets/behrad3d/nasa-cmaps" },
      { name: "Predictive Maintenance Baseline Guide", url: "https://github.com/alexperrier/predictive-maintenance" }
    ],
    tasks: [
      {
        id: "w10_t1",
        title: "Initialize Repo 3 'sensor-anomaly-radar'",
        desc: "Create directory structure: pipeline/, models/, api/, and docs/.",
        tag: "Flagship",
        tagType: "emerald"
      },
      {
        id: "w10_t2",
        title: "Ingest NASA C-MAPSS Turbofan Sensor Data",
        desc: "Load multi-channel telemetry (temperature, pressure, vibration readings across engine cycles).",
        tag: "Telemetry",
        tagType: "purple"
      },
      {
        id: "w10_t3",
        title: "Feature Engineering: Rolling Statistics",
        desc: "Compute rolling mean and standard deviation over 5-cycle windows to capture degradation trends.",
        tag: "Feature Eng",
        tagType: "blue"
      },
      {
        id: "w10_t4",
        title: "DSA: Valid Parentheses (Java)",
        desc: "Solve using standard Stack (ArrayDeque) matching brackets in O(n).",
        tag: "DSA Java",
        tagType: "amber"
      }
    ]
  },
  {
    week: 11,
    phase: "Phase 3: Flagship Sensor-Anomaly System",
    dates: "Dec 14 – Dec 20, 2026",
    title: "Week 11: Deterministic Anomaly Engine (Scikit-Learn)",
    outcome: "Trained Isolation Forest flagging engine failure precursors with high recall.",
    summary: "Deterministic code decides what's anomalous; mathematical integrity first.",
    dsa: "Java: Invert Binary Tree.",
    resources: [
      { name: "Scikit-Learn Novelty and Outlier Detection", url: "https://scikit-learn.org/stable/modules/outlier_detection.html" }
    ],
    tasks: [
      {
        id: "w11_t1",
        title: "Train Isolation Forest on Healthy Cycles",
        desc: "Fit model strictly on initial normal engine operational cycles (baseline healthy state).",
        tag: "Anomaly Model",
        tagType: "purple"
      },
      {
        id: "w11_t2",
        title: "Score Degraded Cycles & Evaluate Detection",
        desc: "Test on run-to-failure cycles and measure how many cycles before failure an anomaly is flagged.",
        tag: "Validation",
        tagType: "emerald"
      },
      {
        id: "w11_t3",
        title: "Save Model & Anomaly Threshold Rules",
        desc: "Serialize detector to models/engine_anomaly_v1.joblib and log threshold statistics.",
        tag: "Pipeline",
        tagType: "blue"
      },
      {
        id: "w11_t4",
        title: "DSA: Invert Binary Tree (Java)",
        desc: "Solve recursively swapping left and right child pointers.",
        tag: "DSA Java",
        tagType: "amber"
      }
    ]
  },
  {
    week: 12,
    phase: "Phase 3: Flagship Sensor-Anomaly System",
    dates: "Dec 21 – Dec 27, 2026",
    title: "Week 12: Local Ollama 3B Diagnostic Explainer",
    outcome: "Local LLM translating raw anomaly matrices into plain-language diagnostic reports.",
    summary: "The rule: Code decides what's anomalous, the LLM only translates it for human operators.",
    dsa: "Java: Maximum Depth of Binary Tree.",
    resources: [
      { name: "Ollama Python Library", url: "https://github.com/ollama/ollama-python" },
      { name: "Llama 3.2 3B Model Card", url: "https://ollama.com/library/llama3.2" }
    ],
    tasks: [
      {
        id: "w12_t1",
        title: "Integrate Ollama Python SDK",
        desc: "Write explainer.py calling llama3.2:3b locally on your RTX 3050 (under 2.5GB VRAM usage).",
        tag: "Local AI",
        tagType: "purple"
      },
      {
        id: "w12_t2",
        title: "Design Grounded Diagnostic Prompt",
        desc: "Prompt LLM strictly with anomalous sensor names, deviation percentages, and cycle numbers (no hallucinations).",
        tag: "Prompt Eng",
        tagType: "emerald"
      },
      {
        id: "w12_t3",
        title: "Generate Structured Incident Log",
        desc: "Output formatted Markdown report: Severity, Trigger Sensors, Probable Subsystem, and Recommended Action.",
        tag: "Pipeline",
        tagType: "blue"
      },
      {
        id: "w12_t4",
        title: "DSA: Maximum Depth of Binary Tree (Java)",
        desc: "Compute tree depth using simple recursive post-order traversal.",
        tag: "DSA Java",
        tagType: "amber"
      }
    ]
  },
  {
    week: 13,
    phase: "Phase 3: Flagship Sensor-Anomaly System",
    dates: "Dec 28, 2026 – Jan 3, 2027",
    title: "Week 13: Lightweight FastAPI Microservice",
    outcome: "1-file FastAPI endpoint deployed locally checking the 'FastAPI advantage' box.",
    summary: "Expose POST /diagnose endpoint returning anomaly score + plain-language diagnostic.",
    dsa: "Java: Climbing Stairs (Basic DP / Fibonacci).",
    resources: [
      { name: "FastAPI First Steps", url: "https://fastapi.tiangolo.com/tutorial/first-steps/" },
      { name: "Pydantic Schemas Guide", url: "https://docs.pydantic.dev/latest/" }
    ],
    tasks: [
      {
        id: "w13_t1",
        title: "Build api/main.py with FastAPI",
        desc: "Define Pydantic TelemetryInput schema accepting sensor readings and engine cycle ID.",
        tag: "FastAPI",
        tagType: "emerald"
      },
      {
        id: "w13_t2",
        title: "Connect Pipeline to POST /diagnose",
        desc: "Input JSON ➔ scikit-learn anomaly check ➔ Ollama summary ➔ return unified JSON response.",
        tag: "Integration",
        tagType: "purple"
      },
      {
        id: "w13_t3",
        title: "Verify Swagger UI (/docs)",
        desc: "Test sample telemetry vectors through the browser documentation dashboard in under 1 second.",
        tag: "Verification",
        tagType: "blue"
      },
      {
        id: "w13_t4",
        title: "DSA: Climbing Stairs (Java)",
        desc: "Solve using iterative bottom-up dynamic programming in O(n) time and O(1) space.",
        tag: "DSA Java",
        tagType: "amber"
      }
    ]
  },
  {
    week: 14,
    phase: "Phase 3: Flagship Sensor-Anomaly System",
    dates: "Jan 4 – Jan 10, 2027",
    title: "Week 14: Repository 3 Milestone — Flagship Release & Demo",
    outcome: "PUBLIC REPO 3: Architecture diagram + 60-second video demo (Your killer portfolio piece).",
    summary: "Package your flagship sensor radar so recruiters instantly understand your engineering value.",
    dsa: "Java: Linked List Cycle (Floyd's Tortoise and Hare).",
    resources: [
      { name: "Mermaid Diagram Live Editor", url: "https://mermaid.live" },
      { name: "OBS Studio (Free Screen Recorder)", url: "https://obsproject.com" }
    ],
    tasks: [
      {
        id: "w14_t1",
        title: "Draw System Architecture Diagram",
        desc: "Include Mermaid flowchart in README: NASA Telemetry ➔ Isolation Forest ➔ Ollama 3B ➔ FastAPI.",
        tag: "Deliverable",
        tagType: "emerald"
      },
      {
        id: "w14_t2",
        title: "Record 60-Second Video Demo",
        desc: "Screen record sending an anomalous sensor payload via FastAPI Swagger UI and showing the local LLM diagnostic.",
        tag: "Proof of Work",
        tagType: "purple"
      },
      {
        id: "w14_t3",
        title: "Polish Final README & GitHub Tags",
        desc: "Tag repository: #machine-learning, #predictive-maintenance, #fastapi, #ollama, #scikit-learn.",
        tag: "Portfolio",
        tagType: "blue"
      },
      {
        id: "w14_t4",
        title: "DSA: Linked List Cycle (Java)",
        desc: "Implement slow/fast pointers detection in O(n) time and O(1) memory.",
        tag: "DSA Java",
        tagType: "amber"
      }
    ]
  },

  // ---------- PHASE 4: WEEKS 15 TO 16 ----------
  {
    week: 15,
    phase: "Phase 4: Applications & Interview Prep",
    dates: "Jan 11 – Jan 17, 2027",
    title: "Week 15: Resume Alignment & First Application Wave",
    outcome: "Resume overhauled with 3 verified repos + applied to AICTE/TantrShell & 3 startups.",
    summary: "Align skills line honestly: Python, Pandas, NumPy, scikit-learn, SQL, Git, FastAPI.",
    dsa: "Java: Two Sum II - Input Array Is Sorted.",
    resources: [
      { name: "AICTE Internship Portal", url: "https://internship.aicte-india.org" },
      { name: "Wellfound (AngelList) Internships", url: "https://wellfound.com" }
    ],
    tasks: [
      {
        id: "w15_t1",
        title: "Overhaul Resume Skills & Projects",
        desc: "Feature your 3 repos with clickable GitHub links, bullet metrics, and exact technologies used.",
        tag: "Resume",
        tagType: "blue"
      },
      {
        id: "w15_t2",
        title: "Apply to AICTE/TantrShell Internship",
        desc: "Submit application with your updated GitHub links and flagship project highlights.",
        tag: "Application",
        tagType: "emerald"
      },
      {
        id: "w15_t3",
        title: "Post Flagship Demo on LinkedIn",
        desc: "Upload the 60-second video demo showing telemetry anomaly detection + Ollama report. Zero certificate spam.",
        tag: "Public Brand",
        tagType: "purple"
      },
      {
        id: "w15_t4",
        title: "DSA: Two Sum II Sorted (Java)",
        desc: "Solve using two pointers starting from left and right boundaries.",
        tag: "DSA Java",
        tagType: "amber"
      }
    ]
  },
  {
    week: 16,
    phase: "Phase 4: Applications & Interview Prep",
    dates: "Jan 18 – Jan 24, 2027",
    title: "Week 16: Mock Technical Defense & Corporate Applications",
    outcome: "5+ total applications sent + confident verbal walkthrough of all ML algorithms.",
    summary: "Prepare for live technical grills: explain every hyperparameter and model trade-off.",
    dsa: "Java: 3Sum (Medium).",
    resources: [
      { name: "Deloitte / Top MNC ML Interview Questions", url: "https://github.com/alexeygrigorev/data-science-interviews" }
    ],
    tasks: [
      {
        id: "w16_t1",
        title: "Submit Applications to 5 Targeted Firms",
        desc: "Apply to Deloitte intern pools, analytics startups on Wellfound, and local tech hubs.",
        tag: "Applications",
        tagType: "emerald"
      },
      {
        id: "w16_t2",
        title: "Conduct 30-Minute Mock Technical Defense",
        desc: "Practice answering: 'Why Isolation Forest over KMeans?', 'What is Data Leakage?', and live SQL Joins.",
        tag: "Interview Prep",
        tagType: "purple"
      },
      {
        id: "w16_t3",
        title: "Set Semester 5 Ramp-Up Plan",
        desc: "Review your 3 live public repos. Transition to Phase 2 (RAG, full-stack microservices & expanded DSA).",
        tag: "Next Step",
        tagType: "blue"
      },
      {
        id: "w16_t4",
        title: "DSA: 3Sum (Java)",
        desc: "Sort array and use two pointers for each element in O(n^2) time.",
        tag: "DSA Java",
        tagType: "amber"
      }
    ]
  }
];

/* ================= STATE & STORAGE ================= */
const START_DATE = new Date("2026-10-05T00:00:00+05:30");
const TOTAL_WEEKS = 16;
let currentViewingWeek = 1;
let completedTasks = JSON.parse(localStorage.getItem("apex16_tasks") || "{}");

/* ================= HELPER FUNCTIONS ================= */
function calculateSprintTime() {
  const now = new Date();
  const diffMs = now - START_DATE;
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  
  let currentWeek = 1;
  let dayText = "Day 1";
  let statusTag = "LIVE";

  if (diffDays < 0) {
    dayText = `Starts in ${Math.abs(diffDays)}d`;
    statusTag = "PREP";
    currentWeek = 1;
  } else {
    const elapsedDays = diffDays + 1;
    dayText = `Day ${elapsedDays}`;
    currentWeek = Math.min(TOTAL_WEEKS, Math.max(1, Math.ceil(elapsedDays / 7)));
    statusTag = elapsedDays <= 112 ? "ACTIVE" : "COMPLETED";
  }

  return { diffDays, currentWeek, dayText, statusTag };
}

function updateProgressMetrics() {
  let totalTasks = 0;
  let totalCompleted = 0;

  WEEKS_DATA.forEach(w => {
    w.tasks.forEach(t => {
      totalTasks++;
      if (completedTasks[t.id]) totalCompleted++;
    });
  });

  const percent = totalTasks > 0 ? Math.round((totalCompleted / totalTasks) * 100) : 0;
  
  const progBar = document.getElementById("overallProgressBar");
  if (progBar) progBar.style.width = `${Math.max(6, percent)}%`;

  const percentText = document.getElementById("percentCompletedText");
  if (percentText) percentText.innerText = `${percent}% Complete`;

  const daysText = document.getElementById("daysRemainingText");
  if (daysText) {
    const { diffDays } = calculateSprintTime();
    const remaining = Math.max(0, 112 - (diffDays + 1));
    daysText.innerText = `${remaining} Days Left`;
  }
}

/* ================= RENDER FUNCTIONS ================= */
function renderSidebarNav() {
  const navContainer = document.getElementById("weekNavList");
  if (!navContainer) return;

  navContainer.innerHTML = "";
  let lastPhase = "";

  WEEKS_DATA.forEach((w) => {
    // Add phase header if changed
    if (w.phase !== lastPhase) {
      const pHeader = document.createElement("div");
      pHeader.className = "phase-group-header";
      pHeader.innerText = w.phase;
      navContainer.appendChild(pHeader);
      lastPhase = w.phase;
    }

    // Check how many tasks completed in this week
    const doneCount = w.tasks.filter(t => completedTasks[t.id]).length;
    const isAllDone = doneCount === w.tasks.length;

    const btn = document.createElement("button");
    btn.className = `nav-week-btn ${w.week === currentViewingWeek ? "active" : ""} ${isAllDone ? "completed" : ""}`;
    btn.onclick = () => selectWeek(w.week);

    btn.innerHTML = `
      <div class="flex items-center gap-2 truncate">
        <span>${isAllDone ? "✓" : "•"}</span>
        <span class="truncate">W${w.week}: ${w.title.split(":")[1]?.trim() || w.title}</span>
      </div>
      <span class="week-pill">${doneCount}/${w.tasks.length}</span>
    `;

    navContainer.appendChild(btn);
  });
}

function renderWeekContent(weekNumber) {
  const weekData = WEEKS_DATA.find(w => w.week === weekNumber);
  if (!weekData) return;

  // Header Elements
  document.getElementById("activePhaseName").innerText = weekData.phase;
  document.getElementById("activeDateRange").innerText = weekData.dates;
  document.getElementById("activeWeekTitle").innerText = weekData.title;
  document.getElementById("weekOutcomeText").innerText = weekData.outcome;
  document.getElementById("weekSummaryText").innerText = weekData.summary;
  document.getElementById("dsaRequirementText").innerText = weekData.dsa;

  // Resource Links
  const resContainer = document.getElementById("resourceLinksList");
  resContainer.innerHTML = "";
  weekData.resources.forEach(r => {
    const li = document.createElement("li");
    li.innerHTML = `
      <a href="${r.url}" target="_blank" rel="noopener noreferrer" class="hover:text-blue-400 text-slate-300 transition-colors flex items-center justify-between group">
        <span class="group-hover:underline">${r.name}</span>
        <span class="text-slate-500 text-[10px]">↗</span>
      </a>
    `;
    resContainer.appendChild(li);
  });

  // Task List Checklist
  const taskList = document.getElementById("taskListContainer");
  taskList.innerHTML = "";

  let doneInWeek = 0;

  weekData.tasks.forEach(t => {
    const isDone = !!completedTasks[t.id];
    if (isDone) doneInWeek++;

    const card = document.createElement("div");
    card.className = `task-card flex items-start gap-4 ${isDone ? "task-done" : ""}`;
    
    card.innerHTML = `
      <input type="checkbox" class="custom-checkbox" id="${t.id}" ${isDone ? "checked" : ""}>
      <div class="flex-1">
        <div class="flex items-center justify-between gap-3 mb-1.5">
          <label for="${t.id}" class="task-title text-sm font-bold text-slate-100 cursor-pointer select-none hover:text-blue-300 transition-colors">${t.title}</label>
          <span class="tag-badge tag-${t.tagType}">${t.tag}</span>
        </div>
        <p class="text-xs text-slate-400 leading-relaxed font-normal">${t.desc}</p>
      </div>
    `;

    const checkbox = card.querySelector("input");
    checkbox.onchange = (e) => toggleTask(t.id, e.target.checked);

    taskList.appendChild(card);
  });

  // Update Week Progress Box
  const percentInWeek = weekData.tasks.length > 0 ? Math.round((doneInWeek / weekData.tasks.length) * 100) : 0;
  document.getElementById("weekProgressPercent").innerText = `${percentInWeek}%`;
  document.getElementById("tasksDoneCount").innerText = `${doneInWeek} / ${weekData.tasks.length} Done`;

  // Update Prev / Next Buttons
  document.getElementById("prevWeekBtn").disabled = weekNumber <= 1;
  document.getElementById("nextWeekBtn").disabled = weekNumber >= TOTAL_WEEKS;
  document.getElementById("prevWeekBtn").style.opacity = weekNumber <= 1 ? "0.4" : "1";
  document.getElementById("nextWeekBtn").style.opacity = weekNumber >= TOTAL_WEEKS ? "0.4" : "1";
}

function selectWeek(weekNum) {
  currentViewingWeek = Math.max(1, Math.min(TOTAL_WEEKS, weekNum));
  renderSidebarNav();
  renderWeekContent(currentViewingWeek);
}

function toggleTask(taskId, isChecked) {
  if (isChecked) {
    completedTasks[taskId] = true;
  } else {
    delete completedTasks[taskId];
  }
  localStorage.setItem("apex16_tasks", JSON.stringify(completedTasks));
  renderSidebarNav();
  renderWeekContent(currentViewingWeek);
  updateProgressMetrics();
}

/* ================= INITIALIZATION ================= */
document.addEventListener("DOMContentLoaded", () => {
  const { currentWeek, dayText, statusTag } = calculateSprintTime();
  
  // Set Live Clock Elements
  document.getElementById("dayCounterText").innerText = dayText;
  document.getElementById("weekCounterBadge").innerText = `Week ${currentWeek} of 16`;
  document.getElementById("liveStatusTag").innerText = statusTag;

  // Event Listeners for Nav Buttons
  document.getElementById("prevWeekBtn").onclick = () => selectWeek(currentViewingWeek - 1);
  document.getElementById("nextWeekBtn").onclick = () => selectWeek(currentViewingWeek + 1);
  document.getElementById("currentWeekBtn").onclick = () => {
    const { currentWeek } = calculateSprintTime();
    selectWeek(currentWeek);
  };

  // Default to live current week
  currentViewingWeek = currentWeek;
  renderSidebarNav();
  renderWeekContent(currentViewingWeek);
  updateProgressMetrics();
});
