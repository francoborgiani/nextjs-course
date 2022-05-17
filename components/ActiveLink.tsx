import { CSSProperties } from 'react';
import { useRouter } from 'next/router'
import Link from 'next/link'

const style: CSSProperties = {
  color: '#0070f3',
  textDecoration: 'underline'
}

interface Props {
  href: string,
  text: string
}

export const ActiveLink = ({href , text}: Props) => {
  const { asPath } = useRouter()
  return (
    <Link href={ href }>
      <a style={href === asPath ? style : {}}>{ text }</a>
    </Link>
    )
}
