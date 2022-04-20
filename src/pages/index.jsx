import Head from 'next/head'
import Image from 'next/image'

import { LayoutPage } from '../layout/LayoutPage'
import { AddElement } from '../ui/cards/AddElement'
import { CardPerson } from '../ui/cards/CardPerson'

export default function Home () {
  return (
    <LayoutPage>
      <CardPerson />
      <AddElement />
    </LayoutPage>
  )
}
