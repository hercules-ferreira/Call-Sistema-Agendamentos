import React from 'react'
import ArrowRight from './IconsSvg/ArrowRight.svg'
import Image from 'next/image'

interface IconsProps {
  svg: 'arrowRight'
}

export const Icons: React.FC<IconsProps> = ({ svg }) => {
  return (
    <div>
      {svg === 'arrowRight' && <Image src={ArrowRight} alt="ArrowRight" />}
    </div>
  )
}
