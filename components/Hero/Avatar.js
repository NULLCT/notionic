// https://react-svgr.com/playground/
import * as React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { lang } from '@/lib/lang'
import ProfileFile from '@/public/favicon.png'

const Avater = ({}) => {
  const {locale} = useRouter()
  const t = lang[locale]
  return(
    <div>
      <Image
        src={ProfileFile}
        className='rounded-full'
      />
    </div>
  )
}

export default Avater