import { FC, ReactNode } from 'react'

type Props =
  | {
      children: ReactNode
      and?: undefined
      or?: undefined
      state: boolean
      state2?: undefined
    }
  | {
      children: ReactNode
      and: boolean
      or?: undefined
      state: boolean
      state2: boolean
    }
  | {
      children: ReactNode
      and?: undefined
      or: boolean
      state: boolean
      state2: boolean
    }

export const When: FC<Props> = ({
  children,
  and = undefined,
  or = undefined,
  state = false,
  state2 = undefined,
}) => {
  if (and) {
    if (state && state2) return <>{children}</>
  } else if (or) {
    if (state || state2) return <>{children}</>
  } else {
    if (state) return <>{children}</>
  }

  return null
}

