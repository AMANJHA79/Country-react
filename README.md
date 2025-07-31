# 🌍 World Explorer

A modern, responsive web application for exploring countries around the world. Built with React.js and powered by the REST Countries API, this application provides comprehensive information about countries including flags, population, capital cities, regions, and more.

![World Explorer](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

## ✨ Features

- **🌍 Country Exploration**: Browse through 195+ countries with detailed information
- **🔍 Advanced Search**: Search countries by name with real-time filtering
- **📊 Regional Filtering**: Filter countries by continent/region
- **📈 Sorting Options**: Sort countries alphabetically (A-Z or Z-A)
- **📱 Responsive Design**: Fully responsive design that works on all devices
- **⚡ Fast Performance**: Optimized with React Query for efficient data caching
- **🎨 Modern UI**: Beautiful dark theme with gradient accents
- **🔒 Error Handling**: Comprehensive error handling and loading states
- **📄 Detailed Views**: Individual country pages with comprehensive information

## 🚀 Live Demo

[View Live Demo](https://countries-project-002.netlify.app)

## 🛠️ Technologies Used

- **Frontend Framework**: React.js 19
- **Build Tool**: Vite
- **Styling**: Tailwind CSS 4
- **Data Fetching**: React Query (TanStack Query)
- **Routing**: React Router DOM
- **HTTP Client**: Axios
- **Icons**: Lucide React
- **API**: REST Countries API

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/AMANJHA79/Country-react.git
   cd country--project
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🏗️ Project Structure

```
country--project/
├── public/
│   └── image/
│       └── world.png
├── src/
│   ├── api/
│   │   ├── CountryData.json
│   │   ├── FooterApi.json
│   │   ├── postApi.jsx
│   │   └── useQueries.js
│   ├── components/
│   │   ├── Layout/
│   │   │   ├── AppLayout.jsx
│   │   │   ├── CountryCard.jsx
│   │   │   └── CountryDetails.jsx
│   │   └── ui/
│   │       ├── Footers.jsx
│   │       ├── Headers.jsx
│   │       ├── HeroSection.jsx
│   │       └── SearchFilter.jsx
│   ├── pages/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Country.jsx
│   │   ├── ErrorPage.jsx
│   │   └── HomePage.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── package.json
└── README.md
```

## 🎯 Key Features Explained

### 🔍 Search & Filter System
- **Real-time Search**: Instant filtering as you type
- **Regional Filtering**: Filter by Africa, Americas, Asia, Europe, Oceania
- **Smart Sorting**: Alphabetical sorting in both directions

### 📱 Responsive Design
- **Mobile-First**: Optimized for mobile devices
- **Tablet Support**: Responsive layout for tablets
- **Desktop Experience**: Enhanced experience on larger screens

### ⚡ Performance Optimizations
- **React Query**: Efficient data caching and synchronization
- **Lazy Loading**: Optimized image loading
- **Code Splitting**: Route-based code splitting

## 🎨 Design System

The application uses a consistent dark theme with:
- **Primary Colors**: Blue and purple gradients
- **Background**: Dark gray tones for better readability
- **Accents**: Blue highlights for interactive elements
- **Typography**: Clean, modern font hierarchy

## 📊 API Integration

The application integrates with the [REST Countries API](https://restcountries.com/) to fetch:
- Country flags and basic information
- Population and demographic data
- Geographic and political information
- Currency and language details

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



## 🙏 Acknowledgments

- [REST Countries API](https://restcountries.com/) for providing comprehensive country data
- [Lucide React](https://lucide.dev/) for beautiful icons
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [React Query](https://tanstack.com/query) for efficient data fetching



---

⭐ **Star this repository if you found it helpful!**
