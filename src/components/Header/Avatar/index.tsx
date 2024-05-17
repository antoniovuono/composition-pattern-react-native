import React from 'react';

import {
 Photo
} from './styles';

type AvatarProps = {
    url: string;
}

export const Avatar = ({url}: AvatarProps) => {
return  <Photo source={{ uri: url }}/> 
}