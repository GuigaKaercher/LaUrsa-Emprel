import React, { useState } from "react";
import { IoHome } from "react-icons/io5";
import { IoHomeOutline } from "react-icons/io5";
import { BsFillCalendarEventFill } from "react-icons/bs";
import { ImMap2 } from "react-icons/im";
import { MdFavoriteBorder } from "react-icons/md";
import { FaRegUser } from "react-icons/fa6";
import { BsCalendar4Event } from "react-icons/bs";
import { ImMap } from "react-icons/im";
import { MdOutlineFavorite } from "react-icons/md";
import { FaUser } from "react-icons/fa6";


export interface NavBarProps {
  disabled?: boolean;
  style?: React.CSSProperties;
  activeIndex?: number;
  onChange?: (index: number) => void;
}

const NAV_ITEMS = [
  { label: "Home", icon: IoHomeOutline, iconActive: IoHome },
  { label: "Eventos", icon: BsCalendar4Event, iconActive: BsFillCalendarEventFill },
  { label: "Mapa", icon: ImMap2 , iconActive: ImMap },
  { label: "Favoritos", icon: MdFavoriteBorder, iconActive: MdOutlineFavorite },
  { label: "Usuário", icon: FaRegUser, iconActive: FaUser },
];

export const NavBar = ({
  disabled = false,
  style,
  activeIndex = 0,
  onChange,
}: NavBarProps) => {
  const [hovered, setHovered] = useState<number | null>(null);

  const getNavBarStyle = () => ({
    display: "flex",
    flexDirection: "row" as const,
    justifyContent: "space-between",
    alignItems: "center",
    background: "#0F57BF",
    borderRadius: "4px",
    padding: "0 16px",
    height: "72px",
    width: "100%",
    maxWidth: "540px",
    fontFamily: "'Inter', Arial, sans-serif",
    ...style,
  });

  const getItemStyle = (active: boolean, isHovered: boolean) => ({
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    height: "56px",
    borderRadius: "8px",
    background: active
      ? "#0F57BF"
      : isHovered && !disabled
      ? "#6091fa22"
      : "transparent",
    color: "#fff",
    cursor: disabled ? "not-allowed" : "pointer",
    transition: "background 0.2s",
    fontWeight: active ? 700 : 600,
    fontSize: "12px",
    gap: "4px",
    margin: "8px 4px",
    opacity: disabled ? 0.5 : 1,
    border: "none",
  });

  return (
    <nav style={getNavBarStyle()}>
      {NAV_ITEMS.map((item, idx) => {
        const active = idx === activeIndex;
        const isHovered = hovered === idx;
        
      const Icon = active && item.iconActive ? item.iconActive : item.icon;
        return (
          <div
            key={item.label}
            style={getItemStyle(active, isHovered)}
            onClick={() => !disabled && onChange && onChange(idx)}
            onMouseEnter={() => setHovered(idx)}
            onMouseLeave={() => setHovered(null)}
            tabIndex={0}
          >
            <span
              style={{
                fontSize: 24,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: active ? "#0F57BF" : "transparent",
                borderRadius: "50%",
                width: 36,
                height: 36,
                marginBottom: 2,
                transition: "background 0.2s",
              }}
            >
              <Icon color={active ? "#fff" : "#fff"} size={22} />
            </span>
            <span>{item.label}</span>
          </div>
        );
      })}
    </nav>
  );
};

export default NavBar;