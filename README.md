👀 MediCare AI

MediCare AI is a modern Next.js-based web application that combines AI-powered health analysis, voice symptom recognition, and information about Indian government healthcare schemes such as Ayushman Bharat and Jan Aushadhi Yojana.

🚀 Features

🎙️ Voice Recognition – Speak your symptoms, and the app transcribes them in real-time

🧠 AI Symptom Analysis – Simulated intelligent health insight based on symptom input

🏥 Govt. Scheme Directory – Dynamic listing of Bharat health schemes using an external API

📍 Find Nearby Hospitals

📄 Medical Records Storage (UI only)

👨‍⚕️ Doctor Directory (placeholder)

💪 Tech Stack

Next.js 14+

React

Tailwind CSS

[OpenAI API (optional integration)]

Mocki.io (or real backend API)

📦 Getting Started

1. Clone the Repository

git clone https://github.com/yourusername/medicare-ai.git
cd medicare-ai

2. Install Dependencies

npm install
# or
yarn

3. Set Environment Variables (Optional for AI/DB)

If you're using OpenAI API or Firebase:

# .env.local
OPENAI_API_KEY=your_key_here

4. Run the Development Server

npm run dev

Visit http://localhost:3000 to view the app.

🌐 Live API for Health Schemes

To pull government schemes dynamically, the app fetches from:

https://mocki.io/v1/your-api-id  # <-- Replace with your real endpoint

You can replace this with a real backend (e.g., Node.js, Supabase, Firebase).

🧐 Project Structure

src/
│
├── app/
│   ├── page.tsx                # Homepage
│   ├── speech-analysis/        # Voice AI page
│   ├── medical-schemes/        # Govt schemes page (dynamic API)
│   └── ...
│
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── FeatureCard.tsx
│   └── ...
│
├── public/
│   └── data/schemes.json       # (used in mock API)

📖 Add Government Health Schemes

You can:

Update public/data/schemes.json (for local)

Or use a tool like Mocki to host it publicly

Or build a real backend

🎯 Future Improvements

🔐 Auth and medical record storage (Firebase/Supabase)

🧪 OpenAI integration for real symptom processing

🌍 Multilingual support (Hindi, Tamil, etc.)

🦴 Live hospital & doctor API integration

👥 Contributing

Pull requests welcome! If you’d like to help improve this project or add Indian government APIs, feel free to contribute.

📄 License

MIT License

🇮🇳 Jai Hind

This project aims to help Indian citizens access AI-powered healthcare information and awareness about government schemes.

वन्दे मातरम्।

বন্দে মাতরম্৷

