import Sidebar from "./sidebar";
import Topbar from "./Topbar";
import ProjectCard from "./ProjectCard";
import './dash.css';

function App() {
  const projects = [
    {
      title: "Coffee Website",
      description: "Responsive coffee website using HTML, CSS, JavaScript",
      image: "https://i.ytimg.com/vi/MYFgtnKMDp4/maxresdefault.jpg",
      author: "1AT24CS072",
    },
    {
      title: "Smart Parking",
      description: "IOT based project on smart cities and urban development",
      image: "https://srrobotics.in/wp-content/uploads/2024/01/photo_3_2024-01-17_11-17-26.jpg",
      author: "1AT24CS0234",
    },
    {
      title: "AtriaEduEats Website",
      description: "Website built using HTML, CSS, JavaScript for students of Atria",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMU4Wv9Lk7D_vz-Km3FFcEkP_-K4btlJMhYg&s",
      author: "1AT24CS091",
    },
    {
      title: "CashMate App",
      description: "One stop payment and savings platform for Indian users",
      image: "https://periwin-cdn.s3.amazonaws.com/cms/media/blog_images/CashMate.png",
      author: "1AT24CS075",
    },
    {
      title: "AI Career Buddy",
      description: "Website that helps youngsters towards their future",
      image: "https://play-lh.googleusercontent.com/EDodom5TrAO45397tTgJ7zE4IYzlCx4C_52Gw6sWRyGDVf8X7nZ3KMAK1b0MIHAsxHbE",
      author: "1AT24CS083",
    },
    {
      title: "Smart Dustbin",
      description: "Smart waste segregation using IOT for sustainability",
      image: "https://theelectronichub.in/wp-content/uploads/2024/02/trash-bin.webp",
      author: "1AT24CS067",
    },
  ];
  return (
  <div className="app">
    <Sidebar />
    <div className="main">
      <Topbar />
      <h1 className="title">Project Dashboard</h1>
      <p className="subtitle">
        Showcase, Browse & Review projects with your peers.
      </p>
        <div className="card-container">
          {
          projects.map((props, index) => (
            <ProjectCard
              key={index}
              title={props.title}
              description={props.description}
              image={props.image}
              author={props.author}
               />
               ))}
        </div>
      </div>
    </div>
  );
}

export default App;
