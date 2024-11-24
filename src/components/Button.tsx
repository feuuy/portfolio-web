import { Button } from '@nextui-org/react'

export default function MyButton({
  children,
  variant,
  onClick,
}: {
  children: React.ReactNode
  variant?: 'solid' | 'bordered' | 'light' | 'flat' | 'faded' | 'shadow' | 'ghost' | undefined
  onClick?: () => void
}) {
  return (
    <Button isIconOnly variant={variant} className={`text-2xl text-foreground`} onClick={onClick}>
      {children}
    </Button>
  )
}
