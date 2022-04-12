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

export function RootComponent({
  idx,
  handleSubContainerBorder,
  subContainerBorder,
}) {
  switch (idx) {
    case 0:
      return <Toggle handleSubContainerBorder={handleSubContainerBorder} />;
    case 1:
      return <Modal handleSubContainerBorder={handleSubContainerBorder} />;
    case 2:
      return (
        <Tab
          subContainerBorder={subContainerBorder}
          handleSubContainerBorder={handleSubContainerBorder}
        />
      );
    case 3:
      return (
        <Tag
          subContainerBorder={subContainerBorder}
          handleSubContainerBorder={handleSubContainerBorder}
        />
      );
    case 4:
      return (
        <AutoComplete
          subContainerBorder={subContainerBorder}
          handleSubContainerBorder={handleSubContainerBorder}
        />
      );
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
