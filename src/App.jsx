import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import './index.css';

const projects = [
  {
    id: 'recommender',
    title: 'Behavioural Product Recommendation System',
    tagline: 'Personalized product suggestions driven by user behavior.',
    image: '/images/recommend.png',
    github: 'https://github.com/NamanKr24/Behavioral-Product-Recommendation-System',
    demo: 'https://huggingface.co/spaces/namankr24/Behavioral-Product-Recommendation-System',
    paragraphs: [
      'This project tackled product recommendations using an e-commerce event dataset with over 4 million activity logs. The core challenge was that the data contained only implicit signals (views, carts, purchases), so I converted these actions into a pseudo-rating scale to enable collaborative filtering. I also handled high-volume missing values for categories and brands by marking them as \"unknown\", and engineered time-based features from event timestamps to enrich the user-product interaction view.',
      'I evaluated popularity-based, content-based, and collaborative filtering approaches, ultimately selecting an SVD-based collaborative model tuned with GridSearchCV (scikit-surprise) for the best ranking performance (Precision@K / Recall@K). To make recommendations production-ready, I exposed the model through a lightweight Flask REST API that returns top-10 personalized items per user. The project underscored how implicit feedback can be transformed into meaningful signals and turned into an actionable product recommendation service.'
    ]
  },
  {
    id: 'marketing',
    title: 'Marketing Campaign Outcome Analysis',
    tagline: 'Predicting customer responses to improve campaign efficiency.',
    image: '/images/marketing.png',
    github: 'https://github.com/NamanKr24/Marketing-Campaign-Outcome-Analysis',
    demo: null,
    paragraphs: [
      'This project focused on analyzing a 41,000-record bank marketing dataset to understand which customers were most likely to subscribe to term deposits. The purpose was to help a marketing team improve call efficiency by identifying promising leads before outreach. I cleaned and prepared the data in Python, applying statistical tests (Chi-squared, Mann-Whitney U, Cramér’s V) to rank feature importance and uncover interactions, such as students contacted by cellular channels showing high subscription rates. I also addressed data leakage by removing unrealistic predictors, ensuring the analysis reflected real-world constraints.',
      'Building on this, I developed a predictive modeling pipeline with scikit-learn, comparing models like Random Forests, XGBoost, and SVMs. Logistic Regression was chosen for its superior recall, aligning with the business goal of minimizing missed customer opportunities. Using SHAP explainability techniques, I showed which factors drove outcomes and why. Finally, I built an interactive Plotly Dash app, where marketers could explore client distributions and subscription rates by category, making the results actionable. The project demonstrated how careful data preparation and recall-focused modeling can directly support smarter, business-aligned decisions.'
    ]
  },
  {
    id: 'quotientrag',
    title: 'QuotientRAG',
    tagline: 'Finding the right quote at the right time with AI-powered search.',
    image: '/images/quotientrag.png',
    github: 'https://github.com/NamanKr24/quotientrag',
    demo: 'https://huggingface.co/spaces/namankr24/QuotientRAG',
    paragraphs: [
      'QuotientRAG is a Retrieval-Augmented Generation (RAG) system built to move beyond keyword search by enabling semantic quote retrieval. Using a dataset of over 87,000 English quotes, I fine-tuned the all-MiniLM-L6-v2 embedding model (384-dimensional vectors) so that queries and quotes with similar meaning are mapped closely in vector space. These embeddings were indexed with FAISS, allowing fast nearest-neighbor searches that return relevant results even for abstract queries.',
      'Retrieved quotes are passed to a Zephyr-7B LLM, which synthesizes them into concise, grounded responses to reduce hallucination. The final system is deployed as a Streamlit app where users can query naturally and receive quote-based answers. The project demonstrates semantic search, vector indexing, fine-tuning embeddings, and LLM integration in a practical, user-friendly application.'
    ]
  },
  {
    id: 'supplychain',
    title: 'Global Supply Chain Analytics Dashboard',
    tagline: 'Uncovering supply chain risks and performance through interactive insights.',
    image: '/images/supplychain.png',
    github: 'https://github.com/NamanKr24/Global-Supply-Chain-Analytics',
    demo: null,
    paragraphs: [
      'I analyzed over 1 million global supply chain records from the DataCo dataset to uncover performance trends, risks, and inefficiencies. The goal was to give executives a clear view of orders, sales, delivery reliability, and payment outcomes across regions and product categories. Data preparation in Power Query involved fixing inconsistencies, engineering features like DelayDays and LateDeliveryRisk, and shaping the model into regional and product hierarchies for smooth analysis.',
      'The deliverable was a four-page Power BI dashboard with pages for executive KPIs, product performance, logistics reliability, and order/payment patterns. Using DAX measures, I built indicators such as on-time delivery %, high-risk SKUs, and profit per item. Interactive visuals—treemaps, heatmaps, and drill-throughs—let stakeholders move from high-level trends to SKU or region details. Designed on a dark theme with custom icons and slicers, the dashboard balanced aesthetics with usability, enabling supply chain leaders to spot bottlenecks and act with confidence.'
    ]
  },
  {
    id: 'forecastforge',
    title: 'ForecastForge',
    tagline: 'Boosting forecast accuracy with hybrid models and smart ensembles.',
    image: '/images/forecastforge.png',
    github: 'https://github.com/NamanKr24/forecastforge',
    demo: 'https://https://huggingface.co/spaces/namankr24/ForecastForge',
    paragraphs: [
      'ForecastForge is a hybrid time series forecasting framework designed to predict complex real-world time series such as energy, finance, and traffic. The system integrates four base models—LSTM, XGBoost, Transformer, and Liquid Neural Networks—each trained independently on sequences with a 60-step lookback. Predictions from these models are combined using Caruana’s Ensemble Selection to build a robust ensemble that improves upon individual model performance across benchmark datasets.',
      'The framework is surfaced through a Gradio interface where users can pick datasets, include or exclude models, and immediately visualize train/test RMSE and actual vs predicted plots. This project highlights end-to-end skills in time series preprocessing, deep learning, ensemble optimization with Optuna/Keras Tuner, and packaging research-grade models into a usable web tool.'
    ]
  },
  {
    id: 'retail',
    title: 'Retail Sales and Customer Insights',
    tagline: 'Analyzing retail trends to understand customers and drive growth.',
    image: '/images/retail.png',
    github: 'https://github.com/NamanKr24/Retail-Sales-and-Customer-Insights',
    demo: null,
    paragraphs: [
      'I worked with over 500,000 retail transactions to uncover sales patterns and improve customer understanding. The goal was to help businesses move beyond raw order logs and build a structured view of revenue drivers and customer value. Using Oracle SQL, I cleaned and prepared the dataset, leveraging CTEs, window functions, and advanced joins to engineer features such as monthly sales windows and RFM scores. This enabled me to segment customers into groups like Champions, Loyal, and At-Risk, giving a nuanced view of both purchase frequency and value.',
      'The findings were surfaced through an interactive Excel dashboard powered by Power Pivot, designed for decision-makers to quickly track KPIs such as total sales, unique customers, and average order value. The dashboard also highlighted top-performing products and seasonal demand patterns, giving managers a practical way to identify high-value customer groups and focus marketing or retention efforts where they would matter most. Along the way, I strengthened my SQL analytics and segmentation skills, while also learning the limits of Excel as a BI tool compared to platforms like Power BI.'
    ]
  }
];

export default function Portfolio() {
  const [activeProject, setActiveProject] = useState(null);

  function openProjectById(id) {
    const p = projects.find((x) => x.id === id);
    setActiveProject(p || null);
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    setActiveProject(null);
    document.body.style.overflow = '';
  }

  return (
  <div className="h-screen w-full overflow-y-scroll snap-y snap-mandatory relative bg-black text-white">
      {/* Animated Blob Background - Place this here, right after the main container */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="animated-blob blob-one bg-pink-500"></div>
        <div className="animated-blob blob-two bg-cyan-400"></div>
        <div className="animated-blob blob-three bg-purple-600"></div>
        <div className="animated-blob blob-four bg-teal-500"></div>
      </div>
    {/* Navbar */}
    <nav className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-sm z-50 border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
        <span className="font-bold text-xl text-teal-400">Naman Kumar</span>
        <div className="flex gap-6 text-gray-300 text-sm">
          {["home", "about", "projects", "contact"].map((sec) => (
            <a
              key={sec}
              href={`#${sec}`}
              className="cursor-pointer hover:text-blue-400 transition"
            >
              {sec.charAt(0).toUpperCase() + sec.slice(1)}
            </a>
          ))}
        </div>
      </div>
    </nav>

  {/* Hero */}
      <section className="min-h-screen snap-start flex items-center bg-black/90 pt-20" id="home">
        <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Image first */}
          <div className="flex justify-center relative z-10">
            <img
              src="/images/profile.jpg"
              alt="Naman"
              className="w-48 h-48 rounded-full ring-4 ring-teal-500 object-cover"
              onError={(e)=>{e.target.src='/images/profile-placeholder.png'}}
            />
          </div>
          {/* Text second */}
          <div>
            <h1 className="text-5xl font-extrabold text-white">Hi, I’m Naman Kumar</h1>
            <p className="mt-4 text-gray-300 text-lg max-w-xl">
              I analyze, model, and visualize data to uncover patterns and build intelligent systems.
              From dashboards to deep learning, I craft projects that solve real-world problems.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="#projects"
                className="px-4 py-2 bg-teal-500 hover:bg-teal-400 rounded text-gray-900 font-semibold relative z-10"
              >
                View Projects
              </a>
              <a
                href="https://drive.google.com/file/d/1AdpSoBhHf4A8X5a3tqZ7eE4T54mP-14K/view?usp=sharing"
                className="px-4 py-2 border border-gray-600 rounded text-gray-200 hover:bg-gray-800 relative z-10"
              >
                Resume For Data Analyst Roles
              </a>
              <a
                href="https://drive.google.com/file/d/1K5jGFlowznZEVd9tjBp9xW1rWYDBsbnl/view?usp=sharing"
                className="px-4 py-2 border border-gray-600 rounded text-gray-200 hover:bg-gray-800 relative z-10"
              >
               Resume for Data Science/ML Roles.
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="min-h-screen snap-start py-12 bg-black/90 pt-20" id="about">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6 text-white">About Me</h2>
          <p className="text-gray-300 max-w-3xl leading-relaxed mb-8">
            I’m Naman, a data enthusiast with a strong foundation in analytics and machine learning. I earned my B.Tech in Computer Science and Engineering from IIIT Raichur (Class of 2025), where I built a solid base in algorithms, data systems, and applied machine learning.
            I also completed a Data Analyst internship at DRDO, working on satellite imagery enhancement and mine detection modeling for defense applications — an experience that strengthened both my technical depth and problem-solving mindset.
            My work now spans from designing interactive dashboards that empower decision-makers to building predictive models that solve complex problems.
          </p>
          <h3 className="text-2xl font-semibold mb-4 text-white">Tools I Use</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-gray-300">
            <span className="px-3 py-2 bg-[#1a1a1a] rounded text-center">Python</span>
            <span className="px-3 py-2 bg-[#1a1a1a] rounded text-center">SQL</span>
            <span className="px-3 py-2 bg-[#1a1a1a] rounded text-center">Pandas</span>
            <span className="px-3 py-2 bg-[#1a1a1a] rounded text-center">Scikit-learn</span>
            <span className="px-3 py-2 bg-[#1a1a1a] rounded text-center">TensorFlow</span>
            <span className="px-3 py-2 bg-[#1a1a1a] rounded text-center">Power BI</span>
            <span className="px-3 py-2 bg-[#1a1a1a] rounded text-center">PyTorch</span>
            <span className="px-3 py-2 bg-[#1a1a1a] rounded text-center">Matplotlib/Seaborn</span>
            <span className="px-3 py-2 bg-[#1a1a1a] rounded text-center">Excel</span>
            <span className="px-3 py-2 bg-[#1a1a1a] rounded text-center">Tableau</span>
            <span className="px-3 py-2 bg-[#1a1a1a] rounded text-center">HuggingFace</span>
            <span className="px-3 py-2 bg-[#1a1a1a] rounded text-center">Git</span>
          </div>
        </div>
      </section>
      {/* Projects */}
      <section className="min-h-screen snap-start py-12 bg-black/90 pt-20" id="projects">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4 text-white">Projects</h2>
          <p className="text-gray-300 mb-6">Selected projects — click a card to read the short case study.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <article
                key={p.id}
                className="bg-[#1a1a1a] rounded-lg overflow-hidden shadow-sm hover:shadow-md transform hover:-translate-y-1 transition cursor-pointer"
                onClick={() => openProjectById(p.id)}
              >
                <div className="h-40 bg-[#222222] flex items-center justify-center overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover"
                    onError={(e)=>{e.target.src='/images/placeholder.png'}}
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                  <p className="mt-2 text-sm text-gray-300">{p.tagline}</p>
                  <div className="mt-4 flex space-x-3">
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3 py-1 bg-teal-500 rounded text-sm text-gray-900 font-semibold"
                    >
                      GitHub
                    </a>
                    {p.demo && (
                      <a
                        href={p.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="px-3 py-1 bg-indigo-600 rounded text-sm text-gray-100"
                      >
                        Deployed App
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/*Contact Details*/}
      <section className="min-h-screen snap-start flex flex-col justify-between bg-black/90 relative z-10" id="contact">
        <div className="max-w-6xl mx-auto px-6 pt-20 text-gray-100">
          <h2 className="text-3xl font-bold mb-4 text-white">Resume & Contact</h2>
          <div className="flex flex-col sm:flex-row items-start gap-6">
            <div className="flex gap-3">
              <a
                href="https://drive.google.com/file/d/1AdpSoBhHf4A8X5a3tqZ7eE4T54mP-14K/view?usp=sharing"
                className="px-4 py-2 bg-teal-500 rounded text-gray-900 font-semibold"
              >
                Download Data Analyst Resume
              </a>
              <a
                href="https://drive.google.com/file/d/1K5jGFlowznZEVd9tjBp9xW1rWYDBsbnl/view?usp=sharing"
                className="px-4 py-2 bg-indigo-600 rounded text-white font-semibold"
              >
                Download Data Science/ML related Resume
              </a>
            </div>
            <div className="text-gray-300">
              <div>Email: <a href="mailto:namankr24@gmail.com" className="text-teal-300">namankr24@gmail.com</a></div>
              <div className="mt-2">GitHub: <a href="https://github.com/NamanKr24" target="_blank" rel="noreferrer" className="text-teal-300">github.com/NamanKr24</a></div>
              <div className="mt-2">LinkedIn: <a href="https://www.linkedin.com/in/namankr24" target="_blank" rel="noreferrer" className="text-teal-300">linkedin.com/in/namankr24</a></div>
              <div className="mt-2">Kaggle: <a href="https://www.kaggle.com/namankumar24" target="_blank" rel="noreferrer" className="text-teal-300">kaggle.com/namankumar24</a></div>
            </div>
          </div>
        </div>
        <div className="py-6 text-center text-gray-500">
          <div className="max-w-6xl mx-auto px-6">
            © {new Date().getFullYear()} Naman Kumar — Built with React & Tailwind
          </div>
        </div>
      </section>

      {/* Modal for project details */}
      {activeProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={closeModal}
        >
          <div
            className="max-w-4xl w-full bg-[#111111] rounded-lg overflow-auto max-h-[90vh]"
            onClick={(e)=>e.stopPropagation()}
          >
            <div className="p-4 border-b border-gray-800 flex items-start justify-between">
              <div>
                <h3 className="text-xl font-bold text-white">{activeProject.title}</h3>
                <p className="text-sm text-gray-400 mt-1">{activeProject.tagline}</p>
              </div>
              <button onClick={closeModal} className="text-gray-300 hover:text-white">✕</button>
            </div>
            <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 text-gray-300">
                {activeProject.paragraphs.map((para, idx) => (
                  <p key={idx} className="mb-4 leading-relaxed">{para}</p>
                ))}
              </div>
              <div className="lg:col-span-1">
                <img
                  src={activeProject.image}
                  alt={activeProject.title}
                  className="w-full rounded border border-gray-700 mb-4"
                  onError={(e)=>{e.target.src='/images/placeholder.png'}}
                />
                <div className="flex gap-3">
                  <a
                    href={activeProject.github}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1 bg-teal-500 rounded text-sm text-gray-900 font-semibold"
                  >
                    GitHub
                  </a>
                  {activeProject.demo && (
                    <a
                      href={activeProject.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3 py-1 bg-indigo-600 rounded text-sm text-white"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <footer className="py-6 text-center text-gray-500 bg-black">
      </footer>
    </div>
  );
}