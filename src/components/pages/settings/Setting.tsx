import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import {
  Button, Info,
  Header, InputNumber,
  Footer, Input,
} from 'src/components/ui';
import { OptsType } from 'src/types/types';

import './Setting.css';

type PageProps = {
  options?: OptsType;
}

const defaultOpts: OptsType = {
  name: '',
  command: '',
  mainBranch: '',
  time: 0,
}

const Page: React.FC<PageProps> = ({ options }: PageProps) => {
  const [opts, setOpts] = useState<OptsType>(options || defaultOpts);

  const dispatch = useDispatch();

  const handleSave = () => {
    dispatch({ type: 'CHANGE_OPTIONS', payload: opts });
    
    setOpts(defaultOpts);
  }

  const handleCancel = () => {
    console.log('cancel', opts)
    setOpts(defaultOpts);
  }

  const handleChange = (key: keyof typeof defaultOpts, value: string | number) => {
    setOpts({...opts, [key]: value });
  }

  const {name, command, mainBranch, time} = opts;

  return (
    <div className="main-container">
      <Header isSetting={false} />
      <main className="main-content-setting">
        <Info type="h2" align="left">Setting</Info>
        <Info type="correction" align="left" ownStyles="margin8px0px22px">Configure repository connection and synchronization settings.</Info>
        <Input
          onChange={(value: string) => handleChange('name', value)}
          important
          placeholder="user name/repo-name"
          value={name}
        >
          GitHub repository
        </Input>
        <Input
          onChange={(value: string) => handleChange('command', value)}
          placeholder="command"
          important
          value={command}
        >
          Build command
        </Input>
        <Input
          onChange={(value: string) => handleChange('mainBranch', value)}
          placeholder="name branch"
          value={mainBranch}
        >
          Main Branch
        </Input>
        <div className="row margin2px0px">
          <Info>Synchronize every</Info>
          <InputNumber 
            placeholder="0"
            ownStyles="margin-left8px"
            onChange={(value: number) => handleChange('time', value)}
            value={time}
            min={0}
          />
          <Info ownStyles="margin-left8px">minutes</Info>
        </div>
        <div className="row row margin22px0px">
          <Button onClick={handleSave}>Save</Button>
          <Button onClick={handleCancel} ownStyles="margin-left8px">Cancel</Button>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Page;
