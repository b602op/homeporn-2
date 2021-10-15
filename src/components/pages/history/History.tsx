import React from 'react';
import { useSelector } from 'react-redux';

import {
  Header, Card, Footer,
} from 'src/components/ui';
import { OptsType } from 'src/types/types';

import './History.css';

type PagePropTypes = {
}

const Page: React.FC<PagePropTypes> = () => {
  const options = useSelector(state => (state as any).changeOptions.options);

  const optionContent = options.map((option: OptsType) => <Card option={option} />)

  // console.log(options, ' options?')

  return (
    <>
      <Header leftInfo="philip1967/my-awesome-repo" />
        <main className="history-main">
            <div className="history-cards">
                {optionContent}
            </div>
            {/* todo */}
        </main>
      <Footer />
    </>
  )
}

export default Page;
