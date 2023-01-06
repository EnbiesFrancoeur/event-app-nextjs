import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <>
      <header>
        <div className='header'>
          <Link href="/" className='logo'>
            <Image src={'/logo-no-bg.png'} width={100} height={75} alt="logo" />
          </Link>
          <nav>
            <Link href="/" className='nav'>Home</Link>
            <Link href="/about" className='nav'>About</Link>
            <Link href="/events" className='nav'>Events</Link>
          </nav>
        </div>
      </header>
    </>

  )
}
