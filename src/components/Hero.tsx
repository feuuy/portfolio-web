import Button from './Button'

export default function Hero() {
  return (
    <div className="flex flex-col gap-16">
      <h1 className="text-6xl">
        I&apos;m a{' '}
        <span className="bg-gradient-to-r from-green-600 via-green-400 to-green-600 text-transparent bg-clip-text">
          Full-Stack Developer
        </span>{' '}
        helping you turn ideas into clicks.
      </h1>
      <div className="w-full md:w-1/3">
        <Button icon>Let&apos;s talk</Button>
      </div>
    </div>
  )
}
