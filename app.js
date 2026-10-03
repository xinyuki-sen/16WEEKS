/* ================= 20WEEKS (v2) DATA STORE ================= */
/* Author: Rohan Pradhan | Start Date: Oct 5, 2026 */

const WEEKS_DATA = [
  // ==================== PHASE 1: WEEKS 1 TO 5 (~35 hrs) ====================
  // Focus: Git, pandas, SQL, first analysis
  {
    week: 1,
    phase: "Phase 1: Git, Pandas & SQL Foundations",
    phaseHours: "~35 hrs",
    dates: "Oct 5 – Oct 11, 2026",
    title: "Week 1: Setup, GitHub & Kaggle Pandas Kickoff",
    outcome: "Repo created, first commit pushed via command line.",
    summary: "Initialize your clean GitHub repo, start Kaggle Pandas, and reach out to mentors for early advice.",
    dsa: "Java: Arrays & Two Pointers (1 problem: LeetCode 1 - Two Sum). Focus on HashMap O(n).",
    doneWhen: "Repo created, first commit pushed",
    resources: [
      { name: "Kaggle Pandas Micro-Course (5-10 hrs)", url: "https://www.kaggle.com/learn/pandas" },
      { name: "Git & GitHub CLI Cheat Sheet", url: "https://education.github.com/git-cheat-sheet-education.pdf" },
      { name: "LeetCode 1: Two Sum (Java)", url: "https://leetcode.com/problems/two-sum/" }
    ],
    tasks: [
      {
        id: "w1_t1",
        title: "Create GitHub Repo 'data-analysis-foundations'",
        desc: "Initialize via terminal (git init), add standard Python .gitignore, and write an initial README.",
        tag: "Git & CLI",
        tagType: "blue"
      },
      {
        id: "w1_t2",
        title: "Start Kaggle Pandas Course (Lessons 1–3)",
        desc: "Cover Creating, Reading and Writing, Indexing, Selecting & Assigning data in DataFrames.",
        tag: "Pandas",
        tagType: "purple"
      },
      {
        id: "w1_t3",
        title: "Outreach: CMR Faculty & ISRO Intern",
        desc: "Message a CMR faculty member and the ISRO intern for brief advice on project direction and code expectations.",
        tag: "Networking",
        tagType: "emerald"
      },
      {
        id: "w1_t4",
        title: "DSA Checkpoint: Two Sum in Java",
        desc: "Solve using HashMap in O(n) time. Explain logic aloud before pushing to GitHub.",
        tag: "DSA Java",
        tagType: "amber"
      }
    ]
  },
  {
    week: 2,
    phase: "Phase 1: Git, Pandas & SQL Foundations",
    phaseHours: "~35 hrs",
    dates: "Oct 12 – Oct 18, 2026",
    title: "Week 2: Finish Pandas & Kaggle Data Cleaning",
    outcome: "2 data cleaning and manipulation notebooks committed to GitHub.",
    summary: "Complete Pandas mastery and learn to diagnose and clean dirty, missing, and malformed data.",
    dsa: "Java: Two Pointers (LeetCode 125 - Valid Palindrome). Focus on string manipulation & two-pointer bounds.",
    doneWhen: "2 cleaning notebooks committed",
    resources: [
      { name: "Kaggle Data Cleaning Course", url: "https://www.kaggle.com/learn/data-cleaning" },
      { name: "Pandas Indexing & Slicing Guide", url: "https://pandas.pydata.org/docs/user_guide/indexing.html" },
      { name: "LeetCode 125: Valid Palindrome", url: "https://leetcode.com/problems/valid-palindrome/" }
    ],
    tasks: [
      {
        id: "w2_t1",
        title: "Complete Kaggle Pandas Course (Lessons 4–6)",
        desc: "Master Summary Functions, Maps, Grouping, Sorting, Data Types, and Renaming/Combining data.",
        tag: "Pandas",
        tagType: "purple"
      },
      {
        id: "w2_t2",
        title: "Complete Kaggle Data Cleaning",
        desc: "Handle missing values (.dropna, .fillna), scaling vs normalizing, parsing dates, and character encodings.",
        tag: "Data Prep",
        tagType: "blue"
      },
      {
        id: "w2_t3",
        title: "Commit 2 Structured Cleaning Notebooks",
        desc: "Clean dirty datasets and push verified .ipynb / .py scripts to your repo with clean markdown notes.",
        tag: "Deliverable",
        tagType: "emerald"
      },
      {
        id: "w2_t4",
        title: "DSA: Valid Palindrome (Java)",
        desc: "Solve in O(n) time using two pointers scanning from left and right boundaries.",
        tag: "DSA Java",
        tagType: "amber"
      }
    ]
  },
  {
    week: 3,
    phase: "Phase 1: Git, Pandas & SQL Foundations",
    phaseHours: "~35 hrs",
    dates: "Oct 19 – Oct 25, 2026",
    title: "Week 3: Matplotlib Basics & Kaggle Intro to SQL",
    outcome: "10 SQL queries saved & tested; first visual charts generated.",
    summary: "Master SQL Joins and Group By (crucial for Deloitte & analytics screenings) and Matplotlib visualization.",
    dsa: "Java: Sliding Window / Greedy (LeetCode 121 - Best Time to Buy and Sell Stock).",
    doneWhen: "10 SQL queries saved",
    resources: [
      { name: "Kaggle Intro to SQL", url: "https://www.kaggle.com/learn/intro-to-sql" },
      { name: "Matplotlib Pyplot Tutorial", url: "https://matplotlib.org/stable/tutorials/pyplot.html" },
      { name: "LeetCode SQL 50 Study Plan", url: "https://leetcode.com/studyplan/top-sql-50/" }
    ],
    tasks: [
      {
        id: "w3_t1",
        title: "Matplotlib Fundamentals",
        desc: "Build histograms, scatter plots, line charts, and boxplots to visualize distributions and outliers.",
        tag: "Visualization",
        tagType: "purple"
      },
      {
        id: "w3_t2",
        title: "Complete Kaggle Intro to SQL",
        desc: "Learn SELECT, FROM, WHERE, GROUP BY, HAVING, and COUNT/AVG on real BigQuery datasets.",
        tag: "SQL",
        tagType: "blue"
      },
      {
        id: "w3_t3",
        title: "Save & Commit 10 SQL Queries",
        desc: "Write and document 10 SQL queries covering INNER JOIN, LEFT JOIN, aggregations, and subqueries.",
        tag: "Deliverable",
        tagType: "emerald"
      },
      {
        id: "w3_t4",
        title: "DSA: Best Time to Buy/Sell Stock (Java)",
        desc: "Solve in single-pass O(n) time tracking lowest buying price and peak profit.",
        tag: "DSA Java",
        tagType: "amber"
      }
    ]
  },
  {
    week: 4,
    phase: "Phase 1: Git, Pandas & SQL Foundations",
    phaseHours: "~35 hrs",
    dates: "Oct 26 – Nov 1, 2026",
    title: "Week 4: NumPy Basics & Dataset Selection (Not Titanic)",
    outcome: "Real dataset chosen, loaded, and first analytical questions answered.",
    summary: "Master multidimensional NumPy arrays, pick a genuine non-toy dataset, and initiate exploratory analysis.",
    dsa: "Java: HashSet / Sorting (LeetCode 217 - Contains Duplicate).",
    doneWhen: "Dataset chosen, first questions answered",
    resources: [
      { name: "NumPy Quickstart Tutorial", url: "https://numpy.org/doc/stable/user/quickstart.html" },
      { name: "Open Government Data (data.gov.in)", url: "https://data.gov.in" },
      { name: "Kaggle Datasets Hub", url: "https://www.kaggle.com/datasets" }
    ],
    tasks: [
      {
        id: "w4_t1",
        title: "NumPy Core Operations",
        desc: "Practice array broadcasting, slicing, boolean masking, vectorization, and matrix dot products.",
        tag: "NumPy",
        tagType: "purple"
      },
      {
        id: "w4_t2",
        title: "Select Real-World Dataset (Avoid Titanic/Iris)",
        desc: "Pick an Indian Air Quality (AQI), Zomato orders, or EV charging cycles dataset from data.gov.in or Kaggle.",
        tag: "Dataset",
        tagType: "emerald"
      },
      {
        id: "w4_t3",
        title: "Draft 3 Core Analytical Questions",
        desc: "Formulate 3 non-trivial hypotheses (e.g. seasonal correlation, peak load anomalies) and write code to answer them.",
        tag: "EDA",
        tagType: "blue"
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
  {
    week: 5,
    phase: "Phase 1: Git, Pandas & SQL Foundations",
    phaseHours: "~35 hrs",
    dates: "Nov 2 – Nov 8, 2026",
    title: "Week 5: Repository 1 Milestone — Production EDA Report",
    outcome: "REPO 1 DONE: Public EDA notebook + executive README published.",
    summary: "Finalize your first public portfolio piece: clean code, polished charts, and structured findings.",
    dsa: "Java: Frequency Counter (LeetCode 242 - Valid Anagram).",
    doneWhen: "Repo 1 done: EDA notebook + README",
    resources: [
      { name: "GitHub README Formatting Best Practices", url: "https://docs.github.com/en/get-started/writing-on-github" },
      { name: "Seaborn Aesthetic Styling Guide", url: "https://seaborn.pydata.org/tutorial/aesthetics.html" }
    ],
    tasks: [
      {
        id: "w5_t1",
        title: "Complete Write-up & Insight Synthesis",
        desc: "Structure EDA into 4 sections: Business Context, Data Cleaning, Key Visual Findings, and Conclusions.",
        tag: "Repo 1",
        tagType: "emerald"
      },
      {
        id: "w5_t2",
        title: "Export 4 High-Contrast Charts",
        desc: "Generate clean publication-ready figures (annotated distributions, correlation heatmaps).",
        tag: "Deliverable",
        tagType: "purple"
      },
      {
        id: "w5_t3",
        title: "Publish Public Repo 1 with Executive README",
        desc: "Push clean code, requirements.txt, and link charts. Tag repo: #data-analysis, #pandas, #eda.",
        tag: "Milestone",
        tagType: "blue"
      },
      {
        id: "w5_t4",
        title: "DSA: Valid Anagram (Java)",
        desc: "Solve using an integer frequency array (26 chars) in O(n) time and O(1) extra space.",
        tag: "DSA Java",
        tagType: "amber"
      }
    ]
  },

  // ==================== PHASE 2: WEEKS 6 TO 11 (~42 hrs) ====================
  // Focus: ML fundamentals with scikit-learn
  {
    week: 6,
    phase: "Phase 2: Scikit-Learn ML Fundamentals",
    phaseHours: "~42 hrs",
    dates: "Nov 9 – Nov 15, 2026",
    title: "Week 6: Intro to Machine Learning & Model Fitting",
    outcome: "First baseline ML model trained, validated, and evaluated.",
    summary: "Understand feature matrices, target vectors, train/test split, overfitting, and underfitting.",
    dsa: "Java: Kadane's Algorithm (LeetCode 53 - Maximum Subarray).",
    doneWhen: "First model trained and evaluated",
    resources: [
      { name: "Kaggle Intro to Machine Learning (~3 hrs)", url: "https://www.kaggle.com/learn/intro-to-machine-learning" },
      { name: "Scikit-Learn Getting Started Guide", url: "https://scikit-learn.org/stable/getting_started.html" }
    ],
    tasks: [
      {
        id: "w6_t1",
        title: "Initialize Repo 2 'applied-ml-models'",
        desc: "Structure project: src/train.py, models/, notebooks/, data/, and requirements.txt.",
        tag: "Repo 2",
        tagType: "blue"
      },
      {
        id: "w6_t2",
        title: "Complete Kaggle Intro to ML Course",
        desc: "Build first DecisionTreeRegressor. Learn how tree depth dictates overfitting vs underfitting.",
        tag: "ML Core",
        tagType: "purple"
      },
      {
        id: "w6_t3",
        title: "Implement Strict Train/Test Splitting",
        desc: "Use train_test_split(test_size=0.2, random_state=42) and evaluate with Mean Absolute Error (MAE).",
        tag: "Validation",
        tagType: "emerald"
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
    phaseHours: "~42 hrs",
    dates: "Nov 16 – Nov 22, 2026",
    title: "Week 7: Intermediate ML, Pipelines & Cross-Validation",
    outcome: "Production pipeline built with imputation, encoding & cross-validation.",
    summary: "Prevent data leakage by bundling imputation, encoding, and model fitting into Scikit-Learn Pipelines.",
    dsa: "Java: Binary Search (LeetCode 704 - Binary Search).",
    doneWhen: "Pipeline with cross-validation",
    resources: [
      { name: "Kaggle Intermediate Machine Learning", url: "https://www.kaggle.com/learn/intermediate-machine-learning" },
      { name: "Scikit-Learn Pipeline Documentation", url: "https://scikit-learn.org/stable/modules/compose.html#pipeline" }
    ],
    tasks: [
      {
        id: "w7_t1",
        title: "Build ColumnTransformer Pipeline",
        desc: "Combine SimpleImputer, OneHotEncoder, and StandardScaler into a single unified sklearn Pipeline.",
        tag: "Pipeline",
        tagType: "purple"
      },
      {
        id: "w7_t2",
        title: "Implement 5-Fold Cross-Validation",
        desc: "Run cross_val_score(cv=5) on your pipeline and inspect score variance across folds.",
        tag: "Validation",
        tagType: "emerald"
      },
      {
        id: "w7_t3",
        title: "Audit for Data Leakage",
        desc: "Ensure preprocessors are fitted strictly on training folds inside the pipeline, never on global data.",
        tag: "Integrity",
        tagType: "blue"
      },
      {
        id: "w7_t4",
        title: "DSA: Binary Search (Java)",
        desc: "Implement iterative binary search without integer overflow (low + (high - low) / 2).",
        tag: "DSA Java",
        tagType: "amber"
      }
    ]
  },
  {
    week: 8,
    phase: "Phase 2: Scikit-Learn ML Fundamentals",
    phaseHours: "~42 hrs",
    dates: "Nov 23 – Nov 29, 2026",
    title: "Week 8: Regression, Trees, Forests & Stats Refresher 1",
    outcome: "3 models compared side-by-side on the same dataset + stats refresher completed.",
    summary: "Compare Linear/Logistic Regression, Decision Trees, and Random Forests. Review distributions and variance.",
    dsa: "Java: Linked List (LeetCode 206 - Reverse Linked List).",
    doneWhen: "3 models compared on one dataset",
    resources: [
      { name: "StatQuest: Linear & Logistic Regression (YouTube)", url: "https://www.youtube.com/watch?v=yIYKR4sgzI8" },
      { name: "Scikit-Learn Random Forests Guide", url: "https://scikit-learn.org/stable/modules/ensemble.html#forests-of-randomized-trees" }
    ],
    tasks: [
      {
        id: "w8_t1",
        title: "Train 3 Competing Models",
        desc: "Train Logistic/Linear Regression, Decision Tree, and Random Forest on the identical feature matrix.",
        tag: "Benchmarking",
        tagType: "purple"
      },
      {
        id: "w8_t2",
        title: "Stats Refresher Part 1",
        desc: "Review Gaussian distributions, standard deviation, variance, sampling bias, and the Central Limit Theorem.",
        tag: "Statistics",
        tagType: "blue"
      },
      {
        id: "w8_t3",
        title: "Build Model Comparison Table",
        desc: "Document training time, cross-validated accuracy/MAE, and parameter counts in a clear markdown table.",
        tag: "Deliverable",
        tagType: "emerald"
      },
      {
        id: "w8_t4",
        title: "DSA: Reverse Linked List (Java)",
        desc: "Solve using standard 3-pointer iterative reversal in O(n) time and O(1) space.",
        tag: "DSA Java",
        tagType: "amber"
      }
    ]
  },
  {
    week: 9,
    phase: "Phase 2: Scikit-Learn ML Fundamentals",
    phaseHours: "~42 hrs",
    dates: "Nov 30 – Dec 6, 2026",
    title: "Week 9: Metrics Deep-Dive & Stats Refresher 2",
    outcome: "Metrics table with written interpretation on imbalanced evaluation.",
    summary: "Master Precision, Recall, F1, and Confusion Matrices. Review statistical significance basics.",
    dsa: "Java: Linked List (LeetCode 21 - Merge Two Sorted Lists).",
    doneWhen: "Metrics table with written interpretation",
    resources: [
      { name: "StatQuest: ROC and AUC Curves (YouTube)", url: "https://www.youtube.com/watch?v=4jRBRDbJemM" },
      { name: "Scikit-Learn Classification Report", url: "https://scikit-learn.org/stable/modules/generated/sklearn.metrics.classification_report.html" }
    ],
    tasks: [
      {
        id: "w9_t1",
        title: "Evaluate Classification Metrics",
        desc: "Compute Precision, Recall, F1-Score, and plot ConfusionMatrixDisplay on an imbalanced classification problem.",
        tag: "Metrics",
        tagType: "purple"
      },
      {
        id: "w9_t2",
        title: "Stats Refresher Part 2: Significance",
        desc: "Learn p-value fundamentals, confidence intervals, and hypothesis testing in plain language.",
        tag: "Statistics",
        tagType: "blue"
      },
      {
        id: "w9_t3",
        title: "Write-up: Precision vs Recall Trade-Off",
        desc: "Write a 1-page report explaining which metric matters more in medical screening vs fraud detection.",
        tag: "Deliverable",
        tagType: "emerald"
      },
      {
        id: "w9_t4",
        title: "DSA: Merge Two Sorted Lists (Java)",
        desc: "Solve using two pointers merging nodes into a dummy head list in O(n + m) time.",
        tag: "DSA Java",
        tagType: "amber"
      }
    ]
  },
  {
    week: 10,
    phase: "Phase 2: Scikit-Learn ML Fundamentals",
    phaseHours: "~42 hrs",
    dates: "Dec 7 – Dec 13, 2026",
    title: "Week 10: Clustering, PCA & End-to-End Model Project Skeleton",
    outcome: "Project skeleton + baseline model initialized for Repo 2.",
    summary: "Explore unsupervised clustering (K-Means) and dimensionality reduction (PCA) while initiating Repo 2.",
    dsa: "Java: Stack (LeetCode 20 - Valid Parentheses).",
    doneWhen: "Project skeleton + baseline model",
    resources: [
      { name: "Scikit-Learn K-Means Clustering", url: "https://scikit-learn.org/stable/modules/clustering.html#k-means" },
      { name: "PCA Dimensionality Reduction Guide", url: "https://scikit-learn.org/stable/modules/decomposition.html#pca" }
    ],
    tasks: [
      {
        id: "w10_t1",
        title: "Implement K-Means & PCA",
        desc: "Reduce high-dimensional data using PCA(n_components=2) and visualize customer or sensor clusters.",
        tag: "Unsupervised",
        tagType: "purple"
      },
      {
        id: "w10_t2",
        title: "Structure End-to-End Repo 2",
        desc: "Set up src/pipeline.py, src/evaluate.py, and tests/ for your full-lifecycle scikit-learn model.",
        tag: "Architecture",
        tagType: "blue"
      },
      {
        id: "w10_t3",
        title: "Train Baseline Model with Tuned Hyperparameters",
        desc: "Run GridSearchCV or RandomizedSearchCV to optimize tree depth, n_estimators, and regularizers.",
        tag: "Optimization",
        tagType: "emerald"
      },
      {
        id: "w10_t4",
        title: "DSA: Valid Parentheses (Java)",
        desc: "Solve using ArrayDeque matching opening and closing bracket types in O(n) time.",
        tag: "DSA Java",
        tagType: "amber"
      }
    ]
  },
  {
    week: 11,
    phase: "Phase 2: Scikit-Learn ML Fundamentals",
    phaseHours: "~42 hrs",
    dates: "Dec 14 – Dec 20, 2026",
    title: "Week 11: Repository 2 Milestone — Verbal Defense & External Review",
    outcome: "REPO 2 DONE. Verbal Checkpoint: Explain overfitting, CV, precision vs recall aloud.",
    summary: "Finish documentation, conduct explain-back practice, and ask the ISRO intern or faculty to review.",
    dsa: "Java: Binary Tree (LeetCode 226 - Invert Binary Tree).",
    doneWhen: "Repo 2 done. Checkpoint: explain overfitting, cross-validation, precision vs recall aloud",
    resources: [
      { name: "GitHub Model Serialization Best Practices", url: "https://joblib.readthedocs.io/en/latest/" }
    ],
    tasks: [
      {
        id: "w11_t1",
        title: "Publish Public Repo 2 with Clean README",
        desc: "Document model metrics, pipeline diagrams, evaluation curves, and export trained weights (.joblib).",
        tag: "Milestone",
        tagType: "emerald"
      },
      {
        id: "w11_t2",
        title: "Verbal Explain-Back Defense Checkpoint",
        desc: "Without notes, explain aloud: Overfitting, 5-Fold Cross Validation, Data Leakage, and Precision vs Recall.",
        tag: "Checkpoint",
        tagType: "amber"
      },
      {
        id: "w11_t3",
        title: "External Peer/Mentor Code Review",
        desc: "Ask the ISRO intern or a CMR faculty member to review one of your repos for architectural feedback.",
        tag: "Review",
        tagType: "blue"
      },
      {
        id: "w11_t4",
        title: "DSA: Invert Binary Tree (Java)",
        desc: "Solve recursively swapping left and right child pointers in O(n) time.",
        tag: "DSA Java",
        tagType: "amber"
      }
    ]
  },

  // ==================== PHASE 3: WEEKS 12 TO 18 (~49 hrs) ====================
  // Focus: RAG flagship project (What sets you apart is the EVALUATION)
  {
    week: 12,
    phase: "Phase 3: RAG Flagship Project",
    phaseHours: "~49 hrs",
    dates: "Dec 21 – Dec 27, 2026",
    title: "Week 12: Embeddings, Chunking & Retrieval Only (FAISS/Chroma)",
    outcome: "Search returns sensible top-k chunks on known course notes (no LLM yet).",
    summary: "Load your college syllabus/course notes. Implement pure semantic retrieval without generation.",
    dsa: "Java: Binary Tree (LeetCode 104 - Maximum Depth of Binary Tree).",
    doneWhen: "Search returns sensible top-k chunks",
    resources: [
      { name: "ChromaDB Getting Started Guide", url: "https://docs.trychroma.com/getting-started" },
      { name: "HuggingFace Sentence-Transformers (CPU)", url: "https://www.sbert.net/" }
    ],
    tasks: [
      {
        id: "w12_t1",
        title: "Initialize Flagship Repo 3 'evaluated-rag-radar'",
        desc: "Set up directory structure: data/corpus/, src/indexer.py, src/retriever.py, and eval/.",
        tag: "Flagship",
        tagType: "emerald"
      },
      {
        id: "w12_t2",
        title: "Load Known Document Corpus",
        desc: "Use your own college subject notes or syllabus (documents you know intimately so you can judge quality).",
        tag: "Corpus",
        tagType: "blue"
      },
      {
        id: "w12_t3",
        title: "Implement Chunking & Vector Search (FAISS/Chroma)",
        desc: "Generate embeddings with sentence-transformers/all-MiniLM-L6-v2 (runs light on CPU) and store in ChromaDB.",
        tag: "Retrieval",
        tagType: "purple"
      },
      {
        id: "w12_t4",
        title: "DSA: Maximum Depth of Binary Tree (Java)",
        desc: "Solve using simple recursive DFS traversal in O(n) time.",
        tag: "DSA Java",
        tagType: "amber"
      }
    ]
  },
  {
    week: 13,
    phase: "Phase 3: RAG Flagship Project",
    phaseHours: "~49 hrs",
    dates: "Dec 28, 2026 – Jan 3, 2027",
    title: "Week 13: FastAPI Basics & Serving Retrieval Endpoint",
    outcome: "Working /search API endpoint with Pydantic validation.",
    summary: "Expose your semantic search through a fast, lightweight API server checking the 'FastAPI advantage' box.",
    dsa: "Java: Dynamic Programming (LeetCode 70 - Climbing Stairs).",
    doneWhen: "Working /search endpoint",
    resources: [
      { name: "FastAPI First Steps & Endpoints", url: "https://fastapi.tiangolo.com/tutorial/first-steps/" },
      { name: "Pydantic Request Models", url: "https://docs.pydantic.dev/latest/" }
    ],
    tasks: [
      {
        id: "w13_t1",
        title: "Build api/main.py with FastAPI",
        desc: "Create FastAPI app with CORS middleware and auto-generated Swagger UI (/docs).",
        tag: "FastAPI",
        tagType: "blue"
      },
      {
        id: "w13_t2",
        title: "Implement POST /search Endpoint",
        desc: "Accept SearchQuery(query: str, top_k: int = 3) schema and return matching document chunks with similarity scores.",
        tag: "Endpoint",
        tagType: "purple"
      },
      {
        id: "w13_t3",
        title: "Test Endpoint in Swagger UI",
        desc: "Verify query responses in under 200ms using the interactive browser documentation.",
        tag: "Verification",
        tagType: "emerald"
      },
      {
        id: "w13_t4",
        title: "DSA: Climbing Stairs (Java)",
        desc: "Solve using bottom-up dynamic programming in O(n) time and O(1) space.",
        tag: "DSA Java",
        tagType: "amber"
      }
    ]
  },
  {
    week: 14,
    phase: "Phase 3: RAG Flagship Project",
    phaseHours: "~49 hrs",
    dates: "Jan 4 – Jan 10, 2027",
    title: "Week 14: The Secret Weapon — 25-Question Test Set & Hit-Rate",
    outcome: "Hit-rate table in repo comparing 2 to 3 chunk sizes.",
    summary: "Evaluation is what sets your RAG apart from 1,000 generic student chatbots: measure retrieval hit rate.",
    dsa: "Java: Linked List Cycle (LeetCode 141 - Linked List Cycle).",
    doneWhen: "Hit-rate table in the repo",
    resources: [
      { name: "RAG Evaluation Metrics Primer", url: "https://www.rungalileo.io/blog/mastering-rag-evaluation" }
    ],
    tasks: [
      {
        id: "w14_t1",
        title: "Draft 25-Question Ground Truth Test Set",
        desc: "Write 25 questions based on your notes with known answers, target chunk IDs, and source page numbers.",
        tag: "Benchmark",
        tagType: "purple"
      },
      {
        id: "w14_t2",
        title: "Evaluate Chunking Sizes (250 vs 500 vs 1000 tokens)",
        desc: "Run your 25 questions across different chunk sizes and measure Top-K Retrieval Hit Rate.",
        tag: "Experiment",
        tagType: "emerald"
      },
      {
        id: "w14_t3",
        title: "Generate Hit-Rate Comparison Table",
        desc: "Document Hit Rate@1, Hit Rate@3, and Mean Reciprocal Rank (MRR) in your repo evaluation notes.",
        tag: "Deliverable",
        tagType: "blue"
      },
      {
        id: "w14_t4",
        title: "DSA: Linked List Cycle (Java)",
        desc: "Solve using Floyd's Tortoise and Hare algorithm in O(n) time and O(1) space.",
        tag: "DSA Java",
        tagType: "amber"
      }
    ]
  },
  {
    week: 15,
    phase: "Phase 3: RAG Flagship Project",
    phaseHours: "~49 hrs",
    dates: "Jan 11 – Jan 17, 2027",
    title: "Week 15: Generation with Local Ollama (3B) or Gemini API",
    outcome: "Answers generated with cited sources and strict 'I don't know' fallback.",
    summary: "Connect Llama 3.2 3B (fits 4GB VRAM) or Gemini. Enforce strict grounded prompt with zero hallucinations.",
    dsa: "Java: Two Pointers (LeetCode 167 - Two Sum II Sorted).",
    doneWhen: "Answers with citations",
    resources: [
      { name: "Ollama Python API Library", url: "https://github.com/ollama/ollama-python" },
      { name: "Google Gemini Free API Keys", url: "https://ai.google.dev/" }
    ],
    tasks: [
      {
        id: "w15_t1",
        title: "Integrate Local LLM / Gemini API",
        desc: "Run Llama 3.2 3B locally on your RTX 3050 (under 2.2GB VRAM) or call Gemini Flash API.",
        tag: "Generation",
        tagType: "purple"
      },
      {
        id: "w15_t2",
        title: "Implement Grounded Citations Prompt",
        desc: "Prompt LLM: 'Answer strictly using the retrieved context. Cite page/chunk numbers. If context lacks facts, say: I don't know.'",
        tag: "Prompt Eng",
        tagType: "emerald"
      },
      {
        id: "w15_t3",
        title: "Build POST /ask Endpoint",
        desc: "Wire retriever output into LLM generator and return structured JSON: { answer, citations, sources_checked }.",
        tag: "FastAPI",
        tagType: "blue"
      },
      {
        id: "w15_t4",
        title: "DSA: Two Sum II Sorted (Java)",
        desc: "Solve in O(n) time using two pointers scanning from left and right ends.",
        tag: "DSA Java",
        tagType: "amber"
      }
    ]
  },
  {
    week: 16,
    phase: "Phase 3: RAG Flagship Project",
    phaseHours: "~49 hrs",
    dates: "Jan 18 – Jan 24, 2027",
    title: "Week 16: Failure Case Logging & Error Fixing",
    outcome: "Before/after benchmark results logged + biggest failure mode patched.",
    summary: "Score answers against your 25 known answers. Log edge cases where retrieval or generation failed and fix them.",
    dsa: "Java: Two Pointers / Sorting (LeetCode 15 - 3Sum).",
    doneWhen: "Before/after results",
    resources: [
      { name: "Debugging RAG Systems Guide", url: "https://www.pinecone.io/learn/advanced-rag-techniques/" }
    ],
    tasks: [
      {
        id: "w16_t1",
        title: "Score 25 Generated Answers",
        desc: "Check factual accuracy, hallucination count, and citation correctness against ground truth.",
        tag: "Scoring",
        tagType: "purple"
      },
      {
        id: "w16_t2",
        title: "Catalog Failure Cases in README",
        desc: "Transparently document why failures happened (e.g. chunk boundary cutoffs, semantic ambiguity).",
        tag: "Honesty",
        tagType: "emerald"
      },
      {
        id: "w16_t3",
        title: "Fix the #1 Biggest Failure",
        desc: "Implement overlap chunking (e.g. 50-token stride) or query expansion and re-run evaluation.",
        tag: "Optimization",
        tagType: "blue"
      },
      {
        id: "w16_t4",
        title: "DSA: 3Sum (Java)",
        desc: "Sort array and use two pointers for each unique element in O(n^2) time.",
        tag: "DSA Java",
        tagType: "amber"
      }
    ]
  },
  {
    week: 17,
    phase: "Phase 3: RAG Flagship Project",
    phaseHours: "~49 hrs",
    dates: "Jan 25 – Jan 31, 2027",
    title: "Week 17: pytest Automation & Docker Containerization",
    outcome: "Unit tests pass & Docker container runs locally.",
    summary: "Write automated tests for your endpoints and package the entire RAG pipeline into a Docker container.",
    dsa: "Java: Trees / BFS (LeetCode 102 - Binary Tree Level Order Traversal).",
    doneWhen: "Tests pass, container runs",
    resources: [
      { name: "FastAPI Testing with Pytest", url: "https://fastapi.tiangolo.com/tutorial/testing/" },
      { name: "Docker for Python Developers", url: "https://docs.docker.com/language/python/" }
    ],
    tasks: [
      {
        id: "w17_t1",
        title: "Write Automated Tests with pytest",
        desc: "Test /search and /ask endpoints with testclient to verify status codes and schema outputs.",
        tag: "Testing",
        tagType: "purple"
      },
      {
        id: "w17_t2",
        title: "Write Dockerfile",
        desc: "Create lightweight multi-stage Dockerfile packaging Python, dependencies, and FastAPI server.",
        tag: "Docker",
        tagType: "blue"
      },
      {
        id: "w17_t3",
        title: "Run Container Locally",
        desc: "Execute 'docker run -p 8000:8000 rag-radar' and verify Swagger UI works inside the container.",
        tag: "Verification",
        tagType: "emerald"
      },
      {
        id: "w17_t4",
        title: "DSA: Binary Tree Level Order Traversal (Java)",
        desc: "Solve using Queue (BFS) tracking level size in O(n) time.",
        tag: "DSA Java",
        tagType: "amber"
      }
    ]
  },
  {
    week: 18,
    phase: "Phase 3: RAG Flagship Project",
    phaseHours: "~49 hrs",
    dates: "Feb 1 – Feb 7, 2027",
    title: "Week 18: Repository 3 Milestone — Flagship Release & 60s Demo",
    outcome: "REPO 3 PUBLIC: Architecture diagram, evaluation benchmarks & 60-second demo video.",
    summary: "Your killer portfolio centerpiece: package the evaluated RAG pipeline so recruiters are blown away.",
    dsa: "Java: Stack / String (LeetCode 150 - Evaluate Reverse Polish Notation).",
    doneWhen: "Repo 3 public with demo link",
    resources: [
      { name: "Mermaid Diagram Live Editor", url: "https://mermaid.live" },
      { name: "OBS Studio (Free Screen Recording)", url: "https://obsproject.com" }
    ],
    tasks: [
      {
        id: "w18_t1",
        title: "Mermaid Architecture Flowchart",
        desc: "Document complete pipeline: Notes ➔ Chunker ➔ ChromaDB ➔ FastAPI ➔ Ollama/Gemini ➔ Citation Engine.",
        tag: "Architecture",
        tagType: "purple"
      },
      {
        id: "w18_t2",
        title: "Record 60-Second Video Demo",
        desc: "Screen record sending queries in FastAPI docs, showing citations, hit-rate results, and fallback behavior.",
        tag: "Proof of Work",
        tagType: "emerald"
      },
      {
        id: "w18_t3",
        title: "Publish Public Repo 3",
        desc: "Add comprehensive README, evaluation tables, Docker run instructions, and video demo link.",
        tag: "Milestone",
        tagType: "blue"
      },
      {
        id: "w18_t4",
        title: "DSA: Evaluate Reverse Polish Notation (Java)",
        desc: "Solve using Stack evaluating arithmetic operators in O(n) time.",
        tag: "DSA Java",
        tagType: "amber"
      }
    ]
  },

  // ==================== PHASE 4: WEEKS 19 TO 20 (~14 hrs) ====================
  // Focus: Apply & Interview Readiness
  {
    week: 19,
    phase: "Phase 4: Applications & Interview Prep",
    phaseHours: "~14 hrs",
    dates: "Feb 8 – Feb 14, 2027",
    title: "Week 19: Resume Overhaul & 60-Second Project Pitches",
    outcome: "Resume v2 final with all skills backed by public GitHub repositories.",
    summary: "Update resume to reflect your 3 verified repositories and practice explaining each project in 60 seconds.",
    dsa: "Java: Heap / PriorityQueue (LeetCode 215 - Kth Largest Element in an Array).",
    doneWhen: "Resume v2 final",
    resources: [
      { name: "Jake's Resume Overleaf Template", url: "https://www.overleaf.com/latex/templates/jakes-resume/syzfjbzwjncs" }
    ],
    tasks: [
      {
        id: "w19_t1",
        title: "Update Resume to Version 2",
        desc: "Feature your 3 repos with clickable links, exact metric bullets, and technologies. Label AI assistance honestly.",
        tag: "Resume",
        tagType: "emerald"
      },
      {
        id: "w19_t2",
        title: "Practice 60-Second Verbal Walkthroughs",
        desc: "Rehearse pitching: 1. EDA Findings, 2. Scikit-learn Pipeline with Cross-Val, 3. Evaluated RAG with Hit-Rate.",
        tag: "Verbal Prep",
        tagType: "purple"
      },
      {
        id: "w19_t3",
        title: "Post Flagship Demo on LinkedIn",
        desc: "Upload your 60-second video demo showing evaluated RAG and hit-rate benchmarking. Zero certificate spam.",
        tag: "Public Brand",
        tagType: "blue"
      },
      {
        id: "w19_t4",
        title: "DSA: Kth Largest Element (Java)",
        desc: "Solve using min-heap (PriorityQueue) in O(n log k) time.",
        tag: "DSA Java",
        tagType: "amber"
      }
    ]
  },
  {
    week: 20,
    phase: "Phase 4: Applications & Interview Prep",
    phaseHours: "~14 hrs",
    dates: "Feb 15 – Feb 21, 2027",
    title: "Week 20: Targeted Applications Sprint & Tracking",
    outcome: "5+ verified applications logged across portals, faculty projects & startups.",
    summary: "Submit tailored applications to AICTE/TantrShell, Deloitte, and startups. Log every outreach.",
    dsa: "Java: Matrix / DFS (LeetCode 200 - Number of Islands).",
    doneWhen: "5+ applications logged",
    resources: [
      { name: "AICTE Internship Portal", url: "https://internship.aicte-india.org" },
      { name: "Wellfound (AngelList) Internships", url: "https://wellfound.com" }
    ],
    tasks: [
      {
        id: "w20_t1",
        title: "Apply to AICTE / TantrShell Listing",
        desc: "Submit with your updated Resume v2 and GitHub profile showcasing your 3 live public repos.",
        tag: "Application",
        tagType: "emerald"
      },
      {
        id: "w20_t2",
        title: "Apply to 4 Targeted Startups / Deloitte Pools",
        desc: "Send personalized pitches referencing your verified hit-rate RAG and Scikit-learn repos.",
        tag: "Outreach",
        tagType: "blue"
      },
      {
        id: "w20_t3",
        title: "Create Application Tracking Spreadsheet",
        desc: "Log Company, Role, Date Applied, Referral / Contact, Follow-up Date, and Status.",
        tag: "Tracking",
        tagType: "purple"
      },
      {
        id: "w20_t4",
        title: "DSA: Number of Islands (Java)",
        desc: "Solve using standard Grid DFS / BFS marking visited land in O(m * n) time.",
        tag: "DSA Java",
        tagType: "amber"
      }
    ]
  }
];

/* ================= STATE & TIMELINE LOGIC ================= */
const START_DATE = new Date("2026-10-05T00:00:00+05:30");
const TOTAL_WEEKS = 20;
let currentViewingWeek = 1;
let completedTasks = JSON.parse(localStorage.getItem("apex20_tasks") || "{}");
let activeFilter = "all"; // 'all' | 'pending' | 'completed'

function calculateSprintTime() {
  const now = new Date();
  const diffMs = now - START_DATE;
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  
  let currentWeek = 1;
  let dayText = "Day 1";
  let statusTag = "ACTIVE";

  if (diffDays < 0) {
    dayText = `Starts in ${Math.abs(diffDays)}d`;
    statusTag = "PREP";
    currentWeek = 1;
  } else {
    const elapsedDays = diffDays + 1;
    dayText = `Day ${elapsedDays}`;
    currentWeek = Math.min(TOTAL_WEEKS, Math.max(1, Math.ceil(elapsedDays / 7)));
    statusTag = elapsedDays <= 140 ? "ACTIVE" : "COMPLETED";
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
  if (progBar) progBar.style.width = `${Math.max(5, percent)}%`;

  const percentText = document.getElementById("percentCompletedText");
  if (percentText) percentText.innerText = `${percent}% Complete`;

  const daysText = document.getElementById("daysRemainingText");
  if (daysText) {
    const { diffDays } = calculateSprintTime();
    const remaining = Math.max(0, 140 - (diffDays + 1));
    daysText.innerText = `${remaining} Days Left (20 Wks)`;
  }
}

/* ================= RENDER FUNCTIONS ================= */
function renderSidebarNav() {
  const navContainer = document.getElementById("weekNavList");
  if (!navContainer) return;

  navContainer.innerHTML = "";
  let lastPhase = "";

  WEEKS_DATA.forEach((w) => {
    // Phase header
    if (w.phase !== lastPhase) {
      const pHeader = document.createElement("div");
      pHeader.className = "phase-group-header flex items-center justify-between";
      pHeader.innerHTML = `
        <span>${w.phase.split(":")[0]}</span>
        <span class="text-[9px] font-mono text-slate-500">${w.phaseHours}</span>
      `;
      navContainer.appendChild(pHeader);
      lastPhase = w.phase;
    }

    const doneCount = w.tasks.filter(t => completedTasks[t.id]).length;
    const isAllDone = doneCount === w.tasks.length;

    const btn = document.createElement("button");
    btn.className = `nav-week-btn ${w.week === currentViewingWeek ? "active" : ""} ${isAllDone ? "completed" : ""}`;
    btn.onclick = () => selectWeek(w.week);

    btn.innerHTML = `
      <div class="flex items-center gap-2 truncate">
        <span class="${isAllDone ? 'text-emerald-400 font-bold' : 'text-slate-500'}">${isAllDone ? "✓" : "•"}</span>
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
  const phaseEl = document.getElementById("activePhaseName");
  if (phaseEl) phaseEl.innerText = weekData.phase;

  const dateEl = document.getElementById("activeDateRange");
  if (dateEl) dateEl.innerText = weekData.dates;

  const titleEl = document.getElementById("activeWeekTitle");
  if (titleEl) titleEl.innerText = weekData.title;

  const outcomeEl = document.getElementById("weekOutcomeText");
  if (outcomeEl) outcomeEl.innerText = weekData.outcome;

  const summaryEl = document.getElementById("weekSummaryText");
  if (summaryEl) summaryEl.innerText = weekData.summary;

  const dsaEl = document.getElementById("dsaRequirementText");
  if (dsaEl) dsaEl.innerText = weekData.dsa;

  const doneBadge = document.getElementById("doneWhenBadge");
  if (doneBadge) {
    doneBadge.innerHTML = `<span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>Done When: ${weekData.doneWhen}`;
  }

  // Resource Links
  const resContainer = document.getElementById("resourceLinksList");
  if (resContainer) {
    resContainer.innerHTML = "";
    weekData.resources.forEach(r => {
      const li = document.createElement("li");
      li.innerHTML = `
        <a href="${r.url}" target="_blank" rel="noopener noreferrer" class="hover:text-blue-400 text-slate-300 transition-colors flex items-center justify-between group py-1">
          <span class="group-hover:underline truncate pr-2">${r.name}</span>
          <span class="text-slate-500 text-[10px] flex-shrink-0">↗</span>
        </a>
      `;
      resContainer.appendChild(li);
    });
  }

  // Count done and pending tasks
  let doneInWeek = 0;
  weekData.tasks.forEach(t => {
    if (completedTasks[t.id]) doneInWeek++;
  });
  const pendingInWeek = weekData.tasks.length - doneInWeek;

  // Update Filter Counters
  const countAllEl = document.getElementById("filterCountAll");
  if (countAllEl) countAllEl.innerText = `(${weekData.tasks.length})`;

  const countPendingEl = document.getElementById("filterCountPending");
  if (countPendingEl) countPendingEl.innerText = `(${pendingInWeek})`;

  const countDoneEl = document.getElementById("filterCountDone");
  if (countDoneEl) countDoneEl.innerText = `(${doneInWeek})`;

  // Task List Checklist with Filter
  const taskList = document.getElementById("taskListContainer");
  if (taskList) {
    taskList.innerHTML = "";

    const filteredTasks = weekData.tasks.filter(t => {
      const isDone = !!completedTasks[t.id];
      if (activeFilter === "completed") return isDone;
      if (activeFilter === "pending") return !isDone;
      return true;
    });

    if (filteredTasks.length === 0) {
      taskList.innerHTML = `
        <div class="p-8 text-center text-slate-500 text-xs rounded-2xl border border-slate-800 bg-slate-900/30">
          No tasks match the active filter: <strong class="text-slate-300 uppercase">${activeFilter}</strong>.
        </div>
      `;
    } else {
      filteredTasks.forEach(t => {
        const isDone = !!completedTasks[t.id];
        const card = document.createElement("div");
        card.className = `task-card flex items-start gap-3.5 ${isDone ? "task-done" : ""}`;
        
        card.innerHTML = `
          <input type="checkbox" class="custom-checkbox" id="${t.id}" ${isDone ? "checked" : ""}>
          <div class="flex-1">
            <div class="flex items-center justify-between gap-3 mb-1.5 flex-wrap">
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
    }
  }

  // Update Week Progress Box
  const percentInWeek = weekData.tasks.length > 0 ? Math.round((doneInWeek / weekData.tasks.length) * 100) : 0;
  const progressPercentEl = document.getElementById("weekProgressPercent");
  if (progressPercentEl) progressPercentEl.innerText = `${percentInWeek}%`;

  const doneCountEl = document.getElementById("tasksDoneCount");
  if (doneCountEl) doneCountEl.innerText = `${doneInWeek} / ${weekData.tasks.length} Done`;

  // Update Prev / Next Buttons
  const prevBtn = document.getElementById("prevWeekBtn");
  if (prevBtn) {
    prevBtn.disabled = weekNumber <= 1;
    prevBtn.style.opacity = weekNumber <= 1 ? "0.4" : "1";
  }

  const nextBtn = document.getElementById("nextWeekBtn");
  if (nextBtn) {
    nextBtn.disabled = weekNumber >= TOTAL_WEEKS;
    nextBtn.style.opacity = weekNumber >= TOTAL_WEEKS ? "0.4" : "1";
  }
}

function selectWeek(weekNum) {
  currentViewingWeek = Math.max(1, Math.min(TOTAL_WEEKS, weekNum));
  renderSidebarNav();
  renderWeekContent(currentViewingWeek);
  closeMobileDrawer();
}

function toggleTask(taskId, isChecked) {
  if (isChecked) {
    completedTasks[taskId] = true;
    showToast("Task marked as completed! 🎯");
  } else {
    delete completedTasks[taskId];
  }
  localStorage.setItem("apex20_tasks", JSON.stringify(completedTasks));
  renderSidebarNav();
  renderWeekContent(currentViewingWeek);
  updateProgressMetrics();
}

function setFilter(filterType) {
  activeFilter = filterType;
  document.querySelectorAll(".filter-btn").forEach(b => {
    if (b.dataset.filter === filterType) {
      b.className = "filter-btn px-2.5 py-0.5 rounded-lg bg-blue-600 text-white font-bold text-[11px] active";
    } else {
      b.className = "filter-btn px-2.5 py-0.5 rounded-lg bg-transparent text-slate-400 hover:text-white font-medium text-[11px]";
    }
  });
  renderWeekContent(currentViewingWeek);
}

function showToast(message) {
  const toast = document.getElementById("toastNotification");
  const msgEl = document.getElementById("toastMessage");
  if (!toast || !msgEl) return;
  msgEl.innerText = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2600);
}

function copyWeekPlanToClipboard() {
  const w = WEEKS_DATA.find(item => item.week === currentViewingWeek);
  if (!w) return;

  let text = `### ${w.title}\n`;
  text += `**Phase:** ${w.phase} (${w.dates})\n`;
  text += `**Target Outcome:** ${w.outcome}\n`;
  text += `**Done When:** ${w.doneWhen}\n`;
  text += `**Java DSA:** ${w.dsa}\n\n`;
  text += `**Tasks:**\n`;
  w.tasks.forEach(t => {
    const status = completedTasks[t.id] ? "[x]" : "[ ]";
    text += `- ${status} ${t.title} (${t.tag}): ${t.desc}\n`;
  });

  navigator.clipboard.writeText(text).then(() => {
    showToast(`Week ${w.week} plan copied to clipboard! 📋`);
  }).catch(() => {
    showToast(`Failed to copy to clipboard.`);
  });
}

function openMobileDrawer() {
  const sidebar = document.getElementById("mainSidebar");
  const backdrop = document.getElementById("mobileBackdrop");
  if (sidebar) sidebar.classList.add("mobile-open");
  if (backdrop) backdrop.classList.remove("hidden");
}

function closeMobileDrawer() {
  const sidebar = document.getElementById("mainSidebar");
  const backdrop = document.getElementById("mobileBackdrop");
  if (sidebar) sidebar.classList.remove("mobile-open");
  if (backdrop) backdrop.classList.add("hidden");
}

/* ================= INITIALIZATION ================= */
document.addEventListener("DOMContentLoaded", () => {
  const { currentWeek, dayText, statusTag } = calculateSprintTime();
  
  const dayCounterText = document.getElementById("dayCounterText");
  if (dayCounterText) dayCounterText.innerText = dayText;

  const weekBadge = document.getElementById("weekCounterBadge");
  if (weekBadge) weekBadge.innerText = `Week ${currentWeek} of 20`;

  const statusTagEl = document.getElementById("liveStatusTag");
  if (statusTagEl) statusTagEl.innerText = statusTag;

  // Week Navigation Buttons
  const prevBtn = document.getElementById("prevWeekBtn");
  if (prevBtn) prevBtn.onclick = () => selectWeek(currentViewingWeek - 1);

  const nextBtn = document.getElementById("nextWeekBtn");
  if (nextBtn) nextBtn.onclick = () => selectWeek(currentViewingWeek + 1);

  const currentBtn = document.getElementById("currentWeekBtn");
  if (currentBtn) {
    currentBtn.onclick = () => {
      const { currentWeek } = calculateSprintTime();
      selectWeek(currentWeek);
      showToast(`Navigated to active Week ${currentWeek}`);
    };
  }

  // Copy Week Plan Button
  const copyBtn = document.getElementById("copyWeekBtn");
  if (copyBtn) copyBtn.onclick = copyWeekPlanToClipboard;

  // Filter Buttons
  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.onclick = () => setFilter(btn.dataset.filter);
  });

  // Mobile Drawer Controls
  const menuBtn = document.getElementById("mobileMenuBtn");
  if (menuBtn) menuBtn.onclick = openMobileDrawer;

  const closeBtn = document.getElementById("closeDrawerBtn");
  if (closeBtn) closeBtn.onclick = closeMobileDrawer;

  const backdrop = document.getElementById("mobileBackdrop");
  if (backdrop) backdrop.onclick = closeMobileDrawer;

  // Keyboard navigation shortcuts: Left / Right Arrows
  window.addEventListener("keydown", (e) => {
    if (["input", "textarea"].includes(document.activeElement.tagName?.toLowerCase())) return;
    if (e.key === "ArrowLeft") {
      selectWeek(currentViewingWeek - 1);
    } else if (e.key === "ArrowRight") {
      selectWeek(currentViewingWeek + 1);
    }
  });

  currentViewingWeek = currentWeek;
  renderSidebarNav();
  renderWeekContent(currentViewingWeek);
  updateProgressMetrics();
});
