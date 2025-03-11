export const projects = [
  {
    title: "AutoGluon-RAG",
    description:
      "An open-source, automated RAG package for creating production-level, inference-ready RAG pipelines in three lines of code. Supports multiple models, vector databases, and retrieval methods. Developed during my internship at AWS AI, this tool simplifies the implementation of Retrieval-Augmented Generation systems.",
    github: "https://github.com/autogluon/autogluon-rag",
    skills: ["Python", "RAG", "Machine Learning", "Deep Learning"],
  },
  {
    title: "Co-Op LLM Chess",
    description:
      "Explored LLM-based chess strategies using Spherical Linear Interpolation and structured LLM debates. Applied reinforcement learning for strategic decision-making in a cooperative game setting. Implemented novel approaches to combine language model capabilities with game theory principles.",
    github: "https://github.com/shreyash2106/LLM_Chess_Team",
    skills: ["LLM", "Reinforcement Learning", "Python"],
  },
  {
    title: "bwalloc",
    description:
      "Developed an adaptive bandwidth allocation algorithm for real-time multi-stream video analytics using Mixed-Integer Linear Programming (MILP). Optimized resource utilization across multiple video streams while maintaining quality of service requirements. Implemented dynamic adjustment based on network conditions.",
    github: "https://github.com/kshitijalwadhi/CS536-bwalloc/tree/main",
    skills: ["MILP", "Video Analytics", "Python"],
  },
  {
    title: "minGPT Reimplementation",
    description:
      "Reimplemented minGPT using Flax and Jax, implementing causal self-attention, transformer MLP, and encoder/decoder components. Enhanced the original implementation with improved performance characteristics and added new features for better training stability and inference speed.",
    skills: ["Jax", "Flax", "Deep Learning", "NLP"],
  },
  {
    title: "Jedi X-Wing Starfighter",
    description:
      "Hand-motion-controlled drone using computer vision and robotics. Integrated Google MediaPipe for hand tracking and ROS for drone control. Implemented real-time gesture recognition and mapping to drone movements, with safety constraints and smooth trajectory planning.",
    link: "https://sites.google.com/berkeley.edu/106a-xwing-starfighter/home",
    github: "https://github.com/KhanWhale/proj106a",
    skills: ["Robotics", "Computer Vision", "ROS", "Python"],
  },
];

export const experience = [
  {
    title: "Research Assistant I",
    company: "Purdue University",
    period: "August 2024 - December 2024",
    responsibilities: [
      "Developed a JAX-based framework for Multi-Agent Signal Temporal Logic using Diffusion Models",
      "Implemented multi-processing in diffusion models for simultaneous plan generation across agents",
      "Implemented asynchronous planning with dynamic goal adaptation while maintaining safety constraints",
    ],
  },
  {
    title: "Research Assistant II",
    company: "Purdue University",
    period: "January 2024 - May 2024",
    responsibilities: [
      "Led research on dynamic path planning for drone navigation using Large Language Models",
      "Developed novel techniques using model finetuning, constrained decoding and reinforcement learning",
      {
        text: "Read our paper",
        link: "https://arxiv.org/abs/2409.19471",
        linkText: "here",
      },
      "Achieved significant improvements in navigation safety and efficiency through LLM-based planning",
    ],
  },
  {
    title: "Machine Learning Intern",
    company: "AWS AI",
    period: "May 2024 - Aug 2024",
    responsibilities: [
      "Developed an open-source, automated RAG package",
      "Users can create a production-level, inference-ready RAG pipeline in three lines of code",
      "Package supports multiple models, vector databases, and retrieval methods",
    ],
  },
  {
    title: "Machine Learning Intern",
    company: "AWS AI",
    period: "May 2023 - Aug 2023",
    responsibilities: [
      "Contributed to AutoGluon, an open-source AutoML framework",
      "Developed benchmarking tools to track performance across datasets & frameworks",
    ],
  },
  {
    title: "Software Development Intern",
    company: "Amazon",
    period: "May 2022 - Aug 2022",
    responsibilities: [
      "Worked on Self-Healing Networks for Amazon Fulfillment Centers",
      "Built a Python API to automate searches previously performed manually by network engineers",
    ],
  },
  {
    title: "Software Engineering Intern",
    company: "Hewlett Packard Enterprise",
    period: "Jun 2021 - Aug 2021",
    responsibilities: [
      "Developed High-Performance Computing (HPC) microservices under HPE's Greenlake cloud service",
      "Built a GoLang-based LRU cache reducing API response time by 66.67%",
      "Integrated Elasticsearch, Logstash, and Kibana (ELK) for HPC analytics",
    ],
  },
];

export const skills = {
  "Programming Languages": [
    "Python",
    "Java",
    "Golang",
    "C",
    "C++",
    "C#",
    "SQL",
  ],
  "Machine Learning & AI": [
    "Deep Learning",
    "Large Language Models",
    "RAG",
    "Computer Vision",
    "PyTorch",
    "TensorFlow",
    "JAX",
  ],
  "Cloud & DevOps": [
    "AWS",
    "EC2",
    "Cloud Computing",
    "High-Performance Computing",
    "Docker",
  ],
  "Web Development": [
    "React",
    "Node.js",
    "TypeScript",
    "HTML/CSS",
    "REST APIs",
  ],
};

export const about = {
  description:
    "Currently pursuing my M.S. in Computer Science at Purdue University, I'm deeply passionate about pushing the boundaries of AI and machine learning. My journey in tech started at UC Berkeley, where I earned my B.S. in Electrical Engineering & Computer Science with a minor in Data Science.\n\nI love tackling complex problems and building innovative solutions that make a real impact. My experience ranges from developing automated RAG systems at AWS to creating hand-motion controlled drones.",
  interests: {
    "Research Interests": [
      "Generative AI",
      "Robotics",
      "Multi-Agent Systems",
      "Computer Vision",
    ],
    Hobbies: [
      "Playing guitar and piano",
      "Chess",
      "Hiking and photography",
      "Exploring new cuisines",
    ],
  },
};
