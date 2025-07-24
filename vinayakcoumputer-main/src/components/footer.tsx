import Link from "next/link"

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/product">product</Link>
              </li>
              <li>
                <Link href="/services">Our Services</Link>
              </li>
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy-policy">Privacy Policy</Link>
              </li>
              
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Newsletter</h3>
            <p className="mb-4">Stay updated with our latest news and offers.</p>
            {/* Add newsletter form here */}
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Vinayak Computer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

