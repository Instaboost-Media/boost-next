export type NavItem = {
    text: string;
    sectionId: string;
  };
  
export type HamburgerMenuProps = {
  navItems: NavItem[];
};

export type MobileMenuProps = {
	menuOpen: boolean;
	handleClick: () => void;
	navItems: NavItem[]
};
