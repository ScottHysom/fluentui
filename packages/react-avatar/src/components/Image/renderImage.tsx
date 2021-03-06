import * as React from 'react';
import { ImageState } from './Image.types';
import { getSlots } from '@fluentui/react-utils';

export const renderImage = (state: ImageState) => {
  const { slots, slotProps } = getSlots(state);
  return <slots.root {...slotProps.root} />;
};
