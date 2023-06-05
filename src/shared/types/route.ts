import { ReactNode } from 'react'

export interface Route {
  label: string
  href?: string
  icon: ReactNode
  items?: Route[]
}
