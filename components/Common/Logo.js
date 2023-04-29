// https://react-svgr.com/playground/
import Image from 'next/image'
import ProfileFile from '@/public/favicon.png'

const Logo = ({}) => {
  return(
    <Image
      src={ProfileFile}
      width={50}
      height={50}
      className='rounded-full'
    />
  )
}

export default Logo