const Header: React.FC = () => {
 return (
   <section className="flex justify-between items-center gap-4 p-1">
     <div className="w-[28rem] flex flex-col gap-4">
       <h1 className="text-3xl font-bold text-gray-700"
       style={{
        letterSpacing : "1px"
       }}>GenPic AI</h1>
       <p className="text-xl font-medium text-gray-600" 
       style={{
        letterSpacing : "1.5px"
       }}>Welcome to our innovative AI-powered React application! </p>
       <p className="font-medium text-gray-600"
       style={{
        letterSpacing : "1.5px"
       }}>This app combines the power of artificial intelligence with the versatility of React to provide a seamless and interactive user experience.</p>
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
