import icons, { ALL_ICONS } from 'constants/icons';
import React from 'react';

interface Props {
  icon: keyof typeof ALL_ICONS;
  viewBox?: string;
  className?: string;
  fill?: string;
  onClick?: (e: React.SyntheticEvent) => void;
}

const BaseIcon: React.FC<Props> = ({
  icon,
  viewBox = '0 0 30 30',
  className = '',
  fill = 'none',
  onClick,
}) => (
  <svg className={className} viewBox={viewBox} fill={fill} onClick={onClick}>
    {icons[icon]}
  </svg>
);

export default BaseIcon;
