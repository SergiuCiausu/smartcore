import Link from 'next/link'
import React from 'react'

const Hero = ({titlu, subtitlu, buton}: {
  titlu: string,
  subtitlu: string,
  buton: string
}) => {
  return (
    <section
        className="w-[1120px] mx-auto pt-[144px] pb-[256px]">
        <div
            className="w-[700px]">
            <h1
                className="mb-4">
                {titlu}
            </h1>
            <p className="mb-8">{subtitlu}</p>
            <button className="px-8 hero-cta-btn cursor-pointer"><Link href="/"><p className="bold white-color">{buton}</p></Link></button>
        </div>
    </section>
  )
}

export default Hero