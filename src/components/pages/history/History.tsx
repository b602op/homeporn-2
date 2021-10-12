import React from 'react';

import {
  Header, Card, Footer,
} from 'src/components/ui';
import { OptsType } from 'src/types/types';

import './History.css';

type PagePropTypes = {
    options: OptsType[],
}

const Page: React.FC<PagePropTypes> = ({ options = [] }: PagePropTypes) => {
  const optionContent = options.map((option: OptsType) => <Card option={option} />)

  console.log(optionContent, ' optionContent?')

  return (
    <>
      <Header leftInfo="philip1967/my-awesome-repo" />
        <main className="history-main">
            {/* <div className="history-cards">
                {optionContent}
            </div> */}
            todo
        </main>
      <Footer />
    </>
  )
}

export default Page;
