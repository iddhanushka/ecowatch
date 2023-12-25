function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black/85 py-[20px]">
      <div className="container m-auto">
        <h1 className="text-center text-[#A9C83A] text-[14px]">All rights reserved &copy; {currentYear}</h1>
      </div>
    </footer>
  )
}

export default Footer
