import Image from 'next/image'

export default function Social({ src, alt, href }: { src: string; alt: string; href: string }) {
  return (
    <a href={href} target="_blank">
      <Image alt={alt} src={src} width={36} height={36} />
    </a>
  )
}
