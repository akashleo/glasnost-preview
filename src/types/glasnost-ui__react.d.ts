declare module '@glasnost-ui/react' {
  import { ReactNode } from 'react';

  export interface ProfileCardProps {
    avatar: string;
    name: string;
    title: string;
    actions?: ReactNode;
  }

  export interface GlassButtonProps {
    children: ReactNode;
    size?: 'small' | 'medium' | 'large';
    variant?: 'primary' | 'secondary' | 'accent';
    disabled?: boolean;
    onClick?: () => void;
  }

  export interface CommentListCardProps {
    title: string;
    children: ReactNode;
    className?: string;
    onMore?: () => void;
    showMoreButton?: boolean;
    count?: number;
    moreButtonText?: string;
  }

  export interface GlassToggleButtonProps {
    checked: boolean;
    onChange: (checked: boolean) => void;
    size?: 'small' | 'medium' | 'large';
    variant?: 'primary' | 'secondary' | 'accent';
    disabled?: boolean;
    label?: string;
  }

  export interface HamburgerMenuProps {
    isOpen: boolean;
    onToggle: () => void;
  }

  export interface NavbarProps {
    leftSlot?: ReactNode;
    centerLogo?: ReactNode;
    rightSlot?: ReactNode;
  }

  export const ProfileCard: React.FC<ProfileCardProps>;
  export const GlassButton: React.FC<GlassButtonProps>;
  export const CommentListCard: React.FC<CommentListCardProps>;
  export const GlassToggleButton: React.FC<GlassToggleButtonProps>;
  export const HamburgerMenu: React.FC<HamburgerMenuProps>;
  export const Navbar: React.FC<NavbarProps>;
} 