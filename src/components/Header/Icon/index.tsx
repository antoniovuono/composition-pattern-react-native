import React from 'react';
import { Ionicons } from "@expo/vector-icons";


type IconProps = {
    iconName: React.ComponentProps<typeof Ionicons>['name'];
}

export const Icon = ({iconName}: IconProps) => {
return <Ionicons name={iconName} size={19} color="white" />
}