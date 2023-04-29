// https://react-svgr.com/playground/
import Image from 'next/image'
import ProfileFile from '@/public/favicon.png'

const NotionAvater = ({}) => {
  return(
    <Image
      src={ProfileFile}
      className='rounded-full'
    />
  )
}

export default NotionAvater