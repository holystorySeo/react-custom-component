import React, { useState } from 'react';
import { AutoComplete } from './AutoComplete';
import { ClickToEdit } from './ClickToEdit';
import { Modal } from './Modal';
import { Tab } from './Tab';
import { Tag } from './Tag';
import { Toggle } from './Toggle';
import { CarouselIdx } from './CarouselIdx';
import { CarouselSlider } from './CarouselSlider';
import { Loading } from './Loading';

export function RootComponent({ idx }) {
  switch (idx) {
    case 0:
      return <Toggle />;
    case 1:
      return <Modal />;
    case 2:
      return <Tab />;
    case 3:
      return <Tag />;
    case 4:
      return <AutoComplete />;
    case 5:
      return <CarouselIdx />;
    case 6:
      return <CarouselSlider />;
    case 7:
      return <Loading />;
    default:
      return <Toggle />;
  }
}
