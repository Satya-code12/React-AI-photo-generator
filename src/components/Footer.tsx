import { Facebook, Github, Instagram, Mail } from "lucide-react"


const Footer = () => {
  return (
    <section className="bg-gray-900 flex justify-between p-6 text-white font-medium text-xl sticky rounded-xl">
     <div>
      <h1>
       Let's connect ...!
      </h1>
    </div>
    <div className="flex gap-4">
    <a href="https://www.facebook.com/profile.php?id=100055232070736" target="_blank" rel="noopener noreferrer">
        <button><Facebook /></button>
      </a>
      <a href="https://github.com/Satya-code12" target="_blank" rel="noopener noreferrer">
        <button><Github /></button>
      </a>
      <a href="https://www.instagram.com/____.satya.____/" target="_blank" rel="noopener noreferrer">
        <button><Instagram /></button>
      </a>
      <a href="mailto:satyabrat637@gmail.com">
        <button>
          <Mail />
        </button>
      </a>
    </div>
    </section>
  )
}

export default Footer
