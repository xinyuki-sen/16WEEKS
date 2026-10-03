# ⚡ 20WEEKS (v2) — AI/ML Execution Blueprint

> **Author:** Rohan Pradhan  
> **Start Date:** October 5, 2026 • **Target Completion:** Early March 2027  
> **Hardware Profile:** ASUS TUF Gaming A15 • NVIDIA GeForce RTX 3050 Laptop GPU (4GB VRAM)  
> **Target Flagship:** Evaluated Retrieval-Augmented Generation (RAG) System  
> **Total Time Budget:** ~180 Hours (~140h ML/RAG Building + ~40h Java DSA)  

A high-accountability execution tracker designed to transform foundational data wrangling into an industry-grade, quantitatively evaluated RAG API that separates you from 1,000 generic student portfolio projects.

---

## ⏱️ Time Budget & Sustainability Matrix

- **Effort Estimate:** ~180 hours total (~140 hrs Kaggle + project building, ~40 hrs DSA at 3 problems/week in Java).
- **Plan Shape:** 20 working weeks at ~9 hrs/week, plus **2 flexible exam-light buffer weeks** (~2 hrs/week). Insert buffer weeks wherever end-sems land without compressing syllabus.
- **Weekly Rhythm:** 4 weekdays of 45–60 min, one 3-hour weekend deep-work block, 30 min Sunday for GitHub/README polish.
- **Pace Calculator:**
  - **6 hrs/week:** ~30 weeks (Cut DSA to 2/wk, drop stats refresher in Wks 8 & 9)
  - **8 hrs/week:** ~22 weeks
  - **9 hrs/week (Current Plan):** 20 working weeks
  - **12 hrs/week:** ~15 weeks

---

## 🎯 The 4 Phases & 3 Public Deliverables

| Phase | Duration | Weekly Focus | Deliverable & "Done When" Benchmark |
| :--- | :--- | :--- | :--- |
| **Phase 1** | Weeks 1–5 (~35 hrs) | Git CLI, Pandas, Data Cleaning, SQL Joins & Real EDA | **Repo 1:** Real-world exploratory data analysis report (Indian AQI/EV/Zomato, non-toy) + executive README |
| **Phase 2** | Weeks 6–11 (~42 hrs) | Scikit-Learn, Pipelines, Cross-Validation, Metrics & PCA | **Repo 2:** End-to-end trained model with leakage-free pipeline. **Checkpoint:** Explain overfitting, CV & precision/recall aloud. |
| **Phase 3** | Weeks 12–18 (~49 hrs) | FAISS/Chroma Retrieval, FastAPI, Grounded Citations, pytest & Docker | **Repo 3 (Flagship):** Evaluated RAG API with 25-question test set, hit-rate benchmark table, failure case analysis & 60-second video demo. |
| **Phase 4** | Weeks 19–20 (~14 hrs) | Resume v2 Aligned with Repos, 60s Project Pitches & Outreach | **Outcome:** 5+ applications submitted and logged (AICTE, startups, Deloitte). |

---

## ⭐ Why the Flagship RAG Project Stands Out

> *"A PDF chatbot is the most common student RAG project. The **evaluation** is what sets yours apart: a 25-question test set, a retrieval hit rate, chunk-size comparisons, and a README showing where it fails."*

1. **Known Corpus:** Uses your own university course notes or syllabus so you can immediately spot hallucinated details.
2. **Local Hardware Fit:** RTX 3050 (4GB VRAM). Runs **Llama 3.2 3B** locally via Ollama (~2.0 GB VRAM) or Google Gemini Flash API. Embeddings run lightweight on CPU.
3. **Quantitative Evaluation:** Measures Hit Rate@1, Hit Rate@3, and Mean Reciprocal Rank across 250 vs 500 vs 1000 token chunk sizes.
4. **Transparent Failure Analysis:** Documents retrieval failure modes and patches them with overlapping chunk strides.

---

## 🛡️ The 3 Iron Rules

1. **Write the First Draft Yourself:** Use AI strictly to explain and review. After each project, close the editor and verbally explain every function out loud. If you cannot explain it, you do not own it.
2. **Core vs. Optional (Plan for Slippage):** If you fall behind during exam cycles, **protect**: Pandas, SQL, Intro/Intermediate ML, and the RAG project with its evaluation. Stretch the calendar—never compress.
3. **Be Honest on Resume:** List only what a public GitHub repository proves. Label AI-assisted projects (like Chrono) as built with AI coding agents.

---

## ⏸️ Deferred Until After Week 20

- JWT authentication, MongoDB, WebSockets and streaming responses, agent guardrails, PyTorch deep learning, cloud deployment. Revisit once the 3 repositories are publicly proven.

---

## 💻 Local Preview & Usage

Double-click `index.html` or run a local Python HTTP server:

```bash
# Serve locally
python -m http.server 8080
# Open in browser: http://localhost:8080
```

- **Keyboard Shortcuts:** `[←]` Previous Week • `[→]` Next Week
- **Copy Plan:** Click "Copy Plan" in the top bar to get a markdown checklist for your notes.
- **Persistence:** All completed tasks are preserved in `localStorage`.
