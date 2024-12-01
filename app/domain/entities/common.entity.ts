import { ReactNode } from 'react'

export interface ChildrenProps {
  children: ReactNode
  className?: ''
}

export interface DialogProps {
  isOpen: boolean
  children: ReactNode
  maxWidth?: string
  onClose: () => void
}
