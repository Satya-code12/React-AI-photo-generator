const Navbar: React.FC = () => {
  return (
    <div className="shadow-lg bg-transparent flex justify-between p-1 border rounded-lg"
    style={{
      letterSpacing : "1px"
     }}>
     <h1 className="font-semibold text-3xl text-gray-700 ">GenPic AI</h1>
     <button className="font-medium text-lg text-gray-700 hover:text-black">About</button>
    </div>
  )
}

export default Navbar
