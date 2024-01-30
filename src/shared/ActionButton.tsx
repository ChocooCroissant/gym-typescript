import React from 'react'
import { SelectedPage } from './types';
import AnchorLink from 'react-anchor-link-smooth-scroll';

type Props = {
    children: React.ReactNode,
    setSelectedPage: (value: SelectedPage) => void,
}

const ActionButton = ({children, setSelectedPage}: Props) => {
  return (
    <AnchorLink 
        style={{transition: 'background-color 0.5s'}}
        className=' rounded-md bg-secondary-500 px-10  hover:bg-primary-500 hover:text-white'
        onClick={() => setSelectedPage(SelectedPage.ContactUs)}
        href={`#${SelectedPage.ContactUs}`}
    >
        {children}
    </AnchorLink>
  )
};

export default ActionButton