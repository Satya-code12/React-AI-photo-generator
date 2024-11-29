const Header: React.FC = () => {
 return (
   <section className="flex justify-between items-center gap-6">
     <div>
       <h1 className="text-3xl font-bold text-gray-800">GenPic AI</h1>
       <p className="text-lg font-medium text-gray-700">Convert your imaginary text to an Image</p>
     </div>
     <div className="grid grid-cols-2 gap-4">
       <img
         src="https://imgv3.fotor.com/images/share/wonderland-girl-generated-by-Fotor-ai-art-generator.jpg"
         alt="Generated art"
         width={300}
         className="rounded-lg shadow-lg"
       />
       <img
         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYgQ0UMLwflN52walxbXqBIU2eKgW78ZBGIw&s"
         alt="Generated art2"
         width={300}
         className="rounded-lg shadow-lg"
       />
       <img
         src="https://creator.nightcafe.studio/jobs/WElIcMmGZfpq6M7yUH4q/WElIcMmGZfpq6M7yUH4q--1--1o4m4.jpg"
         alt="Generated art3"
         width={300}
         className="rounded-lg shadow-lg"
       />
       <img
         src="https://www.ghacks.net/wp-content/uploads/2023/08/AI-generated-art-copyright.jpg"
         alt="Generated art4"
         width={300}
         className="rounded-lg shadow-lg"
       />
     </div>
   </section>
 );
};

export default Header;
